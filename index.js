const main = document.querySelector('main');
main.remove();

const newHeader = document.createElement('h1');

//the 'newHeader' variable that points to the <h1> node has an id of 'victory'

newHeader.setAttribute("id","victory");

newHeader.textContent = 'Terrence' + 'is the champion';