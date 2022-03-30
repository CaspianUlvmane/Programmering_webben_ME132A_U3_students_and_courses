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
    renderAllCourses(resultArray)
}

function searchWord (){
    let search = document.getElementById("results")
    return search.value.toLocaleLowerCase()
}

document.getElementById("results").addEventListener("keyup", filterCourses)

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