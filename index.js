"use strict"

//skapar en regissör som ett HTML-element 
function renderDirector (director){
    let div = document.createElement("div")
    div.id = director.id
    div.classList.add("director")
    div.innerHTML = `
        <li></li>
        <div>${director.name}.</div>
        <div>${director.age}.</div>
        <div>${director.livingStatus}.</div>
        <div>${director.directorialCredits}.</div>
        <div>${director.numberOfAwards}.</div>
        <button type="button" id="remove">Remove</button>
        `
    return div
}

//sett event listener på alla knapparsom ska ta bort ett objekt/element
function removeDirectorHandelers () {
  let buttons = document.querySelectorAll('.director button')
  for (let button of buttons) {
    button.addEventListener('click', removeDirectorClick)
  }
}

//renderar alla regissörer i en 
function renderDirectors (array){
    let directorsElement = document.querySelector(".main")
    directorsElement.innerHTML = ""
    for (let director of array){
        let directorElement = renderDirector(director)
        directorsElement.appendChild(directorElement)
    }
    removeDirectorHandelers()
}

//lägger till en regissör till databasen
function directorToDatabase (array, director){
    array.push(director)
}

//skapar ett objekt av en regissör
function newDirector (name, age, status, credits, awards) {
    let director = {
      id: database[database.length - 1].id + 1,
      name: name,
      age: age,
      livingStatus: status,
      numberOfAwards: awards,
      directorialCredits: credits,
    }
    return director
  }

//lägger till en regissör i database genom formulär på hemsidan
function directorSubmit (event){
    event.preventDefault()
  
    let name = document.getElementById("name").value

    //kollar att användaren har lagt till ett namn
    if(name == ""){
      alert("A name is required to add a director to the database")
    }
    //tar namnet och omvandlar så att första bokstaven är stor
    //oavsett vad användaren skrev in i formuläret 
    let nameSplit = name.split(" ")
    for (let i = 0; i < nameSplit.length; i++) {
      nameSplit[i] = nameSplit[i][0].toUpperCase() + nameSplit[i].substr(1);
    }
    let nameJoin = nameSplit.join(" ");
    //tar statusen och omvandlar första bokstaven till versal
    let status = document.getElementById("livingStatus").value

    //kontrollerar att användaren har lagt till en status
    if(status == ""){
      alert("A living status is required to add a director to the database")
    }
    let statuscapital = status[0].toUpperCase() + status.substring(1);
    
    let credits = Number(document.getElementById("credits").value)
    let numberOfAwards = Number(document.getElementById("numberOfAwards").value)
    let age = Number(document.getElementById("age").value)

    //kontrollerar att användaren har lagt till ålder, cred och priser
    if(age == "0"){
      alert("An age is required to add a director to the database")
    }  if(credits == "0"){
      alert("An amount of credits is required to add a director to the database")
    }   if(numberOfAwards == "0"){
      confirm("Are you sure the director has 0 awards?")
    }
    
    let director = newDirector(nameJoin, age, statuscapital, credits, numberOfAwards)
    
    director.id = database[database.length - 1].id + 1;
  
    directorToDatabase(database, director)
    renderDirectors(database)
  
    let form = document.getElementById("addDirector")
    form.reset()
  
  }

  //funktionen sätter en eventlistener på knappen add
  function setDirectorHandeler () {
    let button = document.getElementById('add')
    button.addEventListener('click', directorSubmit)
  }

  //tar bort en regissör baserat på dess id
  function removeDirectorById(array, id){
    for (let i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        array.splice(i, 1)
      }
  }
  }

  //använder sig av en regissörs id för at ta bort den från databasen
  function removeDirectorClick (event) {
    let button = event.target
    let id = button.parentElement.id
    let name = button.parentElement.firstChild.nextSibling.nextSibling.nextSibling.textContent
    console.log(name)
    let isSure = confirm(`Are you sure you want to remove ${name}`)
    if (isSure){
    removeDirectorById(database, id)
    renderDirectors(database)
  }
}

  function getDirectorsByAge (array, age) {
    let ageArray = []
    for (let director of array) {
      if (director.age == age) {
        ageArray.push(director)
      }
    }
    console.log(ageArray)
    return ageArray
  }

  function filterByAge(event){
    event.preventDefault()
    let age = document.getElementById("filter-age").value
    let directors = getDirectorsByAge(database, age)
    renderDirectors(directors)
    document.getElementById("filter-age").value = ""
  }

  function getDirectorsByStatus (array, status) {
    let statusArray = []
    for (let director of array) {
      if (director.livingStatus.toLowerCase() == status.toLowerCase()) {
        statusArray.push(director)
      }
    }
    return statusArray
  }

  function filterByStatus(event){
    event.preventDefault()
    let status = document.getElementById("filter-status").value
    let directors = getDirectorsByStatus(database, status)
    renderDirectors(directors)
    document.getElementById("filter-status").value = ""
  }

  function getDirectorsByCredits (array, credits) {
    let creditsArray = []
    for (let director of array) {
      if (director.directorialCredits == credits) {
        creditsArray.push(director)
      }
    }
    return creditsArray
  }

  function filterByCredits(event){
    event.preventDefault()
    let credits = document.getElementById("filter-credits").value
    let directors = getDirectorsByCredits(database, credits)
    renderDirectors(directors)
    document.getElementById("filter-credits").value = ""
  }
  
  function onShowAllClick(){
    renderDirectors(database)
  }
  
  function filterDirectorHandelers (){
    let statusFilter = document.getElementById("statusFilter")
    let creditsFilter = document.getElementById("creditsFilter")
    let ageFilter = document.getElementById("ageFilter")
    let showAll = document.getElementById("show-all")
  
    statusFilter.addEventListener("submit", filterByStatus)
    creditsFilter.addEventListener("submit", filterByCredits)
    ageFilter.addEventListener("submit", filterByAge)
    showAll.addEventListener("click", onShowAllClick)
  }


renderDirectors(database)
setDirectorHandeler()
filterDirectorHandelers()