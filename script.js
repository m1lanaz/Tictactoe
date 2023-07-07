// When pressed display icon, unless div already has an icon (child node)
function myFunc(i) {
    if (boardItem[i].hasChildNodes()) {
        // boardItem[0] has child nodes
        console.log("boardItem[0] has child nodes");
    } else {
        console.log("I've been pressed!");
        let newCross = document.createElement("i");
        newCross.classList.add("bi" ,"bi-x-lg"); 
        boardItem[i].appendChild(newCross);
    }    
};

let boardItem = document.getElementsByClassName('boardItem');
for(let i = 0; i < boardItem.length; i++){
    boardItem[i].addEventListener('click', function(){myFunc(i)}, {once : true});
};