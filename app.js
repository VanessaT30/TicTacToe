const express = require('express');  //1st
const app = express(); //2nd

const ejs = require('ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());