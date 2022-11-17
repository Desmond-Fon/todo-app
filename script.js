const check = document.querySelectorAll(".check");
const tick = document.getElementsByClassName("tick");
const moon = document.getElementById("moon-icon");
const sun = document.getElementById("sun-icon");
const userTheme = localStorage.getItem("theme");
const elem = document.getElementById("input");
const list = document.getElementById("list");
const items = document.getElementById("items");
const itemsLeft = document.getElementById('items-left');
const clearCompleted = document.getElementById('clear-completed');
const all = document.getElementById('all');
const active = document.getElementById('active');
const completed = document.getElementById('completed');
let myTodo = [];
let completedArray = [];
let activeArray = [];


if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
  window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  

const iconToggle = () => {
  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");
};

const themeCheck = () => {
  if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
    moon.classList.add("hidden");
    return;
  }
  sun.classList.add("hidden");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "light");
  iconToggle();
};

moon.addEventListener("click", () => {
  themeSwitch();
});

sun.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();


elem.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13 && elem.value !== '') { 
      event.preventDefault();
      myTodo.push(elem.value);
      console.log(myTodo);
      let listItems = '';
      for(let i = 0; i <myTodo.length; i++) {
        
        listItems += `<li
        class="flex justify-between py-4 px-5 text-xs items-center text-veryDarkGrayishBlueLT dark:text-lightGrayishBlueDM todo-item" draggable="true"
      >
        <span class="flex items-center">
          <span class="border p-1 rounded-full w-5 h-5 mr-2 check dark:border-gray-600" onclick="print()">
          </span>
          <p class="items">${myTodo[i]}</p>
        </span>
        <span>
          <img src="images/icon-cross.svg" alt="" class="w-3 cross"/>
        </span>
      </li>
      <div class="w-full h-[1px] bg-gray-200 dark:bg-gray-600 "></div>`
      }
      list.innerHTML = listItems;
      elem.value = '';
      itemsLeft.innerHTML = `${myTodo.length} items left`
      // console.log(document.getElementById('items').textContent);
    }
  });

  function print() {
Array.from(document.getElementsByClassName("check")).forEach(btn => {
  btn.addEventListener('click', (e) => {
    const targetElement = e.target;
    if (targetElement.matches(".check")){
      // console.log('click');
      // console.log(btn.nextSibling.nextSibling);
      btn.setAttribute("style","background: linear-gradient(to bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%));", "color: hsl(234 39% 85% / var(--tw-text-opacity));")
      btn.innerHTML = `<img
      src="images/icon-check.svg"
      alt=""
      class="w-3"
    />`;
    btn.nextSibling.nextSibling.setAttribute("style","text-decoration: line-through; color: gray");
      completedArray.push(btn.nextSibling.nextSibling.textContent)
      // console.log(completedArray);
    } else{
      btn.setAttribute("style", "background: none");
      btn.nextSibling.nextSibling.setAttribute("style","text-decoration: none; color: hsl(235 19% 35% / var(--tw-text-opacity));");
      btn.innerHTML = `<img
      src="images/icon-cross.svg" class="hidden">`;
      activeArray.push(btn.nextSibling.nextSibling.textContent);
      // console.log(activeArray);
    }
  })
})
  }



all.addEventListener("click", ()=> {
    let listItems = '';
    for(let i = 0; i <myTodo.length; i++) {
      
      listItems += `<li
      class="flex justify-between py-4 px-5 text-xs items-center text-veryDarkGrayishBlueLT dark:text-lightGrayishBlueDM todo-item" draggable="true"
    >
      <span class="flex items-center">
        <span class="border p-1 rounded-full w-5 h-5 mr-2 check dark:border-gray-600" onclick="print()">
        </span>
        <p class="items">${myTodo[i]}</p>
      </span>
      <span>
        <img src="images/icon-cross.svg" alt="" class="w-3 cross"/>
      </span>
    </li>
    <div class="w-full h-[1px] bg-gray-200 dark:bg-gray-600 "></div>`
    }
    list.innerHTML = listItems;
  }
);

active.addEventListener('click', ()=> {
  let listItems = '';
      for(let i = 0; i <activeArray.length; i++) {
        
        listItems += `<li
        class="flex justify-between py-4 px-5 text-xs items-center text-veryDarkGrayishBlueLT dark:text-lightGrayishBlueDM"
      >
        <span class="flex items-center">
          <span class="border p-1 rounded-full w-5 h-5 mr-2 check dark:border-gray-600" onclick="print()">
            <img
              src="images/icon-check.svg"
              alt=""
              class="w-3 hidden tick" id="tick"
            />
          </span>
          <p id="items">${activeArray[i]}</p>
        </span>
        <span>
          <img src="images/icon-cross.svg" alt="" class="w-3"/>
        </span>
      </li>
      <div class="w-full h-[1px] bg-gray-200 dark:bg-gray-600 "></div>`
      }
      list.innerHTML = listItems;
})

completed.addEventListener('click', ()=> {
  let listItems = '';
      for(let i = 0; i <completedArray.length; i++) {
        
        listItems += `<li
        class="flex justify-between py-4 px-5 text-xs items-center text-veryDarkGrayishBlueLT dark:text-lightGrayishBlueDM"
      >
        <span class="flex items-center">
          
          <p id="items">${completedArray[i]}</p>
        </span>
        <span>
          <img src="images/icon-cross.svg" alt="" class="w-3 cross"/>
        </span>
      </li>
      <div class="w-full h-[1px] bg-gray-200 dark:bg-gray-600 "></div>`
      }
      list.innerHTML = listItems;
})

clearCompleted.addEventListener('click', ()=> {
  console.log('clicked');
  list.innerHTML = '';
  completedArray = [];
})


addEventListener('dragstart', (e) => {
  if(e.target.matches(".todo-item")) {
    dragSrcEl = e.target;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData('text', e.target.innerHTML);
  }
});

addEventListener('dragover', (e) => {
  if(e.target.matches(".todo-item")) {
    e.preventDefault();
  }
});

addEventListener('drop', (e) => {
  if(e.target.matches(".todo-item")) {
    if(dragSrcEl !== e.target) {
      dragSrcEl.innerHTML = e.target.innerHTML;
      e.target.innerHTML = e.dataTransfer.getData('text');
    }
    return false;
  }
});
