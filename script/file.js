const myForm = document.getElementById('my-form')

myForm.addEventListener('submit', function(e){
e.preventDefault()
console.log('Invio il form')

const toDoField = document.getElementById("ToDo")
//console.log(toDoField)

const ToDo = toDoField.value 



//console.log('Dati utente:', ToDo)

let newTaskToDo = document.createElement('div')

newTaskToDo.innerHTML = `
<p>${ToDo}<p>
<button>ELIMINA</button>
`

let savedTask = document.getElementById('saved-task')
savedTask.appendChild(newTaskToDo)


const deleteButtons = document.querySelectorAll('#saved-task button')

deleteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        let buttonClick = e.target

        let taskToRemove = buttonClick.parentElement
        taskToRemove.remove()
    })
    
})

})
