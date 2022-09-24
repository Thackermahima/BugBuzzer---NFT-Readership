  # EPNS
 ```
 const PK = process.env.REACT_APP_EPNS_PRIVATE_KEY;
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
