function studentLastname (){
    let studentsArray = []
    for ( let i = 0; i < allStudents.length; i++){
        document.querySelector("#students").innerHTML = ""
        if ("" == searchWord()){
            document.querySelector("#students").innerHTML = ""
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
    if (Theme == null){
        document.querySelector("head > link").href = "style.css"
        return
    } 
    document.querySelector("head > link").href = Theme
    return Theme
}

setTheme()