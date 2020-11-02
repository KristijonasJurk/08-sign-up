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
    const signinLink = document.querySelector('.signinLink');
    // const icon = document.querySelector('.icon');
    const home = document.querySelector('.home');
    const box = document.querySelector('.box');
    const boxOpenClose = document.querySelector('#boxOpenClose');
    const light = document.querySelector('.light');
    const grayText = document.querySelector('.gray');

    if (body.style.background === 'white') {
        body.style.background = 'rgb(96, 96, 96)';
        body.style.color = 'white';
        darkLight.innerHTML = 'Light';
        signinLink.style.color = 'white';
        home.style.border = '1px solid white';
        box.style.background = 'rgb(110, 110, 110)';
        boxOpenClose.style.background = 'rgb(110, 110, 110)';
        light.style.background = 'whitesmoke';
        light.style.color = 'black';
        grayText.style.color = 'white';
    } else {
        body.style.background = 'white';
        darkLight.innerHTML = 'Dark';
        body.style.color = 'black';
        signinLink.style.color = 'black';
        home.style.border = '1px solid rgb(56, 56, 56)';
        box.style.background = 'whitesmoke';
        boxOpenClose.style.background = 'whitesmoke';
        light.style.background = 'rgb(49, 49, 49)';
        light.style.color = 'whitesmoke';
        grayText.style.color = 'black';
    }
}


// change color

function functionRed() {
    document.querySelector('#register').style.backgroundColor = '#d42f2f';
    document.querySelector('.fa-cog').style.color = '#d42f2f';
    document.querySelector('.sides').style.backgroundColor = '#d42f2f';
    document.querySelector('.fa-home').style.color = '#d42f2f';
}
function functionBlack() {
    document.querySelector('#register').style.backgroundColor = '#3b3a3a';
    document.querySelector('.fa-cog').style.color = '#3b3a3a';
    document.querySelector('.sides').style.backgroundColor = 'gray';
    document.querySelector('.fa-home').style.color = '#3b3a3a';
}
function functionPurple() {
    document.querySelector('#register').style.backgroundColor = '#8a69bd';
    document.querySelector('.fa-cog').style.color = '#8a69bd';
    document.querySelector('.sides').style.backgroundColor = '#8a69bd';
    document.querySelector('.fa-home').style.color = '#8a69bd';
}
function functionBlue() {
    document.querySelector('#register').style.backgroundColor = '#4b38f1';
    document.querySelector('.fa-cog').style.color = '#4b38f1';
    document.querySelector('.sides').style.backgroundColor = '#4b38f1';
    document.querySelector('.fa-home').style.color = '#4b38f1';
}
function functionGray() {
    document.querySelector('#register').style.backgroundColor = '#7a8e94';
    document.querySelector('.fa-cog').style.color = '#7a8e94';
    document.querySelector('.sides').style.backgroundColor = '#7a8e94';
    document.querySelector('.fa-home').style.color = '#7a8e94';
}
function functionGreen() {
    document.querySelector('#register').style.backgroundColor = '#23730f';
    document.querySelector('.fa-cog').style.color = '#23730f';
    document.querySelector('.sides').style.backgroundColor = '#23730f';
    document.querySelector('.fa-home').style.color = '#23730f';
}
function functionYellow() {
    document.querySelector('#register').style.backgroundColor = '#c4c719';
    document.querySelector('.fa-cog').style.color = '#c4c719';
    document.querySelector('.sides').style.backgroundColor = '#c4c719';
    document.querySelector('.fa-home').style.color = '#c4c719';
}
function functionOrange() {
    document.querySelector('#register').style.backgroundColor = '#af6f32';
    document.querySelector('.fa-cog').style.color = '#af6f32';
    document.querySelector('.sides').style.backgroundColor = '#af6f32';
    document.querySelector('.fa-home').style.color = '#af6f32';
}
