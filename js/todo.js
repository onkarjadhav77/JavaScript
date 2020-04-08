function checkAccess() {
    if (localStorage.getItem(sessionStorage.key(sessionStorage.length - 1)) == null) {
        document.getElementsByTagName("body").innerHTML = "You Don't Have Access to this page...!";
        window.location.href = "login.html";
        return false;
    }
    else {
        return true;
    }
}

function logout() {
    sessionStorage.clear();
}

let locObj = JSON.parse(localStorage.getItem(sessionStorage.key(sessionStorage.length - 1)));
let arrlist = locObj.todoArr;
let table = document.getElementById("table");
let check = document.getElementById("check");
let li = document.getElementsByClassName("check");

(loadList = function () {

    document.getElementById("welcome").innerHTML="Welcome "+" "+locObj.fname+" ...!";

    if (locObj.file === undefined) {
        document.getElementById("profile").src = "images/profile.png"
    } else {
        document.getElementById("profile").src = locObj.file;
    }

    if (arrlist.length == 0) {
        let list = document.createElement("tr");
        list.innerHTML = "<td colspan='8'>No Record Found</td>";
        table.appendChild(list);
    }

    for (let i = 0; i < arrlist.length; i++) {
        let list = document.createElement("tr");
        if (arrlist[i].status === "Done") {
            list.innerHTML =
                "<td>" + "<input type='checkbox' onclick='selectCheck()' class='check'>" + "</td>" +
                "<td>" + arrlist[i].category + "</td>" +
                "<td>" + arrlist[i].task + "</td>" +
                "<td>" + arrlist[i].startDate + "</td>" +
                "<td>" + arrlist[i].endDate + "</td>" +
                "<td>" + arrlist[i].status + "</td>" +
                "<td>" + "<button onclick='changelink(" + i + ")' style='opacity:0.4' disabled>Edit</button>" + "</td>" +
                "<td>" + "<button  class='delete disable' onclick='return deleteItem(" + i + ")'>Delete</button>" + "</td>"


            table.appendChild(list);
        }

        else if (arrlist[i].status === "Pending") {
            list.innerHTML =
                "<td>" + "<input type='checkbox' onclick='selectCheck()' class='check'>" + "</td>" +
                "<td>" + arrlist[i].category + "</td>" +
                "<td>" + arrlist[i].task + "</td>" +
                "<td>" + arrlist[i].startDate + "</td>" +
                "<td>" + arrlist[i].endDate + "</td>" +
                "<td>" + arrlist[i].status + "</td>" +
                "<td>" + "<button onclick='changelink(" + i + ")' class ='edit disable'>Edit</button>" + "</td>" +
                "<td>" + "<button  class='delete disable' onclick='return deleteItem(" + i + ")'>Delete</button>" + "</td>"


            table.appendChild(list);
        }
    }
})();

function deleteItem(value) {
    if (confirm("Are You Sure?")) {
        arrlist.splice(value, 1);
    } else {
        return false;
    }

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
            disableEditAndDelete();
        }
        else {
            li[i].checked = false;
            enableEditAndDelete()
        }


    }
}

function deleteSelected() {

    if (confirm("Are You Sure?")) {
        for (let i = 0; i < arrlist.length; i++) {
            if (li[i].checked == true) {
                delete arrlist[i];
            }
        }
        arrlist = arrlist.filter(function (element) {
            return element !== null;
        });

    } else {
        window.location.reload();
        return false;
    }

    locObj.todoArr = arrlist;
    localStorage.setItem(locObj.email, JSON.stringify(locObj));
    window.location.reload();
}

function disableEditAndDelete() {
    let arr = document.getElementsByClassName("disable");
    for (let i = 0; i < arr.length; i++) {
        arr[i].disabled = true;
        arr[i].style.opacity = 0.4;
    }
    document.getElementById("delbtn").disabled = false;
    document.getElementById("donebtn").disabled = false;
    document.getElementById("delbtn").style.opacity = 1;
    document.getElementById("donebtn").style.opacity = 1;
}

function enableEditAndDelete() {
    let arr = document.getElementsByClassName("disable");
    for (let i = 0; i < arr.length; i++) {
        arr[i].disabled = false;
        arr[i].style.opacity = 1;
    }
    document.getElementById("delbtn").disabled = true;
    document.getElementById("donebtn").disabled = true;
    document.getElementById("delbtn").style.opacity = 0.4;
    document.getElementById("donebtn").style.opacity = 0.4;
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
    if (confirm("Once done, Can not undone, Continue?")) {
        for (let i = 0; i < arrlist.length; i++) {
            if (li[i].checked == true) {
                arrlist[i].status = "Done";
                document.getElementsByClassName("edit").disabled = true;
            }
        }
        localStorage.setItem(locObj.email, JSON.stringify(locObj));
        window.location.reload();
    } else {
        window.location.reload();
        return false;
    }

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
            else if (arrlist[i].category != Cat) {
                let list = document.createElement("tr");
                list.innerHTML = "<td colspan='8'>No Record Found</td>";
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

function search(value) {
    for (let i = 0; i < arrlist.length; i++) {
        if (arrlist[i].task.toLowerCase() == value.toLowerCase()) {

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
        else {
            var tableRows = table.getElementsByTagName('tr');
            var rowCount = tableRows.length;

            for (var x = rowCount - 1; x >= 0; x--) {
                table.removeChild(tableRows[x]);
            }
            loadList()
        }
    }
}