import "./scss/LSideBarBtn.scss"
import {useEffect} from "react";
import {SelectedMenu, useLSideBarStore} from "../store/LSideBarStore.ts";
import SettingsSVG from "../../../shared/UI/icons/settings.svg"


function SettingsBtn() {

    // @ts-expect-error state is defined in store/LSideBarStore.ts
    const selectedMenu = useLSideBarStore(state => state.selectedMenu)
    // @ts-expect-error state is defined in store/LSideBarStore.ts
    const setSelectedMenu = useLSideBarStore(state => state.setSelectedMenu)


    const selectSettings = () => {
        switch (selectedMenu) {
            case SelectedMenu.Settings:
                setSelectedMenu(SelectedMenu.None);
                break;
            default:
                setSelectedMenu(SelectedMenu.Settings);
                break;
        }
    }


    switch (selectedMenu) {
        case SelectedMenu.Settings:
            return (
                <div className="lsidebar-btn lsidebar-btn--settings active" onClick={selectSettings}>
                    <img src={SettingsSVG} alt=""/>
                    <div className="icon-shadow"></div>
                </div>
            );
        default:
            return (
                <div className="lsidebar-btn lsidebar-btn--settings" onClick={selectSettings}>
                    <img src={SettingsSVG} alt=""/>
                    <div className="icon-shadow"></div>
                </div>
            );
    }

}

export default SettingsBtn;