function filter (){
    let resultArray = []
    for ( let i = 0; i < allStudents.length; i++){
        document.querySelector("#wrapper").innerHTML = ""
        if ("" == searchWord()){
            document.querySelector("#wrapper").innerHTML = ""
        } else if (allStudents[i].lastName.toLocaleLowerCase().includes(searchWord())) {
            resultArray.push(allStudents[i]);
        } 

    }
    for ( let i = 0; i < allCourses.length; i++){
        document.querySelector("#course").innerHTML = ""
        if ("" == searchWord()){
            document.querySelector("#course").innerHTML = ""
        } else if (allStudents[i].lastName.toLocaleLowerCase().includes(searchWord())) {
            resultArray.push(allCourses[i]);
        } 
    }
    renderStudents(resultArray)
    renderAllCourses(resultArray)
}

function searchWord (){
    let search = document.getElementById("result")
    return search.value.toLocaleLowerCase()
}

document.getElementById("result").addEventListener("keyup", filter)