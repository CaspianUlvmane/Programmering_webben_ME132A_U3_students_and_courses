function studentLastname (){
    let studentsArray = []
    for ( let i = 0; i < allStudents.length; i++){
        document.querySelector("#wrapper").innerHTML = ""
        if ("" == searchWord()){
            document.querySelector("#wrapper").innerHTML = ""
        } else if (allStudents[i].lastName.toLocaleLowerCase().includes(searchWord().toLocaleLowerCase())) {
            studentsArray.push(allStudents[i]);
        } 

    }
    studentsArray.sort((a, b) => {
        if (a.lastName > b.lastName){
            return 1
        }
        if (a.lastName < b.lastName){
            return -1
        }
        return 0
    })
    renderStudents(studentsArray)
}

function searchWord (){
    let search = document.getElementById("lastname")
    return search.value
}

document.getElementById("lastname").addEventListener("keyup", studentLastname)

function toggle(){
    if (window.getComputedStyle(document.getElementById("siteWrapper")).backgroundColor == "rgb(23, 25, 29)"){
    document.documentElement.style.setProperty('--WBG', 'teal');
    document.documentElement.style.setProperty('--DS', 'rgb(0, 97, 97)');
    document.documentElement.style.setProperty('--WBC', 'goldenrod');
    document.documentElement.style.setProperty('--BG', 'gainsboro');
    document.documentElement.style.setProperty('--BC', 'gold');
    document.documentElement.style.setProperty('--CBG', 'ghostwhite');
    document.documentElement.style.setProperty('--CBC', 'yellow');
    document.documentElement.style.setProperty('--CRBG', 'salmon');
    document.documentElement.style.setProperty('--TC', 'black');
    document.documentElement.style.setProperty('--DC', 'lightgreen');
    document.documentElement.style.setProperty('--MC', 'rgba(23, 25, 29, 0)');
    return
    } 
    if (window.getComputedStyle(document.getElementById("siteWrapper")).backgroundColor == "rgb(0, 128, 128)"){
        document.documentElement.style.setProperty('--WBG', 'rgb(23, 25, 29)');
        document.documentElement.style.setProperty('--DS', 'rgb(11, 17, 17)');
        document.documentElement.style.setProperty('--WBC', 'rgb(53, 55, 58)');
        document.documentElement.style.setProperty('--BG', 'gray');
        document.documentElement.style.setProperty('--BC', 'darkgray');
        document.documentElement.style.setProperty('--CBG', 'dimgrey');
        document.documentElement.style.setProperty('--CBC', 'darkgray');
        document.documentElement.style.setProperty('--CRBG', 'indianred');
        document.documentElement.style.setProperty('--TC', 'white');
        document.documentElement.style.setProperty('--DC', 'darkolivegreen');
        document.documentElement.style.setProperty('--MC', 'rgb(23, 25, 29)');
        return
    }
}

document.getElementById("styling").addEventListener("click", toggle)

function toggle(){
    let darkmode = document.querySelector("head > link")

    if (darkmode.getAttribute("href") == "style.css"){
        darkmode.href = "dark.css"
        localStorage.setItem("theme", 'dark.css')
        return
    }

    if (darkmode.getAttribute("href") == "dark.css"){
    darkmode.href = 'style.css'
    localStorage.setItem("theme",  'style.css')
    } 

}

document.getElementById("styling").addEventListener("click", toggle)

function setTheme(){
    let Theme = localStorage.getItem("theme")
    console.log(Theme)
    document.querySelector("head > link").href = Theme
    return Theme
}

setTheme()