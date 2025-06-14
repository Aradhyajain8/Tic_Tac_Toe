const boxes = document.querySelectorAll('.box');
document.querySelector('.boxes').classList.remove('hide');
document.querySelector('.reset').classList.remove('hide');
let turnO = true;
boxes.forEach((box) =>{
    box.addEventListener('click', function(){
        if(box.textContent === ''){
            if(turnO === true){
                box.textContent = 'O';
                turnO = false;
                setTimeout(findWinner,15);

            }else{
                box.textContent = 'X';
                turnO = true;
                setTimeout(findWinner,15);

            }
        }
        
    });
});

const showwinner = function(winner){
    document.querySelector('#msg-para').textContent = `Winner is ${winner}`;
    document.querySelector('.msg').classList.remove('hide');
    document.querySelector('.reset').classList.add('hide');
    document.querySelector('.boxes').classList.add('hide');
    
};

const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const findWinner = function(){
    for(let i of win){
        let pos1 = boxes[i[0]].textContent;
        let pos2 = boxes[i[1]].textContent;
        let pos3 = boxes[i[2]].textContent;

        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                if(pos1=== 'O'){
                    showwinner('Player 1🥳');
                }
                else{
                    showwinner('Player 2🥳');
                }
                
            }
        }
    }
    let isDraw = true;
    boxes.forEach((box) =>{
        if(box.textContent === ''){
            isDraw = false;
        }
    });

    if(isDraw){
       document.querySelector('#msg-para').textContent = `Oops! it\'s a Draw😢`;
       document.querySelector('.msg').classList.remove('hide');
       document.querySelector('.boxes').classList.add('hide');
       document.querySelector('.reset').classList.add('hide');
    }
};

function newGame(){
    boxes.forEach((box) => {
        box.textContent = '';
    });
    document.querySelector('.msg').classList.add('hide');
    document.querySelector('.boxes').classList.remove('hide');
    document.querySelector('.reset').classList.remove('hide');
    turnO = true;
}

document.querySelector('.reset').addEventListener('click', newGame);

document.querySelector('.new').addEventListener('click', newGame);
