function logout() {
    if(confirm("Are You Sure?")){
        sessionStorage.clear();
    }
    else{
        return false;
    } 
}

let locObj = JSON.parse(localStorage.getItem(sessionStorage.key(sessionStorage.length - 1)));
let arrlist = locObj.todoArr;
let table = document.getElementById("table");
let check = document.getElementById("check");
let li = document.getElementsByClassName("check");

(loadList = function () {
    
    document.getElementById("profile").src=locObj.file;

    for (let i = 0; i < arrlist.length; i++) {
        let list = document.createElement("tr");
        list.innerHTML =
            "<td>" + "<input type='checkbox' onclick='selectCheck()' class='check'>" + "</td>" +
            "<td>" + arrlist[i].category + "</td>" +
            "<td>" + arrlist[i].task + "</td>" +
            "<td>" + arrlist[i].startDate + "</td>" +
            "<td>" + arrlist[i].endDate + "</td>" +
            "<td>" + arrlist[i].status + "</td>" +
            "<td>" + "<button onclick='changelink(" + i + ")' class ='edit disable'>Edit</button>" + "</td>" +
            "<td>" + "<button  class='delete disable' onclick='deleteItem(" + i + ")'>Delete</button>" + "</td>"


        table.appendChild(list);

    }

    
})();

(function(){
    for(let i = 0; i < arrlist.length; i++) {
        if(arrlist[i].status=="Done"){
            document.getElementsByClassName("edit").disabled=true;
        }
    }
})();

function deleteItem(value) {
    arrlist.splice(value, 1);
    localStorage.setItem(locObj.email, JSON.stringify(locObj));
    window.location.reload();
}

function changelink(value) {
    sessionStorage.setItem("index", value);
    window.location.href = "editTask.html";
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

    locObj.todoArr = arrlist;
    localStorage.setItem(locObj.email, JSON.stringify(locObj));
    window.location.reload();
}

function disableEditAndDelete(){
    let arr = document.getElementsByClassName("disable");
    for(let i=0; i<arr.length; i++)
    {
        arr[i].disabled = true;
        arr[i].style.opacity = 0.4;
    }
}

function enableEditAndDelete(){
    let arr = document.getElementsByClassName("disable");
    for(let i=0; i<arr.length; i++)
    {
        arr[i].disabled = false;
        arr[i].style.opacity = 1;
    }
}

function selectCheck() {
    let flag = false;
    let arr = document.getElementsByClassName("check");
    for (let i = 0; i < arrlist.length; i++) {
        if (arr[i].checked == true) {
            flag = true;
            break;
        }
    }

    if (flag) {
        disableEditAndDelete();
    }
    else {
        enableEditAndDelete();
    }

}

function doneSelected() {
    for (let i = 0; i < arrlist.length; i++) {
        if (li[i].checked == true) {
            arrlist[i].status = "Done";
            document.getElementsByClassName("edit").disabled=true;
        }
    }
    localStorage.setItem(locObj.email, JSON.stringify(locObj));
    window.location.reload();
}

function filter() {
    let sel = document.getElementById("category");
    let Cat = sel.options[sel.selectedIndex].text;
    let count = 0;
    let table1 = document.getElementById("table1");


    if (Cat == "Office" || Cat == "Personal" || Cat == "Other") {

        var tableRows = table.getElementsByTagName('tr');
        var rowCount = tableRows.length;

        for (var x = rowCount - 1; x >= 0; x--) {
            table.removeChild(tableRows[x]);
        }

        for (let i = 0; i < arrlist.length; i++) {
            if (arrlist[i].category == Cat) {
                let list = document.createElement("tr");
                list.innerHTML =
                    "<td>" + "<input type='checkbox' onclick='selectCheck()' class='check'>" + "</td>" +
                    "<td>" + arrlist[i].category + "</td>" +
                    "<td>" + arrlist[i].task + "</td>" +
                    "<td>" + arrlist[i].startDate + "</td>" +
                    "<td>" + arrlist[i].endDate + "</td>" +
                    "<td>" + arrlist[i].status + "</td>" +
                    "<td>" + "<button onclick='changelink(" + i + ")' class ='edit disable'>Edit</button>" + "</td>" +
                    "<td>" + "<button class='delete disable' onclick='deleteItem(" + i + ")'>Delete</button>" + "</td>"


                table.appendChild(list);

            }

        }
        // window.location.reload();
    }
    else if (Cat == "All") {
        var tableRows = table.getElementsByTagName('tr');
        var rowCount = tableRows.length;

        for (var x = rowCount - 1; x >= 0; x--) {
            table.removeChild(tableRows[x]);
        }
        loadList();
    }

  

}

function search(value){
    for (let i = 0; i < arrlist.length; i++) {
        if(arrlist[i].task==value.trim()){
            
            var tableRows = table.getElementsByTagName('tr');
            var rowCount = tableRows.length;
    
            for (var x = rowCount - 1; x >= 0; x--) {
                table.removeChild(tableRows[x]);
            }

            let list = document.createElement("tr");
                list.innerHTML =
                    "<td>" + "<input type='checkbox' onclick='selectCheck()' class='check'>" + "</td>" +
                    "<td>" + arrlist[i].category + "</td>" +
                    "<td>" + arrlist[i].task + "</td>" +
                    "<td>" + arrlist[i].startDate + "</td>" +
                    "<td>" + arrlist[i].endDate + "</td>" +
                    "<td>" + arrlist[i].status + "</td>" +
                    "<td>" + "<button onclick='changelink(" + i + ")' class ='edit disable'>Edit</button>" + "</td>" +
                    "<td>" + "<button class='delete disable' onclick='deleteItem(" + i + ")'>Delete</button>" + "</td>"


                table.appendChild(list);
                break;
        }
        else{
            var tableRows = table.getElementsByTagName('tr');
            var rowCount = tableRows.length;
    
            for (var x = rowCount - 1; x >= 0; x--) {
                table.removeChild(tableRows[x]);
            }
            loadList()
        }
    }
}