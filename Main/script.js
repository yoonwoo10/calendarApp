const PageWidth=window.innerWidth;
const PageHeight=window.innerHeight;
// document.title="Hello";
console.log(PageWidth,PageHeight);

const todoBox=document.getElementById("todo");
// while (true){
    //     console.log(inputedTodo);
    // }
    
    // while(true){
        //     console.log(todo);
        // }
        //체크박스 만들기
        
        
// setInterval(function(){todoBox.appendChild(inputedTodo)},1000);
function createTodo(text){
    
    const temp=document.createElement("a");
    const checkBox=document.createElement("button");
    temp.innerHTML=text;
    temp.style="display:inline;top:50%;margin-left:6px;";
    temp.style.top="50%";
    //체크박스 스타일 설정
    checkBox.id="todoCheckbox";
    checkBox.style.display="inline-flex";
    todoBox.appendChild(checkBox);
    const todoTable=todoBox.querySelector('table');
    todoTable.insertRow();
    const todoTableRows=todoTable.querySelectorAll("tr");
    todoTableRows[todoTableRows.length-1].insertCell();
    const cells=todoTableRows[todoTableRows.length-1].querySelectorAll('td');
    cells[cells.length-1].append(checkBox, temp);
}
let inputedTodo=document.getElementById('input_todo').value;
setInterval(function(){
    if (inputedTodo!=document.getElementById('input_todo').value){
        inputedTodo=document.getElementById('input_todo').value;
    }
},10)

//엔터 키 입력 감지
const detectKey=document.getElementById('input_todo');
detectKey.addEventListener("keyup",
    function(event){
        if (event.key=="Enter"){
            createTodo(inputedTodo);
        }
    }
)

// setInterval(function(){inputedTodo=document.getElementById('input_todo').value;console.log(inputedTodo);},1000);