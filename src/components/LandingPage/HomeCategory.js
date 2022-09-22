import React from "react";
import { Link } from "react-router-dom";
function HomeCategory() {
    return (<>

        <h2 className="browse-stories form-style-2-headin">BROWSE CATEGORY</h2>

        <div style={{ background: "mistyrose" }}>
            <div class="container">
                <div class="row">
                    <div class="col-md-4" style={{height:"260px"}}>

                        <div class="profile-card-2"><img src="../SMART CONTRACT.png" />
                            <Link to="fanfiction">
                                <div class="profile-name">SMART CONTRACT</div></Link>
                        </div>
                    </div>

                    <div class="col-md-4" style={{height:"260px"}}>

                        <div class="profile-card-2">

                            <img src="../VULNERABILITIES.jpg" />
                            <Link to="fantasy">
                                <div class="profile-name">SECURITY VULNERABILITIES</div>
                            </Link>

                        </div>
                    </div>
                    <div class="col-md-4" style={{height:"260px"}}>

                        <div class="profile-card-2"><img src="UXUI.png" class="img img-responsive" />
                            <Link to="horror">
                                <div class="profile-name">UI/UX</div></Link>
                        </div>
                    </div>
                    <div class="col-md-4" style={{height:"260px"}}>

                        <div class="profile-card-2"><img src="crypto SCAMS.jpg" class="img img-responsive" />
                            <Link to="mystery">
                                <div class="profile-name">CRYOTO SCAMS</div> </Link>
                        </div>
                    </div>
                    <div class="col-md-4" style={{height:"260px"}}>

                        <div class="profile-card-2"><img src="ITO.jpeg" class="img img-responsive" />
                            <Link to="romance">
                                <div class="profile-name">HARDWARE AND IOT</div> </Link>
                        </div>
                    </div>
                    <div class="col-md-4" style={{height:"260px"}}>

                        <div class="profile-card-2"><img src="FUNCTIONAL.png" />
                            <Link to="historical">
                                <div class="profile-name">FUNCTIONAL ISSUES</div> </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
    )
}

export default HomeCategory;