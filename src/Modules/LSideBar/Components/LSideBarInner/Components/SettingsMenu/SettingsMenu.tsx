import {SelectedMenu, useLSideBarStore} from "../../../../store/LSideBarStore.ts";

import "./SettingsMenu.scss"


function SettingsMenu() {

    // @ts-expect-error state is defined in store/LSideBarStore.ts
    const selectedMenu = useLSideBarStore(state => state.selectedMenu)

    switch (selectedMenu) {
        case SelectedMenu.Settings:
            return (
                <div className="SettingsMenu">
                    <div className="SettingsMenu__container">
                        Settings
                    </div>
                </div>
            )
        default:
            return (
                <></>
            )
    }
}

export default SettingsMenu;