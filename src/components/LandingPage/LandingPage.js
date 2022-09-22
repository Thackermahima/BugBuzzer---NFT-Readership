import React from "react";
import { Link } from "react-router-dom";
import AskQuestion from "../Q and A/AskQuestion";
import QandAdetail from "../Q and A/Q&Adetail";
import Questiondetail from "../Q and A/Questiondetail";

function LandingPage() {

    return (
        <div className="container-fluid landigpage-contain">
            <div className="landing-img" >
                <img className="landing-page-img"style={{marginTop:"71px",width:"100vw"}} src="https://trackjs.com/assets/images/illustrations/protected_script.svg"></img>
                
            </div>
        </div>
    )
}

export default LandingPage;
    