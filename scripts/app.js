// const express = require('express');  //1st
// const app = express(); //2nd

// const ejs = require('ejs');

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.set('view engine', 'ejs');

// app.get("/index", (req, res) => {
//     res.render("index");
//   });

const playerConfigOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');

const editPlayerO1btn = document.getElementById ('edit-player-1');
const editPlayerO2btn = document.getElementById ('edit-player-2');
const cancelconfigbtn = document.getElementById ('cancel-config-btn');


//NOTE: No parentheses added here! We DO NOT want to execute it straight away!
editPlayerO1btn.addEventListener('click', openPlayerConfig);
editPlayerO2btn.addEventListener('click', openPlayerConfig);

cancelconfigbtn.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
