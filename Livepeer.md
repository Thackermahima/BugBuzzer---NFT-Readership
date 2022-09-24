 ```
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
