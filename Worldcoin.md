# Worldcoin
```

<WorldIDWidget
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
