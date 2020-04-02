function logout() {
    sessionStorage.clear();
}

let locObj = JSON.parse(localStorage.getItem(sessionStorage.key(sessionStorage.length - 1)));
let arrlist = locObj.todoArr;
let table = document.getElementById("table");
let check = document.getElementById("check");
let li = document.getElementsByClassName("check");

(loadList = function () {
    // clearlist();
    for (let i = 0; i < arrlist.length; i++) {
        let list = document.createElement("tr");
        list.innerHTML =
            "<td>" + "<input type='checkbox' onclick='selectCheck()' class='check'>" + "</td>" +
            "<td>" + arrlist[i].category + "</td>" +
            "<td>" + arrlist[i].task + "</td>" +
            "<td>" + arrlist[i].startDate + "</td>" +
            "<td>" + arrlist[i].endDate + "</td>" +
            "<td>" + arrlist[i].status + "</td>" +
            "<td>" + "<button onclick='changelink(" + i + ")' id ='edit'>Edit</button>" + "</td>" +
            "<td>" + "<button id ='delete' class='delete' onclick='deleteItem(" + i + ")'>Delete</button>" + "</td>"


        table.appendChild(list);
    }
})();

function deleteItem(value) {
    arrlist.splice(value, 1);
    localStorage.setItem(locObj.email, JSON.stringify(locObj));
    window.location.reload();
}

function changelink(value) {
    window.location.href = "editTask.html";
    document.getElementById("task") = arrlist[value].task;
    document.getElementById("category") = arrlist[value].category;
    document.getElementById("startDate") = arrlist[value].startDate;
    document.getElementById("endDate") = arrlist[value].endDate;
    document.getElementById("remDate") = arrlist[value].remDate;
    document.getElementById("privacy") = arrlist[value].privacy;
}

function selectall() {
    
    for (let i = 0; i < li.length; i++) {
        if (document.getElementById("checkbox").checked == true) {
            li[i].checked = true;
        }
        else {
            li[i].checked = false;
        }

        
    }
}

function deleteSelected() {
    
    for (let i = 0; i < arrlist.length; i++) {
        if (li[i].checked == true) {
            delete arrlist[i];
        }
    }
    arrlist = arrlist.filter(function (element) {
        return element !== null;
    });

    locObj.todoArr=arrlist;
    localStorage.setItem(locObj.email, JSON.stringify(locObj));
    window.location.reload();
}

function selectCheck(){
    alert("hay");
    if(document.getElementsByClassName("check").checked==true){
        document.getElementById("edit").disabled=true;
        document.getElementById("edit").style.opacity="0.5";

        document.getElementById("delete").disabled=true;
        document.getElementById("delete").style.opacity="0.5";
    }
}