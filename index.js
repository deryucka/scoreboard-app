let countHomeEl = document.getElementById("home-count")
let countGuestEl = document.getElementById("guest-count")
let countHome = 0
let countGuest = 0


function addOneH() {
  countHome += 1
  countHomeEl.textContent = countHome
  }
  
  function addTwoH() {
  countHome += 2
  countHomeEl.textContent = countHome
  }
  
  function addThreeH() {
  countHome += 3
  countHomeEl.textContent = countHome
  }
  
  function addOneG() {
  countGuest += 1
  countGuestEl.textContent = countGuest
  }
  
  function addTwoG() {
  countGuest += 2
  countGuestEl.textContent = countGuest
  }
  
  function addThreeG() {
  countGuest += 3
  countGuestEl.textContent = countGuest
  }
  
  function newGame(){
    countHome = 0
    countHomeEl.textContent = countHome
    countGuest = 0
    countGuestEl.textContent = countGuest 
  }