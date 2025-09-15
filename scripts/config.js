
let submit = document.querySelector('#submit');
let cancel = document.querySelector('#cancel');
let playername = document.querySelector('#playername');
let name1 = document.querySelector('#name1');
let name2 = document.querySelector('#name2');
let error = document.querySelector('#error');


let editedPlayer = 0;
console.log(name2.textContent);


function openPlayerConfig(e) {
    console.log("HIIIII");
    console.log(e);

    playerConfigOverlay.style.display = "block";
    backdropElement.style.display = "block";


    if (e.target.id === 'edit-player-1') {
        console.log("target 1");
        console.log(editedPlayer);
        editedPlayer = 1;
    } else if (e.target.id === 'edit-player-2') {
        console.log("target 2");
        editedPlayer = 2;
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    //could have also added a data attribute to the html element and used that
    // let selectedPlayer = +e.target.dataset.playerid; //+ converts string to number
    // console.log(selectedPlayer);
    if (editedPlayer === 1) {
        name1.textContent = playername.value.trim();
        players[0].name = name1.textContent;
        console.log("updated player 1 " + players[0].name + "!" + name1.textContent);
        

        if (playername.value == '') {
            error.textContent = 'Please enter a valid name!';
            name1.textContent = 'PLAYER NAME';            
            return;         
        }

        // console.log("updated player 1");
    } else if (editedPlayer === 2) {
        name2.textContent = playername.value.trim();
        players[1].name = name2.textContent;
        console.log("updated player 2 " + players[1].name + "!" + name2.textContent);


        if (playername.value == '') {
            error.textContent = 'Please enter a valid name!';
            name2.textContent = 'PLAYER NAME';            
            return;         
        }
        // console.log("updated player 2");
    }

    closeConfig();

})

function closeConfig() {
    console.log("Closed");
    playerConfigOverlay.style.display = "none";
    backdropElement.style.display = "none";
    editedPlayer = 0;
    playername.value = '';
    error.textContent = '';
}



// submit.addEventListener("click", function(){
//     h3.innerHTML = playername.value
//     console.log("submitted");
// });




// if (num === 1) {
//     submit.addEventListener("click", () => {
// playername = playername.value
//     });
// } else if (num === 2) {
//     submit.addEventListener("click", () => {
// playername = playername.value
// })


// setName1 = () => {
//     playername = playername.value
// }

// setName2 = () => {
//     playername = playername.value
// }

function openPlayerConfig() {
    playerConfigOverlay.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig (event) {
    event.preventDefault();
    console.log(event);

    // const formData = {};
    // instantiating an object based on an object blueprint
    // .target points at the HTML element
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername');
    console.log(enteredPlayername);
}

