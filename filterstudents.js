function studentLastname (){
    let studentsArray = []
    for ( let i = 0; i < allStudents.length; i++){
        document.querySelector("#wrapper").innerHTML = ""
        if ("" == searchWord()){
            document.querySelector("#wrapper").innerHTML = ""
        } else if (allStudents[i].lastName.toLocaleLowerCase().includes(searchWord())) {
            studentsArray.push(allStudents[i]);
        } 

    }
    renderStudents(studentsArray)
}

function searchWord (){
    let search = document.getElementById("lastname")
    return search.value
}

document.getElementById("lastname").addEventListener("keyup", studentLastname)