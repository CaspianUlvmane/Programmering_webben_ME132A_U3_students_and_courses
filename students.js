let allStudents = DATABASE.students

let student = [DATABASE.students[0], DATABASE.students[1]]

function renderStudent(id){
    let div = document.createElement("div")
    let student = DATABASE.students[id]
    div.id = "container"
    div.innerHTML =
    `<header>${student.firstName} ${student.lastName} (total: ${completeCredits(student)} credits)</header>
    <div>
        <div id="course">
            <h3>Courses:</h3>
            <div id="courses">
                ${renderCourses(student)}
            </div>
        </div>
    </div>`
    return div
}

function completeCredits (student){
    let credits = []
    for (let course of student.courses){
        credits.push(course.passedCredits)
    }
    let creditsSum = 0
    for (let i = 0; i < credits.length; i++){
        creditsSum += credits[i]
    }
    return creditsSum
}

function renderStudents (students){
    let studentsElement =     document.getElementById("wrapper")
    for ( let student of students){
        let studentElement = renderStudent(student.studentID)
        studentsElement.appendChild(studentElement)
    }
}

//creates the div elements for any student
function renderCourses (student){
    let courseData = DATABASE.courses
    let courses = []
    for ( let i = 0; i < student.courses.length; i++){
        let id = student.courses[i].courseId
        courses.push(courseData[id])
        
    }
    console.log(courses)
    let courseDiv = []
    for (let i= 0; i < courses.length; i++){
        let div = document.createElement("div")
        let text = div.innerHTML =
        `<div><h4>${courses[i].title}</h4>
        <p> ( 0f  credits)</p></div>`
        courseDiv.push(text)
    }
    return courseDiv.toString().split(",").join(" ");
}
