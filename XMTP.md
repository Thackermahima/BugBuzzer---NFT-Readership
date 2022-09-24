# XMPTP 
```
useEffect(() => {
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
