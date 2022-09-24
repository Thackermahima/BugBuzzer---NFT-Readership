# BugBuzzer

**Token gated tech forum and bug bounty platform for builders where we have provided Q & A forum with crypto rewards, nft readership, live support with expert developers, and can connect with bug buzzer and developers.**

![Bug Buzzer Banner 640 - 360](https://user-images.githubusercontent.com/81761152/192082962-627821ac-2b86-4c1c-ac64-9857f70de9f3.png)

# Q & A platform.
***
Developers can ask challenging problems and earn crypto rewards.

***
# NFT Membership for developers.
Here anyone can create their own NFT membership club. 

***

# Live tech support with expert developers.
Tech support with expert developers.

***
# Connect with BugBuzzer and developers
People can connect , collaborate and hire expert developers
of the BugBuzzer community .

***
# Profile 

***

    
   # Polygon
    
    ```
    function createToken(string memory name, string memory symbol) public {
        address _address = address(new mintContract(name, symbol)); // Created Token contract.
         tokenNames[_address] = name;
        emit TokenCreated(msg.sender, _address);
    }
    function bulkMintERC721(
        address mintor,
        address tokenAddress,
        uint256 start,
        uint256 end,
        uint256 price
    ) public {
        for (uint256 i = start; i < end; i++) {
            mintContract(tokenAddress).safeMint(mintor , price, tokenNames[tokenAddress]);
        }
    }
    ```    
   # Covalent 
    ``` useEffect(() => {
    axios.get(https://api.covalenthq.com/v1/80001/tokens/${address}/nft_token_ids/?key=ckey_326b5347eff049c69bc901fc77a`)
      .then((response) => {
        let Items = response.data.data.items;
        console.log('Items---', Items);
        Items.map((itemm) => {
          axios.get(https://api.covalenthq.com/v1/80001/tokens/${address}/nft_metadata/${itemm.token_id}/?key=ckey_326b5347eff049c69bc901fc77a).then((response) => {
            // console.log('response-==-==',response);
            let Metadata = response.data.data.items;
            console.log('Metadata---', Metadata);
          })
        })
        setAllTokenIds(Items)
      }) },[]) ```
 

  # Livepeer
  ``` import { Client, isSupported } from '@livepeer/webrtmp-sdk';
   const client = new Client()

        const session = client.cast(stream.current, streamKey)

        session.on('open', () => {
            console.log('Stream started.')
            alert('Stream started; visit Livepeer Dashboard.')
        })

        session.on('close', () => {
            console.log('Stream stopped.')
        })

        session.on('error', (err) => {
            console.log('Stream error.', err.message)
        })
    }
  ```
   
  
   # EPNS
   
       ``` const PK = process.env.REACT_APP_EPNS_PRIVATE_KEY;
        const Pkey = 0x${PK};
        const epnsSdk = new EpnsSDK(Pkey)
        console.log(epnsSdk, "epnsSDK");
        const txEPNS = await epnsSdk.sendNotification(
          userAdd,
          "Hey there",
          "Welcome to the BugBuzzer",
          ${authorname} Created NFT,
           Uploaded collection of ${symbol} NFTs successfully!,
          3, //this is the notificationType
          '', // a url for users to be redirected to
          '',// an image url, or an empty string
          null, //this can be left as null
        ); 
        ```
             
  # XMTP
        ``` useEffect(() => {
        const getConvo = async () => {
            if (!xmtp) {
                return
            }
            setConversation(await xmtp.conversations.newConversation(peerAddress))
        }
        getConvo()
    }, [xmtp, peerAddress])

    useEffect(() => {
        const closeStream = async () => {
            if (!stream) return
            await stream.return()
        }
        closeStream()
    }, [peerAddress])

    useEffect(() => {
        const getList = async () => {
            await xmtp.conversations.newConversation(peerAddress)
            const lst = await xmtp.conversations.list();
            setUserList(lst);
        }
        if (xmtp) {
            getList()
        }
    }, [conversation, peerAddress]) 
    ```    
        
   # Login with Unstoppable.
``` async function inlog() {

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
  ```
       
   # WorldCoin
    ``` <WorldIDWidget
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
                onInitError={(error) => console.log("Error while initialization World ID", error)} />  
                ``` 
    
   
   # IPFS & Filecoin 
     ``` function addData(Item) {
        const blob = new Blob(
            [
                JSON.stringify(Item),
            ],
            { type: "application/json" }
        );
        const files = [
            new File([blob], "story.json"),
        ];
        console.log('files==>', files);
        return files;

    }
    async function storeFiles(Item) {

        StoryPad.set('Currunt_user', user);
        let files = addData(Item);
        const cid = await client.put(files);
        StoryPad.set("CID", cid);
        StoryPad.save();

        console.log("files with cid ==>",  https://dweb.link/ipfs/${cid}/story.json);

        return cid;
    } 
    ```
    
