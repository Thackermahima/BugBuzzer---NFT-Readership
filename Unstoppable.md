# Login with Unstoppable 
```
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
