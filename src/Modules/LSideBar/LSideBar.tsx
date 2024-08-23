//@ts-expect-error svg import
import SettingsSVG from "../../shared/UI/icons/settings.svg"
//@ts-expect-error svg import
import NotesSVG from "../../shared/UI/icons/notes.svg"
import "./LSideBar.scss"

function LSideBar() {
    return (
        <div className={"LSideBar"}>
            <div className="LSideBar__container">
                <div className="lsidebar-btn LSideBar__settings-btn lsidebar-btn--settings">
                    <img src={SettingsSVG} alt=""/>
                    <div className="icon-shadow"></div>
                </div>
                <div className="lsidebar-btn LSideBar__notes-btn lsidebar-btn--notes">
                    <img src={NotesSVG} alt=""/>
                    <div className="icon-shadow"></div>
                </div>
                <div className="lsidebar-btn"></div>
                <div className="lsidebar-btn"></div>
            </div>
        </div>
    )
}

export default LSideBar;