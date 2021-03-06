const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}
]

let ASearchText =  ''
let hideCompleted = false

const renderTodos = function (todos, ASearchText) {
    const filteredTodos = todos.filter(function (todo) {
        const searchText = todo.text.toLowerCase().includes(ASearchText.toLowerCase())
        const hideCompletedMatch = !hideCompleted || !todo.completed
        return searchText && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    const sortList = function (kk) {
        kk.sort(function (a, b) {
            if (a.text.toLowerCase() < b.text.toLowerCase()) {
                return -1
            } else if (b.text.toLowerCase() < a.text.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
    sortList(filteredTodos)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}



renderTodos(todos, ASearchText)


document.querySelector('#search-text').addEventListener('input', function (e) {
    ASearchText = e.target.value
    renderTodos(todos, ASearchText)
})



document.querySelector("#form").addEventListener("submit", function(e){
    e.preventDefault()
    if(e.target.elements.todoInput.value.length > 0){
            todos.push({
        text: e.target.elements.todoInput.value,
        completed: false
    })
        renderTodos(todos, ASearchText)
    e.target.elements.todoInput.value = ""
    }else {
        return false
    }
})


document.querySelector("#checkbox").addEventListener("change", function(e){
    hideCompleted = e.target.checked
    renderTodos(todos, ASearchText)
})



console.log(todos)


// control + C to terminate live-server
// const ps = document.querySelectorAll("p")

// // ps = [{scrollWidth:727, textContevt:"??????..."},{.....},{......,{.....},{.....}]
// // ?????????array???????????????????????? array.forEach()  
// //// ??????array.find()
// //// ?????? array.findIndex()?????????methods
// // ??????object ??????????????? "." ????????? ??????: ob.dream 
// // ??????object?????????????????? .includes(), .find() ?????????methods

// const pse = ps.forEach(function(N){                      // scope: the array named "ps"
//     if (N.textContent.includes("architecto")){
//         N.remove()
//     }
// })



// console.log(ps)

// // DOM???????????????:[{},{},{},{},{}] ----  5???objects,?????????????????????items,????????????objects???????????????
// // call back function


// const newP = document.createElement("p")

// newP.textContent = "This is a new paragraph from js."
// document.querySelector("body").appendChild(newP)



