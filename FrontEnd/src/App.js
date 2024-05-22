import React from "react";
import HeaderComponent from "./component/headerComponent/HeaderComponent";
import HeaderAdmin from "./component/headerAdmin/HeaderAdmin";
import {useSelector} from "react-redux";

function App() {

    const isAdmin = useSelector(state => state.reducerAuth.admin);

    return (
        <div className="App">
            {true ? (<HeaderAdmin/>) : (<HeaderComponent/>)}
        </div>
    );
}

export default App;
