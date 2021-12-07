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
let completedCasesAll = document.getElementById('completedCases');

//!localStorage.tasks ? tasks=[]:tasks=JSON.parse(localStorage.getItem('tasks'));


if (!localStorage.tasks)
    {   tasks=[];
         } else
{   tasks=JSON.parse(localStorage.getItem('tasks')); }
    console.log(tasks);

for (var completed in tasks) {
    if (tasks.completed) {
        console.log(tasks.completed);
       // completeTaskAll[index].classList.add('checkout');
       // fillHtmlList();
    }
    else {
        console.log(tasks.completed);

    }
}


//Функция создает Дело
function Task(description) {
    this.description = description;
    this.completed = false;
}

// Функия добавляет класс checkout
const completeTask=index=> {
    tasks[index].completed=!tasks[index].completed;

    if ( tasks[index].completed)
      {
          LocalStore();
         /* console.log(tasks);*/

         // console.log( tasks[index].completed);
        completeTaskAll[index].classList.add('checkout');

    } else {
        //tasks[index].completed=true;
        completeTaskAll[index].classList.remove('checkout');
        fillHtmlList();
        LocalStore();
        /*console.log(tasks);*/
    }
};


        //Создаем шаблон
let createTemplate=(tasks,index)=> {
return `<div class="task">
        <div>${tasks.description} </div>
        <input onclick="completeTask(${index})" type="checkbox" >
      <button class="btn" id="btnDelete">Удалить</button>
    </div> `;
};

// Функция помещает Tasks(задание)в Localstore
function LocalStore() {

    localStorage.setItem('tasks', JSON.stringify(tasks))

}


// фУНКЦИЯ (fill)заполняет Tasks(задание ) в html
let fillHtmlList=()=> {
    casesWrapper.innerHTML= " ";
    if (tasks.length>0) {
        tasks.forEach((item,index)=> {
            console.log(tasks,item,index);
            casesWrapper.innerHTML+=createTemplate(item,index);

        });
        completeTaskAll=document.querySelectorAll('.task');
        //console.log( completeTaskAll);
    }


};

fillHtmlList();


btnCases.addEventListener('click', () => {
    //console.clear();
    tasks.push(new Task(enter_cases_input.value));
    /*console.log('tasks',tasks);*/
    LocalStore();
    fillHtmlList();
});

