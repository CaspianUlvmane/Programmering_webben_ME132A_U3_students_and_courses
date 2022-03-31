let allStudents = DATABASE.students

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
    let studentsElement = document.getElementById("students")
    for ( let student of students){
        let studentElement = renderStudent(student.studentID)
        studentsElement.appendChild(studentElement)
    }
}

//creates the HTML elements for any student
function renderCourses (student){
    let courseData = DATABASE.courses
    let courses = []
    for ( let i = 0; i < student.courses.length; i++){
        let id = student.courses[i].courseId
        courses.push(courseData[id])   
    }
    let courseDiv = []
    for (let i= 0; i < courses.length; i++){

        let div = document.createElement("div")
        let student_course = student.courses[i]
        let courseDataId = courseData[courses[i].courseId]

        //Om personen har avklarat alla poäng i en kurs får kursen klassen "done" 
        if (student_course.passedCredits == courseDataId.totalCredits){

            let text = div.innerHTML =
            `<div class="done"><h4>${courses[i].title}</h4>
            <p>${student_course.started.semester} ${student_course.started.year} (${student_course.passedCredits} 0f ${courseDataId.totalCredits} credits)</p></div>`
            courseDiv.push(text)}
            
        else{
            let text = div.innerHTML =
            `<div><h4>${courses[i].title}</h4>
            <p>${student_course.started.semester} ${student_course.started.year} (${student_course.passedCredits} 0f ${courseDataId.totalCredits} credits)</p></div>`
            courseDiv.push(text)}

    }
    return courseDiv.toString().split(",").join(" ");
}
