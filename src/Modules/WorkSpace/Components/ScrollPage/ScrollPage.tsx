import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import "./ScrollPage.scss"
import "overlayscrollbars/overlayscrollbars.css"
import NoteRender from "./Components/NoteRender/NoteRender.tsx";
import {useRef} from "react";


function ScrollPage() {

    const scrollRef = useRef(null);


    return (
        <OverlayScrollbarsComponent
            ref={scrollRef}
            className="ScrollPage"
            options={
                {
                    scrollbars: {
                        autoHide: "move"
                    }
                }
            }
            // defer
        >
            <div className="ScrollPage__container">
                <NoteRender/>
            </div>
        </OverlayScrollbarsComponent>
    )
}

export default ScrollPage;