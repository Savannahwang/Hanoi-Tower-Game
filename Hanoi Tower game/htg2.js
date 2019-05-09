let steps = document.querySelector('steps');
let count = document.querySelectorAll('count');
const reset = document.querySelector('reset');








function reset(){
    let steps = document.getElementsByClassName('steps');
}

document.getElementById('reset').addEventListener('click', reset);

//big discs can not be placed on small discs

//when click disc1, disc1 has move to drop 2 or drop 3, only move one drop at a time. 
//if disc1 is moved to drop 2, drop 2 can not contain other discs
//then click disc2, disc2 is moved to drop 3, drop 3 can not accept other discs
//and then disc1 is moved to drop 3, laid on the top of disc2

