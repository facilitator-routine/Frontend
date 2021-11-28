import React from "react";
import {Loader} from "react-bulma-components";


const Loading = () =>{
    return(
        <div className="columns is-centered" data-testid="loader">
            <Loader></Loader>
        </div>
    )

}
export default Loading