'use strict'

// link to repository: https://github.com/CaspianUlvmane/Programmering_webben_ME132A_U3_students_and_courses

//renders courses based on input value and sorts them based on their title
function filterCourses () {
  let resultArray = []
  for (let i = 0; i < allCourses.length; i++) {
    document.getElementById('course').innerHTML = ''
    if ('' == searchWord()) {
      document.getElementById('course').innerHTML = ''
    } else if (
      allCourses[i].title
        .toLocaleLowerCase()
        .includes(searchWord().toLocaleLowerCase())
    ) {
      resultArray.push(allCourses[i])
    }
  }

  resultArray.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    }
    if (a.title < b.title) {
      return -1
    }
    return 0
  })
  renderAllCourses(resultArray)
}

function searchWord () {
  let search = document.getElementById('results')
  return search.value.toLocaleLowerCase()
}

document.getElementById('results').addEventListener('keyup', filterCourses)

//toggles darkmode and ads theme to localStorage
function toggle () {
  let darkmode = document.querySelector('head > link')

  if (darkmode.getAttribute('href') == 'style.css') {
    darkmode.href = 'dark.css'
    localStorage.setItem('theme', 'dark.css')
    return
  }

  if (darkmode.getAttribute('href') == 'dark.css') {
    darkmode.href = 'style.css'
    localStorage.setItem('theme', 'style.css')
  }
}

document.getElementById('styling').addEventListener('click', toggle)

function setTheme () {
  let Theme = localStorage.getItem('theme')
  if (Theme == null) {
    document.querySelector('head > link').href = 'style.css'
    return
  }
  document.querySelector('head > link').href = Theme
  return Theme
}

setTheme()
