// folosim require

//const someFnct = require("./someModule");
//const {someOtherFunction} = require('./someModule'); // destructurare

//import someFnct, {anotherFnct} from './someModule.js';

//someFnct();
//someFnct.someOtherFunction();

const fetch = require('node-fetch');

//fetch returns a promise

fetch('https://catfact.ninja/fact')
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then ((data) => {
        console.log(data);
    });

