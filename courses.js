let allCourses = DATABASE.courses
let allTeachers = DATABASE.teachers
let allStudents = DATABASE.students

let twoCourses = [allCourses[0], allCourses[1]]

function renderCourse(id){
    let div = document.createElement("div")
    div.id = "container"
    div.innerHTML =
    ` <div id="course">
    <header>${courseTitle(id)} (${courseTotalCredits(id)} credits)</header>
    <div id="faculty">
        <div id="responsible">
            <h3>Course responsible:</h3>
            <p>${courseResponsible(id)}</p>
        </div>
        <div id="teachers">
            <h3>Teachers:</h3>
            <div>
                ${allCourseTeachers(id)}
            </div>
        </div>
    </div>
    <h3>Students:</h3>
    <div id="students">
        ${allCourseStudents(id)}
    </div>
    </div>
    `
    return div
}

function renderAllCourses(courses){
    let coursesElement = document.getElementById("course")
    for ( let course of courses){
        let courseElement = renderCourse(course.courseId)
        coursesElement.appendChild(courseElement)
    }
}

function courseTitle (id){
    let course = DATABASE.courses[id]
    return course.title
}

function courseTotalCredits (id) {
    let course = DATABASE.courses[id]
    return course.totalCredits
}

function courseResponsible (id) {
    let course = DATABASE.courses[id]
    let teachersNames = allTeachers.map((teacher) => teacher.firstName + " " + teacher.lastName + " " + `(${teacher.post})`)
    let res = course.courseResponsible
    return teachersNames[res]
}

function allCourseTeachers(id){
    let course = DATABASE.courses[id]
    let teachersNames = allTeachers.map((teacher) => teacher.firstName + " " + teacher.lastName + " " + `(${teacher.post})`)
    let teachers = []
    for ( let i = 0; i < teachersNames.length; i++){
        if (course.teachers.some((value) => value == i)){
        let div = document.createElement("div")
        let content = div.innerHTML = `<p>${teachersNames[i]}</p>`
        teachers.push(content)
        }
    }

    return teachers.toString().split(",").join(" ");
}

function allCourseStudents (id){
    let studentsDiv = []
    let courseId = DATABASE.courses[id].courseId
    let students = allStudents.filter((student) => student.courses.some((course) => course.courseId == courseId))
        for (let student of students){
            let courseById = student.courses.filter((course) => course.courseId == courseId)
            for (let i = 0; i < courseById.length; i++){
                if (passedCredits(courseById[i], student)[i] == DATABASE.courses[id].totalCredits){
                    let div = document.createElement("div")
                    let content = div.innerHTML = `<div class="done">
                    <p>${student.firstName} ${student.lastName} (${passedCredits(courseById[i], student)[i]} credits)</p>
                    <h5>${courseStarted(courseById[i], student)[i]}</h5>
                    </div>`
                    studentsDiv.push(content)
                } else{
                    let div = document.createElement("div")
                    let content = div.innerHTML = `<div>
                    <p>${student.firstName} ${student.lastName} (${passedCredits(courseById[i], student)[i]} credits)</p>
                    <h5>${courseStarted(courseById[i], student)[i]}</h5>
                    </div>`
                    studentsDiv.push(content)
                }
            }
        }
    return studentsDiv.toString().split(",").join(" ");
}

function passedCredits (takenCourse, student){
    let passedCredit = student.courses.filter((course) => course.courseId == takenCourse.courseId).map((course) => course.passedCredits)
    return passedCredit
}

function courseStarted (takenCourse, student){
    let courseStart = student.courses.filter((course) => course.courseId == takenCourse.courseId).map((course) => `${course.started.semester} ${course.started.year}`)
    return courseStart
}