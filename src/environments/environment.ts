// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCWx9vvDtc84ddmTFAau3OmT8n0KI9Itk0',
    authDomain: 'client-auth-fb04a.firebaseapp.com',
    databaseURL: 'https://client-auth-fb04a.firebaseio.com',
    projectId: 'client-auth-fb04a',
    storageBucket: 'client-auth-fb04a.appspot.com',
    messagingSenderId: '869048099836'
  }

};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
