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
    let darkmode = document.querySelector("#siteWrapper")

    if (window.getComputedStyle(darkmode).backgroundColor == "rgb(0, 128, 128)"){
        darkmode.href = "dark.css"
        localStorage.setItem("theme", 'dark.css')
    }
    if (window.getComputedStyle(darkmode).backgroundColor == "rgb(23, 25, 29)"){
    darkmode.href = 'style.css'
    localStorage.setItem("theme",  'style.css')
    } 

}

document.getElementById("styling").addEventListener("click", toggle)

function setTheme(){
    let darkmode = document.querySelector("#style")
    let Theme = localStorage.getItem("theme")
    darkmode.href == Theme
}

setTheme()