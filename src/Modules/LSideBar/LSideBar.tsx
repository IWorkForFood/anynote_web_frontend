import NotesBtn from "./UI/NotesBtn.tsx";
import SettingsBtn from "./UI/SettingsBtn.tsx";
import TestBtn from "./UI/TestBtn.tsx";
import "./LSideBar.scss"
import LSideBarInner from "./Components/LSideBarInner/LSideBarInner.tsx";


function LSideBar() {
    return (
        <>
            <div className={"LSideBar"}>
                <div className="LSideBar__container">
                    <SettingsBtn/>
                    <NotesBtn/>
                    <TestBtn/>
                </div>
            </div>
            <LSideBarInner/>
        </>
    )
}

export default LSideBar;