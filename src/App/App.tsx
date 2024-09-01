

import LSideBar from "../Modules/LSideBar/LSideBar.tsx";
import "./App.scss"
import WorkSpace from "../Modules/WorkSpace/WorkSpace.tsx";

function App() {
    return (
        <div className={"App"}>
            <div className="App__container">

                <LSideBar/>

                <WorkSpace/>


            </div>
        </div>
    )
}

export default App;