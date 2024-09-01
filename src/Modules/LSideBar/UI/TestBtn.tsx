import "./scss/LSideBarBtn.scss";
import {useEffect} from "react";
import {SelectedMenu, useLSideBarStore} from "../store/LSideBarStore.ts";
import FileSVG from "../../../shared/UI/icons/file.svg"


function TestBtn() {
    // @ts-expect-error state is defined in store/LSideBarStore.ts
    const selectedMenu = useLSideBarStore(state => state.selectedMenu)
    // @ts-expect-error state is defined in store/LSideBarStore.ts
    const setSelectedMenu = useLSideBarStore(state => state.setSelectedMenu)

    const selectTest = () => {
        switch (selectedMenu) {
            case SelectedMenu.Test:
                setSelectedMenu(SelectedMenu.None);
                break;
            default:
                setSelectedMenu(SelectedMenu.Test);
                break;
        }
    }


    switch (selectedMenu) {
        case SelectedMenu.Test:
            return (
                <div className="lsidebar-btn lsidebar-btn--test active" onClick={selectTest}>
                    <img src={FileSVG} alt=""/>
                    <div className="icon-shadow"></div>
                </div>
            );
        default:
            return (
                <div className="lsidebar-btn lsidebar-btn--test" onClick={selectTest}>
                    <img src={FileSVG} alt=""/>
                    <div className="icon-shadow"></div>
                </div>
            );
    }

}

export default TestBtn;