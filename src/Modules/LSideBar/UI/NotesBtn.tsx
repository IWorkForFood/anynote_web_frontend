import "./scss/LSideBarBtn.scss"
import {useEffect} from "react";
import {SelectedMenu, useLSideBarStore} from "../store/LSideBarStore.ts";
import NotesSVG from "../../../shared/UI/icons/notes.svg"


function NotesBtn() {

    // @ts-expect-error state is defined in store/LSideBarStore.ts
    const selectedMenu = useLSideBarStore(state => state.selectedMenu)
    // @ts-expect-error state is defined in store/LSideBarStore.ts
    const setSelectedMenu = useLSideBarStore(state => state.setSelectedMenu)

    const selectNotes = () => {
        switch (selectedMenu) {
            case SelectedMenu.Notes:
                setSelectedMenu(SelectedMenu.None);
                break;
            default:
                setSelectedMenu(SelectedMenu.Notes);
                break;
        }
    }


    switch (selectedMenu) {
        case SelectedMenu.Notes:
            return (
                <div className="lsidebar-btn lsidebar-btn--notes active" onClick={selectNotes}>
                    <img src={NotesSVG} alt=""/>
                    <div className="icon-shadow"></div>
                </div>
            );
        default:
            return (
                <div className="lsidebar-btn lsidebar-btn--notes" onClick={selectNotes}>
                    <img src={NotesSVG} alt=""/>
                    <div className="icon-shadow"></div>
                </div>
            );
    }
}

export default NotesBtn;