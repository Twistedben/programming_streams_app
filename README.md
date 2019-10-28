# Programming Streams App

## Description

A video streaming app where you can use OBS to stream programming sessions.

### Tech Specifications

- Built in React.JS & Create-React-App
  - React Router
  - Google OAuth
  - Redux Form
  - JSON-Server Configuration for JSON DB storage and REST
  - Axios for backend API requests and CRUD actions.
  - Redux & Redux Thunk
  - Lodash for object manipulation
  - Node Media Server for RTMP video streaming (FLV.js & NodeMediaServer)

#### Notes

1. To run JSON-Server, cd into `/api` folder and run `npm start`. JSON-Server runs at :3001 and <http://localhost:3001/streams>
2. To run app, cd into `/client` folder and run `npm start`
3. To run media server for RTMP video streaming, cd into `/rtmpserver` and run `npm start`. NodeMediaServer runs on port :8000, RTMP on port :1935
4. To stream from OBS, find the ID of your stream in the URL, for example the '6' in (/streams/6), open OBS, File -> Settings then Stream, in Service select from the dropdown `Custom...`, in Server type in `rtmp://localhost/live`, and for the Stream Key, enter the ID in the URL previously mentioned (for example: 6 in this case), then Start Streaming.
