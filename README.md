# Application Monitoring
## Empower Plant

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

| dependency    | version
| ------------- |:-------------:|
| npx | 7.8.0 |
| npm | 7.8.0 |
| node | v.14.2.0 |
| react | ^17.0.2 |
| react-dom | ^17.0.2 |
| react-router-dom | ^5.2.0 |
| react-scripts | 4.0.3 |

redux, react-redux, redux-logger, will do later.

## Setup
```
npm install
```

## Run
Dev
```
npm start
```

Prod
```
npm build
serve -s build
```

## Questions
- Why are events not grouping into issues?
- Why the warning about 'invalid location in source map?'
    - maybe this is affecting grouping?
    - maybe this is due to react-scripts's webpack's chunking, and should be turned off?
    https://github.com/facebook/create-react-app/issues/5306#issuecomment-433425838
    https://stackoverflow.com/questions/55993890/how-can-i-disable-chunkcode-splitting-with-webpack4
    - Validate sourcemaps are built correctly
- TYPESCRIPT


webpack2 didn't have code-splitting (chunking)
webpack4 has it.
