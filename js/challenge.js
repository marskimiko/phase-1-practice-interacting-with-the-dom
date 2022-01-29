document.addEventListener("DOMContentLoaded", () => {
  counter()
  let interval = setInterval(incrementCounter, 1000)
  
  const plus = document.getElementById('plus')
  plus.addEventListener('click', incrementCounter)
  const minus = document.getElementById('minus')
  minus.addEventListener('click', () => {
    let count = document.getElementById('counter')
    count.textContent = parseInt(count.textContent, 10) -1
  })
  const heart = document.getElementById('heart')
  let likesObj = {}

  heart.addEventListener(click, () => {
    let counterValue = document.getElementById("counter").textContent
    if (likesObj[counterValue]) {
      likesObj[counterValue] += 1
    } else {
      likesObj[counterValue] = 1
    }
    let likesUL = document.querySelector('.likes')
    likesUL.innerText = `${counterValue} has been liked ${likesObj[counterValue]} times.`
  })
  const likes = document.getElementById('heart')
  const submit = document.getElementById('submit')
  const pause = document.getElementById('pause')
})

const pause = document.querySelector("#pause")

pause.addEventListener('click', () => {
  if(pause.innerText === 'pause') {
    pause.innerText = 'resume'
    interval = setInterval(incrementCounter, 1000)
  } else {
    pause.innerText = 'pause'
    clearInterval(interval)
    
  }
  minus.disabled = !minus.disabled
  plus.disabled = !plus.disabled
  heart.disabled = !heart.disabled
  submit.disabled = !submit.disabled
  })
  
  let commentForm = document.querySelector('#comment-form')
  
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const list = document.getElementById('list')
    let li = document.createElement('li')
    li.innerText = e.target[0].value
    list.appendChild(li)
    commentForm.reset()
})


function counter() {
  incrementCounter
}

function incrementCounter() {
  let count = document.getElementById('counter')
  count.textContent = parseInt(count.textContent, 10) +1
}


