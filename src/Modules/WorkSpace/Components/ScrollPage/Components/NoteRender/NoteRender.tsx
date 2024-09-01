import {ChangeEvent, useRef} from "react";
import {useNoteRenderStore, NoteMode} from "./store/NoteRenderStore.ts";
import "./NoteRender.scss";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EditModeBtn from "./UI/EditModeBtn.tsx";
import ViewModeBtn from "./UI/ViewModeBtn.tsx";


function NoteRender() {

    const noteRenderRef = useRef<HTMLTextAreaElement>(null);

    //@ts-expect-error zustand
    const noteText = useNoteRenderStore(state => state.noteText)
    //@ts-expect-error zustand
    const setCurrentNoteText = useNoteRenderStore(state => state.setNoteText)
    //@ts-expect-error zustand
    const noteMode = useNoteRenderStore(state => state.mode)
    //@ts-expect-error zustand
    const setNoteMode = useNoteRenderStore(state => state.setMode)

    function updateNoteText(e: ChangeEvent<HTMLTextAreaElement>) {
        setCurrentNoteText(e.target.value)
    }

    function setEditMode() {
        setNoteMode(NoteMode.Edit)
    }

    function setViewMode() {
        setNoteMode(NoteMode.View)
    }

    switch (noteMode) {
        case NoteMode.Edit:
            return (
                <div className="NoteRender">
                    <div className="NoteRender__click-tracker--left" onClick={setViewMode}></div>
                    <div className="NoteRender__container">

                        <EditModeBtn/>
                        <textarea className="NoteRender__edit-area"
                                  ref={noteRenderRef}
                                  value={noteText}
                                  onChange={(e) => updateNoteText(e)}
                        ></textarea>
                    </div>
                    <div className="NoteRender__click-tracker--right" onClick={setViewMode}></div>
                </div>
            )
        case NoteMode.View:
            return (
                <div className="NoteRender" onClick={setEditMode}>
                    <div className="NoteRender__container">
                        <ViewModeBtn/>
                        <Markdown remarkPlugins={[remarkGfm]}>
                            {noteText}
                        </Markdown>
                    </div>
                </div>
            )
    }


}

export default NoteRender