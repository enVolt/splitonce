## splitonce

A simple utility to split a string with specified seperator only once 

### Install

    npm install splitonce --save


### Usage

    var splitonce = require("splitonce");

    var name = "John De Drown";

    console.log(splitonce(name, " "));
    // [ 'John', 'De Drown' ]
