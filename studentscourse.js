
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