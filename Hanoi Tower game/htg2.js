var steps = document.querySelector('steps');
var count = document.querySelectorAll('count');








function reset(){
    let steps = document.getElementsByClassName('steps');

    for (let steps = 0; steps < disc.length; steps++){
        let disc = steps.getAtrribute('disc');

    console.log(steps, disc);
    }
 
}

document.getElementById('reset').addEventListener('click', reset);

//big discs can not be placed on small discs

//when click disc1, disc1 has move to drop 2 or drop 3, only move one drop at a time. 
//if disc1 is moved to drop 2, drop 2 can not contain other discs
//then click disc2, disc2 is moved to drop 3, drop 3 can not accept other discs
//and then disc1 is moved to drop 3, laid on the top of disc2

