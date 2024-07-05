const addTodo = () => {
  let todoText = document.getElementById("todo-text").value;
  if (todoText != "") {
    setData(todoText); // add item to local storage
    printTodo(); //show item from local storage
  }
};

const printTodo = () => {
  let html = ``;
  let data = getData() //fetch from local storage
  if (data) {
    html += `<ol>`;
    data.forEach((value, item) => {
      html += `<li>${value} &nbsp;&nbsp;&nbsp;<button onclick="removeData(${item})">Remove</button></li>`;
    });
    html += `</ol>`;
  }
  document.getElementById("todo-item").innerHTML = html;
};

const getData = (item = null) => {
  let data = JSON.parse(localStorage.getItem("mytodo")) || [];; //localStorage.getItem(<itemname>)
    if (item !== null) {
      if (data.indexOf(item) != -1) {
        return data[item];
      } else {
        return false;
      }
    }
    return data;
  }

printTodo(); //showing data into list

const setData = (item) => {
  if (getData().indexOf(item) !== -1) {
    alert("Item already added in todo!");
  } else {
    let data = getData();
    data.push(item);
    data = JSON.stringify(data);
    localStorage.setItem("mytodo", data); //localStorage.setItem(<itemname>,<itemvalue>)
  }
};



const removeData = (itemId) => {
  let data = getData();
  if (data) {
    let newData = data.filter((v, i) => i != itemId);  //remove item from LS by item index provided by the user;
    newData = JSON.stringify(newData);
    localStorage.setItem("mytodo", newData); //reset data in LS
    printTodo();
  } else {
    alert("No data found!");
  }
};
