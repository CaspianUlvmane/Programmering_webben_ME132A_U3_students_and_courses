function studentLastname (){
    let studentsArray = []
    for ( let i = 0; i < allStudents.length; i++){
        document.querySelector("#wrapper").innerHTML = ""
        console.log(allStudents[i].lastName)
        console.log(searchWord)
        if (allStudents[i].lastName.toLocaleLowerCase().includes(searchWord())) {
            studentsArray.push(allStudents[i]);
        } if (searchWord() == ""){
            document.querySelector("#wrapper").innerHTML = ""
        }

    }
    renderStudents(studentsArray)
}

function searchWord (){
    let search = document.getElementById("lastname")
    return search.value
}

document.getElementById("lastname").addEventListener("keyup", studentLastname)