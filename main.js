function functionCloseOpen() {
    var box = document.getElementById('box');
    if (box.style.left === "-250px") {
        box.style.left = '0px';

    } else {
        box.style.left = '-250px';
    }
}