## Graphql Back-End

### Setting up the workspace

To have the application running, I assume that you have ````node```` and ````yarn```` installed (I used v12.19.0), 
though I have used ```yarn``` ```npm``` should also work(not tested)

```
yarn install
```

### How to run the application

```
yarn start 
```

Upon running the above command, it will start the graphql backend server
and a ```json-server``` for mocking the rest api.

The graphql server runs on port 4000, and the mock server runs on port 3000.

*NOTE: Some times while killing( `` ctrl + c ``), the json-server process takes some time.*
