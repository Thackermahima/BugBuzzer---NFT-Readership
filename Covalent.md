# Covalent 
```
useEffect(() => {
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
  }) 
  },[])
  
  ```
