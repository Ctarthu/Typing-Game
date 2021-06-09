
const text ='Did you ever hear the tragedy of Darth Plagueis The Wise I thought not Its not a story the Jedi would tell you Its a Sith legend Darth Plagueis was a Dark Lord of the Sith so powerful and so wise he could use the Force to influence the midichlorians to create life He had such a knowledge of the dark side that he could even keep the ones he cared about from dying The dark side of the Force is a pathway to many abilities some consider to be unnatural He became so powerful the only thing he was afraid of was losing his power which eventually of course he did Unfortunately he taught his apprentice everything he knew then his apprentice killed him in his sleep Ironic He could save others from death but not himself'
const str=text.toLowerCase()
const words=str.split(" ")
const displayWord=document.querySelector('#word-Display')
const textInput=document.querySelector('#text-Input')
const scoredisplay=document.querySelector('#score-Display')
const timedisplay=document.querySelector('#time-Display')
const typeThisWord=document.querySelector('#type-This-Word')

var time=30
var scorecount=0
var charcount=-1
function getRandomWord(){
    const randId=Math.floor(Math.floor(Math.random()*words.length))
    const word=words[randId]
    displayWord.innerText=word
    textInput.value=null
}
function startmatch(){
    getRandomWord()
    countdown()
    textInput.addEventListener('input',match)
    
    
}
function match(){
    if(time>0){
    charcount++
        if(displayWord.innerHTML.toString()==textInput.value.toString()){
            scorecount++
            scoredisplay.innerHTML=scorecount
            getRandomWord()
        }
    }
    
}

function countdown(){
    setInterval(() => {
        if(time>0){
            time--
            timedisplay.innerHTML=time
            console.log('kk');
        }
        else{
            document.querySelector('#text-Input').disabled=true
            displayWord.innerHTML='GAME OVER'
            typeThisWord.innerHTML=null
            textInput.value=null
        }
    }, 1000);
    
    
}
startmatch()

