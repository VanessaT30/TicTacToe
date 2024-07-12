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

