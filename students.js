let allStudents = DATABASE.students

function renderStudent(id){
    let div = document.createElement("div")
    let student = DATABASE.students[id]
    div.id = "container"
    div.innerHTML =
    `<header>${student.firstName} ${student.lastName} (total: ${completeCredits(student)} credits)</header>
    <div id="head_wrap">
        <div id="course">
            <h3>Courses:</h3>
            <div id="courses">

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
        console.log(student.studentID)
        console.log(renderStudent(student.studentID))
        let studentElement = renderStudent(student.studentID)
        studentsElement.appendChild(studentElement)
    }
}

function renderCourses (student){
    let courseData = DATABASE.courses
    let courses = []
    for ( let course of student.courses){
        if (course.courseID == courseData.courseID)
        courses.push(courseData)
    }
    for (let course of courses){
        let div = document.createElement("div")
        div.innerHTML =
        <h4>${course.title}</h4>
        <p> ( 0f  credits)</p>
    }
}