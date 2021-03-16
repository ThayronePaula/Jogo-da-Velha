document.addEventListener('DOMContentLoaded', ()=>{


   let squares = document.querySelectorAll('.square');
   squares.forEach((square)=>{
       square.addEventListener('click',handClick);
   })
    
})

function handClick(event){
    let square = event.target;
    let postion = square.id;
    handMove(postion);

    updateSquares();
}


function updateSquares(){
    
    let squares = document.querySelectorAll('.square');

    squares.forEach((square)=>{

        let position = square.id;


        let symbols = board[position];
        console.log(symbols)


        if (symbols != '') {
        square.innerHTML = `<div class='${symbols}'></div>`
        }



    })
}

