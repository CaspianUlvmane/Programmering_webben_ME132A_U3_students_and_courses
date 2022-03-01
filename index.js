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
    let status = document.getElementById("livingStatus").value
    let credits = Number(document.getElementById("credits").value)
    let numberOfAwards = Number(document.getElementById("numberOfAwards").value)
    let age = Number(document.getElementById("age").value)
  
    let director = newDirector(name, age, status, credits, numberOfAwards)
  
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

  //använder sig av en regissörs id för at ta ort den från databasen
  function removeDirectorClick (event) {
    let button = event.target
    let id = button.parentElement.id
    removeDirectorById(database, id)
    renderDirectors(database)
  }



renderDirectors(database)
setDirectorHandeler()