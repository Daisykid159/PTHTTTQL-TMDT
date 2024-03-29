import React, {useEffect, useState} from "react";
import HeaderComponent from "./component/headerComponent/HeaderComponent";
import HeaderAdmin from "./component/headerAdmin/HeaderAdmin";
import {useSelector} from "react-redux";

function App() {

    const isAdmin = useSelector(state => state.reducerAuth.admin);

    const [admin, setAdmin] = useState(isAdmin);

    useEffect(() => {
        console.log(isAdmin)
        setAdmin(false)
    }, [isAdmin]);

    return (
        <div className="App">
            {admin ? (<HeaderAdmin/>) : (<HeaderComponent/>)}
        </div>
    );
}

export default App;
