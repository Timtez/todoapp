// GRABBING THE TEXT BOX INPUT FROM THE USER
const entry = document.querySelector("input.input");

const listCount = document.querySelector(".footer .count span");
listCount.innerText = 0;

function addEntry(item){
    
    const list = `<li class="todo-item">
                <input type="checkbox" class="checkbox"/>
            <div class="task">
              <p class="todo-text">
                ${item}
              </p>
              <span class="delete"
                ></span>
            </div>
        </li>`;

    if (itemID === "all"){
        list.classList.add("hidden");
    }
        const position = "beforeend";
        todoLists.insertAdjacentHTML(position, list);
        updateCount(1);
}

// UPDATING THE COUNT OF THE ITEMS ON THE LIST
function updateCount(n){
    if (listCount.innerText === 0) {
        listCount.innerText = 0 + n;
        return;
    } else {
        listCount.innerText = parseInt(listCount.innerText) + n;
        // console.log(listCount.innerText);
    }
}

// BY DEFAULT THE ALL BTN WILL BE CHECKED
// SO WE GRAB THAT BTN AND ANYTIME WE UPDATE OUR LIST WE WILL CHECK TO SEE IF THIS
// BTN IS CHECKED WE APPEND THE LIST ELSE WE HIDE IT.
const itemID = document.querySelector('.filters label input[type="radio"]:checked');

//ADDING TODOS VIA BTN CLICK
const btnInput = document.querySelector(".input-section button").addEventListener("click", (e) =>{
    if (entry.value.length > 0){
        addEntry(entry.value);
        entry.value = "";
    }
    return;
})

//ADDING TODOS VIA THE ENTER BUTTON
function handleKeyPress(e){
    if(e.keyCode === 13 && entry.value.length > 0){
        addEntry(entry.value);
        entry.value = "";
    }
    return;
}


// GRABBING THE LIST SO AS TO APPEND ANY USER ENTRY
const todoLists = document.querySelector(".todos .todo-list");
const lists = document.querySelectorAll(".todo-item");

lists.forEach(list => {
    list.addEventListener("mouseover", (e)=>{
        item = e.target;
        // console.log(item);
    })
})

//  GRAB THE RADIO BUTTONS THAT IS USED TO FILTER THE TODO ITEMS BASED OF THE VARIOUS CATEGORIES
// I grabbed all three radio buttons and via their various ids i will filter the lists

const filterBtns = document.querySelectorAll("label input").forEach(radio => {
    radio.addEventListener("change", event => {
        const id = event.target.id;
        filterBtn(id);
    });
    return;
});


function filterBtn(id){
    const allLists = document.querySelectorAll("li");

    if(id == "all"){
        allLists.forEach(list => {
            list.classList.remove("hidden");
        })
        
    } else if (id == "active") {
        allLists.forEach(list => {
            if (list.querySelector("input.checkbox").checked){
                list.classList.add("hidden");
            } else {
                list.classList.remove("hidden");
            }
        
        })
    } else if (id == "completed"){
        allLists.forEach(list => {
            if (list.querySelector("input.checkbox").checked){
                list.classList.remove("hidden");
            } else {
                list.classList.add("hidden");
            }
        
        })
    }
    
    }

// REMOVE COMPLETED ITEMS OFF THE LIST
    todoLists.addEventListener("click", event => {
        if (event.target.classList.contains("delete")){
            item = event.target;
            removeItem(item.parentElement.parentElement);
        }
    })

    function removeItem(item){
        updateCount(-1);
        item.remove();
    }

    const clearBtn = document.querySelector(".clear").addEventListener("click", event => {
        clearCompleted();
    })

    function clearCompleted(){
        const checkBoxes = document.querySelectorAll("li .checkbox");
        checkBoxes.forEach(checkBox => {
            if(checkBox.checked){
                updateCount(-1);
                // console.log(checkBox.index);
                checkBox.parentElement.remove();
            }
        })
        
    }
