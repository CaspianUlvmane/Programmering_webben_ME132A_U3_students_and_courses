"use strict"

//skapar en regissör som ett HTML-element 
function renderDirector (director){
    let div = document.createElement("div")
    div.id = "director"
    div.innerHTML = `
        <li><span>${director.id}.</span></li>
        <div>${director.name}.</div>
        <div>${director.age}.</div>
        <div>${director.livingStatus}.</div>
        <div>${director.directorialCredits}.</div>
        <div>${director.numberOfAwards}.</div>
        <button type="button">Remove</button>
    `
    return div
}

//renderar alla regissörer i en 
function renderDirectors (array){
    let directorsElement = document.querySelector(".main")
    directorsElement.innerHTML = ""
    for (let director of array){
        let directorElement = renderDirector(director)
        directorsElement.appendChild(directorElement)
    }
}

function directorToDatabase (array, director){
    array.push(director)
}

//skapar ett objekt av en regissör
function newDirector (name, age, status, credits, awards) {
    let director = {
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
    let credits = number(document.getElementById("credits").value)
    let numberOfAwards = number(document.getElementById("numberOfAwards").value)
    let age = number(document.getElementById("age").value)
  
    let director = newDirector(name, age, status, credits, numberOfAwards)
  
    director.id = database[database.length - 1].id + 1;
  
    directorToDatabase(database, director)
    renderDirectors(database)
  
    let form = document.getElementById("addDirector")
    form.reset()
  
  }

  function setDirectorHandeler () {
    let button = document.getElementById('add')
    button.addEventListener('click', addDirectorClick)
  }

renderDirectors(database)