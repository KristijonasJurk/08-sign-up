// close and open box 

function functionCloseOpen() {
    let box = document.getElementById('box');
    if (box.style.left === "-250px") {
        box.style.left = '0px';

    } else {
        box.style.left = '-250px';
    }
}

// change sides when clicked

function functionChangeSide() {
    const container = document.querySelector('.container');
    const signup = document.querySelector('.signup');
    const leftRight = document.querySelector('.sides');
    if (container.style.float === "left") {
        container.style.float = "right";
        signup.style.float = "left";
        leftRight.innerHTML = "Position Left";
    }
    else {
        container.style.float = "left";
        signup.style.float = "right";
        leftRight.innerHTML = "Position Right";
    }
}


// light to dark, dark to light

function functionDarkLight() {
    const body = document.querySelector('.body');
    const darkLight = document.querySelector('.light');
    if (body.style.background === 'white') {
        body.style.background = 'rgb(122, 122, 122)';
        darkLight.innerHTML = 'Light';
    } else {
        body.style.background = 'white';
        darkLight.innerHTML = 'Dark';
    }
}