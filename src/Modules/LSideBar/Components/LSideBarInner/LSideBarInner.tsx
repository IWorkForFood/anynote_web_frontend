import "./LSideBarInner.scss"
import {SelectedMenu, useLSideBarStore} from "../../store/LSideBarStore.ts";
import SettingsMenu from "./Components/SettingsMenu/SettingsMenu.tsx";
import NotesMenu from "./Components/NotesMenu/NotesMenu.tsx";


function LSideBarInner() {

    // @ts-expect-error state is defined in store/LSideBarStore.ts
    const selectedMenu = useLSideBarStore(state => state.selectedMenu)

    let active: string = "";
    switch (selectedMenu) {
        case SelectedMenu.Settings:
            active = "active"
            break
        default:
            active = "active"
            break
        case SelectedMenu.None:
            active = ""
            break
    }

    return (
        <div className={"LSideBarInner "+ active}>
            <SettingsMenu/>
            <NotesMenu/>
        </div>
    )
}

export default LSideBarInner;