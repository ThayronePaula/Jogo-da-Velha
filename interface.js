document.addEventListener('DOMContentLoaded', ()=>{


   let squares = document.querySelectorAll('.square');
   squares.forEach((square)=>{
       square.addEventListener('click',handClick);
   })
    
})

function handClick(event){
    let square = event.target;
    let postion = square.id;
    if(handMove(postion)){
        setTimeout(() => {
            joga = playerTime + 1
            alert("venceu o jogador " + joga )
        }, 1);
    }

    updateSquare(postion);
}

function updateSquare(postion){
    let square = document.getElementById(postion.toString())
    let symbols = board[postion];
    console.log(symbols)
    square.innerHTML = `<div class='${symbols}'></div>`

}

