

// TOTOS
let todos = [];




//to check list is empty
function checkEmpty() {

    if (todos.length === 0) {
        document.querySelector("#cardContainer").innerHTML = `<div class="alert alert-primary" role="alert">
        Threre is no Todo ..... Please Add Some
      </div>`
    }
}

checkEmpty()






// DELETE todo
function removeTodo(id) {

    let updatedTodos = todos.filter((todo, index) => {
        return todo.id !== id
    })

    todos = updatedTodos

    generateHtml();
    checkEmpty();
}

// EDIT TODO

function editTodo(id, index) {

    let editTodoVal = document.querySelectorAll("#editInput")[index].value

    let updatedTodo = todos.map((todo) => {

        if (todo.id === id) {
            todo.value = editTodoVal;
            return todo
        } else {
            return todo
        }
    })

    todos = updatedTodo;

    generateHtml();
}


// Toggle Edit

function toggleEdit(id) {
    document.querySelectorAll("#editTodo")[id].classList.toggle("d-none")
}




// GENERATE CARD FROM TODO LIST

function generateHtml() {

    let html = ""

    todos.forEach((todo, index) => {

        html += `<div class="card mb-4">
                  <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="w-75">
                              <h4 class="card-title text-secondary">${index + 1}. ${todo.value.split(' ').slice(0, 2).join(' ')}</h4>
                              <p class="card-text text-dark"> ${todo.value}

                              </p>
                          </div>

                          <div class="mx-2" >
                                <div class="d-inline-block" id=${index} onClick="toggleEdit(this.id)">
                                    <i class="fa-sharp fa-solid fa-edit fa-xl"></i>
                                </div>

                                <div class="d-inline-block mx-3" id=${todo.id} onClick="removeTodo(this.id)">
                                    <i class="fa-sharp fa-solid fa-trash fa-xl"></i>
                                </div>

                            </div>

                      </div>

                  <div id="editTodo" class="mt-4 d-none">
                      <div class="input-group mb-3 ">
                          <input type="text" id="editInput" class="form-control" placeholder="${todo.value}"
                            value="${todo.value}"
                              aria-label="Recipient's username" aria-describedby="button-addon2">

                          <button class="btn btn-outline-secondary" type="button" name=${index} id=${todo.id} onClick="editTodo(this.id,this.name)">Edit</button>
                      </div>
                  </div>

                  </div>
              </div>`
    })

    document.querySelector("#cardContainer").innerHTML = html
}



// EVENT HANDLER TO ADD TODO

let addButton = document.querySelector("button");

addButton.addEventListener("click", function () {

    let inputVal = document.querySelector("input").value;

    todos.push({
        id: 'id' + (new Date()).getTime(),
        value: inputVal
    })

    document.querySelector("input").value = ""

    generateHtml()
})





