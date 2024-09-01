import {SelectedMenu, useLSideBarStore} from "../../../../store/LSideBarStore.ts";

import "./NotesMenu.scss"

function NotesMenu() {

    // @ts-expect-error state is defined in store/LSideBarStore.ts
    const selectedMenu = useLSideBarStore(state => state.selectedMenu)

    switch (selectedMenu) {
        case SelectedMenu.Notes:
            return (
                <div className="NotesMenu">
                    <div className="NotesMenu__container">
                        NotesList
                    </div>
                </div>
            )
        default:
            return (
                <></>
            )
    }


}

export default NotesMenu;