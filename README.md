# Socket.io demo
Simple demo that allows to a test connect to a socket.io server.
You can use online test client for simple test:
  https://www.piesocket.com/socketio-tester

## How to start
You need a relatively up-to-date node version installed locally to run it.

```ts
npm install
npm start
```

## How it works
For every message send to it, the server send back `reply:{MSG}` message.
Additionally, it will log every connect, message and disconnect to the standard output.

## Android
Consider using socket.io native support: 
  https://socket.io/blog/native-socket-io-and-android/

## iOS
Consider using socket.io native support: 
  https://socket.io/blog/socket-io-on-ios/
