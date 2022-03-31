function filterCourses (){
    let resultArray = []
    for ( let i = 0; i < allCourses.length; i++){
        document.getElementById("course").innerHTML = ""
        if ("" == searchWord()){
            document.getElementById("course").innerHTML = ""
        } else if (allCourses[i].title.toLocaleLowerCase().includes(searchWord())) {
            resultArray.push(allCourses[i]);
        } 
    }
    
    resultArray.sort((a, b) => {
        if (a.title > b.title){
            return 1
        }
        if (a.title < b.title){
            return -1
        }
        return 0
    })
    renderAllCourses(resultArray)
}

function searchWord (){
    let search = document.getElementById("results")
    return search.value.toLocaleLowerCase()
}

document.getElementById("results").addEventListener("keyup", filterCourses)

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