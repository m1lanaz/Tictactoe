// When pressed display icon

function myFunc(i) {
    console.log("I've been pressed!");
    let newCross = document.createElement("i");
    newCross.classList.add("bi" ,"bi-x-lg"); 
    boardItem[i].appendChild(newCross);
};

let boardItem = document.getElementsByClassName('boardItem');
for(let i = 0; i < boardItem.length; i++){
    boardItem[i].addEventListener('click', function(){myFunc(i)}, {once : true});
};