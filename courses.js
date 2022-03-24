let allCourses = DATABASE.courses

let twoCourses = [allCourses[0], allCourses[1]]

function renderCourses(id){
    let div = document.createElement("div")
    let course = DATABASE.courses[id]
    div.id = "container"
    div.innerHTML =
    `<header>${course.title} (${course.totalCredits} credits)</header>
    <div>
        <div id="course">
            <h3>Courses:</h3>
            <div id="courses">
            </div>
        </div>
    </div>`
    document.querySelector("#siteWrapper").appendChild(div)
    return div
}