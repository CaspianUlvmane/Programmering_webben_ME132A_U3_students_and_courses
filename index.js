"use strict"

//Lägger till en regissör i HTML 
function appendDirectorToHtml (director){
    let div = document.createElement("div")
    div.id = "director"
    div.innerHTML = `
        <li><span>1.</span></li>
        <div>${director.name}.</div>
        <div>${director.age}.</div>
        <div>${director.livingStatus}.</div>
        <div>${director.directorialCredits}.</div>
        <div>${director.numberOfAwards}.</div>
        <button type="button">Remove</button>
    `
    document.querySelector(".container").appendChild(div)
    return div
}