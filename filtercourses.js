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
    if (document.getElementById("siteWrapper").style.backgroundColor == "rgb(23, 25, 29)"){
    document.documentElement.style.setProperty('--WBG', '#teal');
    document.documentElement.style.setProperty('--DS', '#rgb(0, 97, 97)');
    document.documentElement.style.setProperty('--WBC', '#goldenrod');
    document.documentElement.style.setProperty('--BG', '#gainsboro');
    document.documentElement.style.setProperty('--BC', '#gold');
    document.documentElement.style.setProperty('--CBG', '#ghostwhite');
    document.documentElement.style.setProperty('--CBC', '#yellow');
    document.documentElement.style.setProperty('--CRBG', '#salmon');
    } else if (document.getElementById("siteWrapper").style.backgroundColor == "teal"){
    }
}