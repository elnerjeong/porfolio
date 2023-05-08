



let comNum = 0
let userInput = document.getElementById('user-input')
let countNum =  document.getElementById('count-number')
let resetBtn = document.getElementById('reset-btn');
let startBtn = document.getElementById('start-btn');
let count = 5
let resultArea = document.getElementById("title");
let history = []

startBtn.addEventListener("click",start);
userInput.addEventListener("focus", function(){ userInput.value = ""});
resetBtn.addEventListener("click", reset)


function makeRandomNum(){
  comNum = Math.floor(Math.random()*100) + 1;
  console.log(comNum)
}
makeRandomNum()


function start(){
  let userValue = userInput.value
  if(userValue > 100 || userValue < 1){
    resultArea.textContent = "1~100까지의 숫자를 입력해주세요."
    return;
  }
  if(history.includes(userValue)){
    resultArea.textContent = "이미 입력한 숫자입니다. "
    return;
  }
  
  count--;


  if(comNum < userValue) {
    resultArea.textContent = "Down"
    
  } else if (comNum > userValue ) {
    resultArea.textContent = "Up"
    
  } else {
    resultArea.textContent = "맞추셨습니다."
    startBtn.disabled = true

  }
  
  
  if(count == 0){
    startBtn.disabled = true
  }
  countNum.textContent = `남은횟수 : ${count}회`
  history.push(userValue)
  
  console.log(count)
  console.log(history)
  
}

function reset(){
  startBtn.disabled = false
  history = []
  count = 5
  makeRandomNum()
  resultArea.textContent = "다시 도전!"
  countNum.textContent = '남은횟수 : 5회'
  
}
