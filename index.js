/*(   function () {
   let btn1=document.createElement('button'),
       btn2 =document.createElement('button'),
       day=document.createTextNode('День'),
       night=document.createTextNode('Ночь');
       btn1.append(day);
       btn2.append(night);
       let content1=document.body,
      div=document.createElement('div');
      div.className="divbody";
      content1.append(div);
        div.append(btn1);
        div.append(btn2);
        document.body.className="night";
        document.body.className="day";
        function funDay() {
            return  document.body.className="day";
        }
        function funNight() {
            return  document.body.className="night";
        }
       btn1.addEventListener("click",funDay);
       btn2.addEventListener("click",funNight);

let input =document.createElement('input');
    document.body.appendChild(input);
}

)();*/
//
/*localStorage.clear();*/
let enter_cases_input = document.getElementById('enterCases');
let btnCases = document.getElementById('btnCases');
let casesWrapper = document.getElementById('casesWrapper');
let tasks;
let completeTaskAll;
let completeCasesAll = document.getElementById('completedCases');
let deleteTaskAll;
//!localStorage.tasks ? tasks=[]:tasks=JSON.parse(localStorage.getItem('tasks'));


if (!localStorage.tasks) {
    tasks = [];
} else {
    tasks = JSON.parse(localStorage.getItem('tasks'));

}

if (!localStorage.deleteTaskAll) {
    deleteTaskAll = [];
    console.log(deleteTaskAll);
} else {
    deleteTaskAll = JSON.parse(localStorage.getItem('deleteTaskAll'));

}

//console.log(tasks);


//Функция создает Дело
function Task(description) {
    this.description = description;
    this.completed = false;
}

// Функия добавляет класс checkout
const completeTask = index => {
    tasks[index].completed=!tasks[index].completed;
      if (tasks[index].completed) {
        LocalStore();
        completeTaskAll[index].classList.add('checkout');
    } else {
        completeTaskAll[index].classList.remove('checkout');
        LocalStore();

    }
};

const deleteTask = index => {
    deleteTaskAll[index]= tasks[index];
    console.log('deleteTaskAll[index]',deleteTaskAll[index]);
    tasks.splice(index, 1);
    LocalStore();
    fillHtmlList();


};

//Создаем шаблон вставляем из массива таск
let createTemplate = (tasks, index) => {
    return `<div class="task ${tasks.completed ? 'checkout':''} " > 
          <div>${tasks.description} </div>
          <input onclick="completeTask(${index})" type="checkbox" ${tasks.completed?'checked="checked"':''}>
          <button onclick="deleteTask(${index})" class="btn" id="btnDelete">Удалить</button>
        </div>`;
};

// Функция помещает Tasks(задание)в Localstore
function LocalStore() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('deleteTaskAll', JSON.stringify(deleteTaskAll));
}


// фУНКЦИЯ (fill)заполняет Tasks(задание ) в html
let fillHtmlList = () => {
    casesWrapper.innerHTML = " ";
    if (tasks.length > 0) {
        tasks.forEach((item, index) => {
            casesWrapper.innerHTML += createTemplate(item, index);

        });
        completeTaskAll = document.querySelectorAll('.task');

    }

};
// фУНКЦИЯ  Tasks(задание ) в html
let fillDeleteTasks = () => {
    completeCasesAll.innerHTML = " ";
    if (deleteTaskAll.length > 0) {
        deleteTaskAll.forEach((item, index) => {
            completeCasesAll.innerHTML += createTemplate(item, index);

        });
      //  completeTaskAll = document.querySelectorAll('.task');

    }

};

fillDeleteTasks();
fillHtmlList();


btnCases.addEventListener('click', () => {
    tasks.push(new Task(enter_cases_input.value));
    LocalStore();
    fillHtmlList();
});

