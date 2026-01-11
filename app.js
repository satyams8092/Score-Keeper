const p1={
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2={
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display') 
}

const reset=document.querySelector('#reset')
const winScoreSelect=document.querySelector('#playTo')

let winScore=3
let isGameOver=false

function scoreUpdate(player,opponent){
    if(!isGameOver){
        player.score+=1
        if(player.score === winScore){
            isGameOver=true
            player.display.classList.add('winner')
            opponent.display.classList.add('losser')
            player.button.disabled=true
            opponent.button.disabled=true
        }
        player.display.textContent=player.score
    }
}
p1.button.addEventListener('click',function(){
    scoreUpdate(p1,p2)
})

p2.button.addEventListener('click',function(){
    scoreUpdate(p2,p1)
})

winScoreSelect.addEventListener('change',function(){
    winScore=parseInt(this.value)
    resetGame()
})

reset.addEventListener('click',resetGame)

function resetGame() {
    isGameOver=false
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent=p.score
        p.display.classList.remove('winner','losser')
        p.button.disabled=false
    }
}
