import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Stack, Box } from "@mui/material";
import { BookContext } from "../Context/BookContext";
import Avatar from 'react-avatar';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { api, utils } from "@epnsproject/frontend-sdk-staging";
import BellIcon from 'react-bell-icon';
import UAuth from '@uauth/js'
import TextField from '@mui/material/TextField';
// import { WorldIDWidget, WidgetProps } from "@worldcoin/id";
import { WorldIDWidget, WidgetProps } from "@worldcoin/id";
import Dropdown from 'react-bootstrap/Dropdown';
// import Button from '@mui/material/Button';




function Header() {
  const notify = () => toast("You are logged in!");
  const [loading, setLoading] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [value, setValue] = useState();

  // const [notificationItems, setNotificationItems] = useState([]);
  const bookContext = React.useContext(BookContext);

  const { login } = bookContext;


  const { Moralis, isAuthenticated, user } = useMoralis();
  // console.log(user, 'user');



  // 

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;




  //-------------- Unstoable Domain ----------------------------

  const unClient = new UAuth({
    clientID: "19ab2131-2b54-4e4e-b4d5-761715826c39",
    redirectUri: "http://localhost:3000",
    scope: "openid wallet"
  })
  async function inlog() {

    try {
      const authorization = await unClient.loginWithPopup();
      console.log(authorization);
      await localStorage.setItem("domain", authorization.idToken.sub)
      console.log(localStorage.getItem("domain"));
      const walletAddress = authorization.idToken.wallet_address;
      localStorage.setItem("currentUserAddress", walletAddress)
      refresh();
    } catch (error) {

      console.log(error);

    }

  }
  async function out() {
    await unClient.logout();
    console.log('Logged out with Unstoppable');
  }

  const refresh = () => {
    // re-renders the component
    setValue({});
  }


  //-------------- Unstoable Domain ----------------------------


  // ----Fetch notification from EPNS ------ 
  const [notificationItems, setNotificationItems] = useState([]);


  async function fetchNotifications() {
    if (localStorage.getItem("currentUserAddress")) {
      // define the variables required to make a request
      const walletAddress = localStorage.getItem("currentUserAddress");
      const pageNumber = 1;
      const itemsPerPage = 20;

      // fetch the notifications

      const { count, results } = await api.fetchNotifications(walletAddress, itemsPerPage, pageNumber)
      // console.log('fetchedNotifications-----', { results });


      // parse all the fetched notifications
      const parsedResponse = utils.parseApiResponse(results);
      console.log('parsedResponse----', parsedResponse);
      setNotificationItems(parsedResponse);

    }

  }




  useEffect(() => {
    // EPNS
    fetchNotifications();
  }, []);

  // ----Fetch notification from EPNS ------



  return (


    <AppBar color="inherit" position="fixed" sx={{ height: "70px" }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography  >
          <Link to="/">
            <img src="/BugBuzzer-Logo.png" alt="logo" />
          </Link>
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Link to="upload-form">
            <Button className="headers-btns">Write Story</Button>
          </Link>
          <Link to="/nft-upload">
            <Button className="headers-btns" >Add NFT Readership</Button>
          </Link>
          <Link to="readership-nft">
            <Button className="headers-btns" >NFT Readership</Button>
          </Link>


          <Link to="askQue">
            <Button className="headers-btns" style={{

            }}>Ask Q</Button>
          </Link>







          {/*---------------------------- LOG IN------------------------------- */}

          
          <Dropdown>
            <Dropdown.Toggle style={{ background: "#6EBF8B", color: '#151D3B' }} id="dropdown-basic">
              Login
            </Dropdown.Toggle>
            <Dropdown.Menu>

              <Dropdown.Item onClick={() => login()}>{isAuthenticated ? "Connected" : "Web3 Auth"}
              </Dropdown.Item>


              <Dropdown.Item onClick={inlog} >{
                localStorage.getItem("domain") !== null ? (
                  <small className="log-title">{localStorage.getItem("domain")}</small>
                ) : "Unstoppable"}
              </Dropdown.Item>


              <Dropdown.Item ><WorldIDWidget
                actionId="wid_staging_76474f51ceeaf9c0730fae2c659f637b" // obtain this  
                signal="user-id-1"
                enableTelemetry='false'
                appName="candyApp"
                signalDescription="Receive initial airdrop April 2022"
                theme="light"
                debug='true' // DO NOT SET TO `true` IN PRODUCTION
                onSuccess={(result) => console.log(result)}
                onError={({ code, detail }) => console.log({ code, detail })}
                onInitSuccess={() => console.log("Init successful")}
                onInitError={(error) => console.log("Error while initialization World ID", error)} /></Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

          {/*---------------------------- PROFILE ------------------------------- */}

          <Dropdown>
            <Dropdown.Toggle style={{ background: "black", color: 'green',border:"none",  borderColor:"white" }}  >
            <Avatar size={40} round="50px" src="https://www.pinpng.com/pngs/m/615-6154495_avatar-png-icon-business-woman-icon-vector-transparent.png" />
            </Dropdown.Toggle>
            <Dropdown.Menu>


              <Dropdown.Item >           <Link to="profile">  <Avatar size={40} round="50px" src="https://www.pinpng.com/pngs/m/615-6154495_avatar-png-icon-business-woman-icon-vector-transparent.png" /></Link></Dropdown.Item>


              <Dropdown.Item  ><div>
                <Button aria-describedby={id} onClick={handleClick}>
                  <BellIcon width='50' height='30' active={true} animate={false} />
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>

                    <div>
                      {notificationItems.map((notific) => {
                        return (
                          <div>
                            {/* {notific.icon} */}
                            <p style={{ backgroundColor: "#E0E0E0" }}>
                              <img src={notific.icon} alt="imagee" style={{ height: "50px", width: "50px", marginRight: "15px" }}></img>
                              <b> {notific.app}</b>
                            </p>
                            <p >
                              {/* style={{ backgroundColor: "#F8F8F8" }} */}
                              <p><b>{notific.title}</b></p>
                              <p>{notific.message}</p>

                            </p>

                            {/* <div style={{ border: "1px solid #bbb" }}></div> */}

                          </div>
                        )
                      })
                      }
                    </div>
                  </Typography>
                </Popover>
              </div></Dropdown.Item>


              <Dropdown.Item >
                <Link to="chatbox">

                  <Avatar size={40} round="50px" src="https://cdn.iconscout.com/icon/free/png-256/chat-2639493-2187526.png" />

                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>

          </Dropdown>

        </div>



      </Toolbar>
    </AppBar >

  )
}

export default Header;