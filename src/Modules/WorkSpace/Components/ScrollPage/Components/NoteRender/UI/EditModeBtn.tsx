import {NoteMode, useNoteRenderStore} from "../store/NoteRenderStore.ts";
import pencilSVG from "../../../../../../../shared/UI/icons/pensil.svg"
import "./NoteModeBtn.scss"


function EditModeBtn() {
    //@ts-expect-error zustand
    const setMode = useNoteRenderStore(state => state.setMode)

    function setEditMode() {
        setMode(NoteMode.View)
    }

    return (
        <div className="NoteModeSwitchBtn" onClick={setEditMode}>
            <div className="NoteModeSwitchBtn__spacer"></div>
            <div className="NoteModeSwitchBtn__container">
                <img src={pencilSVG} alt=""/>
            </div>
        </div>
    )


}

export default EditModeBtn;