import {RefObject} from "react";


export default function useYFixedHook(refRoot: RefObject<HTMLDivElement | null>) {
    document.addEventListener("scroll", () => {
        refRoot.current?.setAttribute("style", window.scrollY.toString() + "px");
    })
}