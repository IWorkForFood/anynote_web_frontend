import {NoteMode, useNoteRenderStore} from "../store/NoteRenderStore.ts";
import imageSVG from "../../../../../../../shared/UI/icons/image.svg"
import "./NoteModeBtn.scss"


function ViewModeBtn() {
    //@ts-expect-error zustand
    const setMode = useNoteRenderStore(state => state.setMode)

    function setViewMode() {
        setMode(NoteMode.Edit)
    }

    return (
        <div className="NoteModeSwitchBtn" onClick={setViewMode}>
            <div className="NoteModeSwitchBtn__spacer"></div>
            <div className="NoteModeSwitchBtn__container">
                <img src={imageSVG} alt=""/>
            </div>
        </div>
    )


}

export default ViewModeBtn;