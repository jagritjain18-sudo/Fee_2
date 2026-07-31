// (function (){
//     let todos=[];
    
//     const todocontainer=document.getElementById("todo");
//     const todoinput=document.createElement("input");
//     todoinput.type="text";
//     todoinput.placeholder="Enter task...";
//     const addbtn=document.createElement("button");
//     addbtn.textContent="ADD";
//     const todolist=document.createElement("div");
//     todolist.style.border="2px solid black";
//     todocontainer.append(todoinput,addbtn,todolist);

//     function rendertask(task){
//         const todoitem=document.createElement("div");
//         todoitem.style.border="2px solid red";
//         todoitem.style.margin="10px";

//         const p=document.createElement("p");
//         p.textContent=task;

//         const deletebtn=document.createElement("button");
//         deletebtn.textContent="Delete";

//         const editbtn=document.createElement("button");
//         editbtn.textContent="Edit";

//         const complete=document.createElement("button");
//         complete.textContent="Complete";   

//         editbtn.addEventListener("click",function(){
//             const editinput=document.createElement("input");
//             editinput.value=task;
//             const savebtn=document.createElement("button");
//             savebtn.textContent="Save";
//             todoitem.prepend(editinput,savebtn);
//             editinput.focus();

//             savebtn.addEventListener("click",function(){
//                 const updatedtask=editinput.value;
//                 if(!updatedtask){
//                     return;
//                 }
//                 p.textContent=updatedtask;
//                 const index=todos.indexOf(task);
//                 todos[index]=updatedtask;
//                 editinput.remove();
//                 savebtn.remove();
//                 todoitem.style.backgroundColor="white";
//                 todoitem.style.border="2px solid red";
//                 console.log(todos);
//             });
//         });

//         deletebtn.addEventListener("click",function(){
//             const index=todos.indexOf(task);
//             todos.splice(index,1);
//             todoitem.remove();
//         });

//         complete.addEventListener("click",function(){
//             todoitem.style.border="2px solid green"; 
//             todoitem.style.backgroundColor="green";
//             complete.remove();
//         });

//         todoitem.append(p,deletebtn,editbtn,complete);
//         todolist.prepend(todoitem);
//     }

//     function addtodo(){
//         const task=todoinput.value.trim();
//         if(!task){
//             return;
//         }
//         todos.unshift(task);
//         rendertask(task);
//         todoinput.value="";
//         todoinput.focus();
//     }

//     addbtn.addEventListener("click",addtodo);
//     todoinput.addEventListener("keydown",function(e){
//         if(e.key==="Enter"){
//             addtodo();
//         }
//     });

// })();
(function () {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let id = Number(localStorage.getItem("id")) || 0;
    const style = document.createElement("style");
     style.textContent = `
        body {
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            background-size: 400% 400%;
            animation: gradientBG 20s ease infinite;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        #todo {
            max-width: 600px;
            margin: 50px auto;
            padding: 25px;
            border-radius: 12px;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(10px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.5);
        }

        #todo input[type="text"] {
            width: 60%;
            padding: 10px;
            margin-right: 10px;
            border: none;
            border-radius: 6px;
            font-size: 15px;
        }

        #todo button {
            padding: 10px 15px;
            margin: 5px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s ease;
        }
        #todo button:hover {
            transform: scale(1.05);
            opacity: 0.9;
        }

        /* Button colors */
        #todo button:nth-of-type(1) { background: #1e90ff; color: white; } /* ADD */
        #todo button:nth-of-type(2) { background: #ff4500; color: white; } /* Search */

        /* Task cards */
        #todo div > div {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(6px);
            border-radius: 10px;
            padding: 12px;
            margin-bottom: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: transform 0.2s ease;
        }
        #todo div > div:hover {
            transform: translateY(-3px);
        }

        #todo p {
            margin: 0;
            flex: 1;
            font-size: 15px;
            font-weight: 500;
            color: #fff;
        }

        .completed {
            background: rgba(0,128,0,0.6) !important;
            border: 2px solid #00ff7f !important;
            color: #e0ffe0;
        }
    `;
    document.head.appendChild(style);

    const todocontainer = document.getElementById("todo");
    const todoinput = document.createElement("input");
    todoinput.type = "text";
    todoinput.placeholder = "Enter task...";
    const addbtn = document.createElement("button");
    addbtn.textContent = "ADD";
    const searchbtn = document.createElement("button");
    searchbtn.textContent = "Search";
    const todolist = document.createElement("div");
    todolist.style.border = "2px solid black";
    todocontainer.append(todoinput, addbtn, searchbtn, todolist);

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("id", id);
    }

    function renderAllTasks(list = todos) {
        todolist.innerHTML = ""; 
        list.forEach(todo => {
            const todoitem = document.createElement("div");
            todoitem.style.border = "2px solid red";
            todoitem.style.margin = "10px";

            const p = document.createElement("p");
            p.textContent = todo.text;

            const deletebtn = document.createElement("button");
            deletebtn.textContent = "Delete";

            const editbtn = document.createElement("button");
            editbtn.textContent = "Edit";

            const complete = document.createElement("button");
            complete.textContent = "Complete";

            editbtn.addEventListener("click", function () {
            const editinput = document.createElement("input");
            editinput.value = todo.text;
            const savebtn = document.createElement("button");
            savebtn.textContent = "Save";
            savebtn.style.background = "#4CAF50";
            savebtn.style.color = "white";

   
            p.style.display = "none";

            todoitem.prepend(editinput, savebtn);
            editinput.focus();

            savebtn.addEventListener("click", function () {
            const updatedtask = editinput.value.trim();
            if (!updatedtask) return;

            todo.text = updatedtask;
            p.textContent = updatedtask;

       
            p.style.display = "block";
            editinput.remove();
            savebtn.remove();

            saveTodos();
            renderAllTasks();
            });
        });


          
            deletebtn.addEventListener("click", function () {
                todos = todos.filter(t => t.id !== todo.id);
                saveTodos();
                renderAllTasks();
            });

            
            complete.addEventListener("click", function () {
                todo.complete = true;
                saveTodos();
                renderAllTasks();
            });

            if (todo.complete) {
                todoitem.style.border = "2px solid green";
                todoitem.style.backgroundColor = "green";
                complete.remove();
            }

            todoitem.append(p, deletebtn, editbtn, complete);
            todolist.prepend(todoitem);
        });
    }

    function addtodo() {
        const task = todoinput.value.trim();
        if (!task) return;

        id += 1;
        const obj = {
            id: id,
            text: task,
            complete: false
        };

        todos.unshift(obj);
        saveTodos();
        renderAllTasks();
        todoinput.value = "";
        todoinput.focus();
    }
    todoinput.addEventListener("input", function () {
        const query = todoinput.value.trim().toLowerCase();
        if (!query) {
            renderAllTasks(); // reset to all tasks
        } else {
            const filtered = todos.filter(todo => todo.text.toLowerCase().includes(query));
            renderAllTasks(filtered);
        }
    });

    addbtn.addEventListener("click", addtodo);
    todoinput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addtodo();
        }
    });
    renderAllTasks();

})();
