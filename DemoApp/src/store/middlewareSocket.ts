// import {RootState} from 'reducer';
// import {Middleware} from 'redux';
// import * as signalR from '@microsoft/signalr';

// export const connection = new signalR.HubConnectionBuilder()
//   .withUrl('')
//   .configureLogging(signalR.LogLevel.Information)
//   .withAutomaticReconnect()
//   .build();

// // start connect
// connection
//   .start()
//   .then(() => console.log('Connect success ^^!!!'))
//   .catch(err => console.log('Connect Error @@', JSON.stringify(err)));

// export const middlewareSocket: Middleware<
//   {}, // Most middleware do not modify the dispatch return value
//   RootState
// > = storeApi => next => action => {
//   // listen
//   connection.on('hello', data => {
//     console.log('hello', data);
//     storeApi.getState();
//   });
//   connection.on('something', data => {
//     //doPushMessageGroupChatsSocket
//     storeApi.dispatch('');
//   });

//   return next(action);
// };
