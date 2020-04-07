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

let locObj = JSON.parse(localStorage.getItem(sessionStorage.key(sessionStorage.length - 1)));
let index = sessionStorage.getItem("index");
let arrlist = locObj.todoArr[index];
let today = new Date().toISOString().substr(0, 10);
document.getElementById("startDate").setAttribute("min", today);
document.getElementById("remDate").setAttribute("min", arrlist.startDate);
document.getElementById("endDate").setAttribute("min", arrlist.startDate);
document.getElementById("remDate").setAttribute("max", arrlist.endDate);

function setEndDate(value) {
    document.getElementById("endDate").setAttribute("min", value);
}

function setRemDate(value) {
    document.getElementById("remDate").setAttribute("max", value);
}

(function () {
    document.getElementById("task").value = arrlist.task;
    document.getElementById("category").value = arrlist.category;
    document.getElementById("startDate").value = arrlist.startDate;
    document.getElementById("endDate").value = arrlist.endDate;
    document.getElementById("remDate").value = arrlist.remDate;
    if (arrlist.privacy === "Public") {
        document.getElementById("pubRadio").checked = true;
    } else {
        document.getElementById("priRadio").checked = true;
    }
    if (arrlist.rem === "Yes") {
        document.getElementById("yesRadio").checked = true;
        document.getElementById("rem").style.display = "block";
    } else {
        document.getElementById("noRadio").checked = true;
    }

    if (locObj.file === undefined) {
        document.getElementById("profile").src = "../images/profile.png"
    } else {
        document.getElementById("profile").src = locObj.file;
    }
})();

function checkRadio(value) {
    if (value == "Yes") {
        document.getElementById("yesRadio").checked = true;
        getRem(value);
    } else if (value == "No") {
        document.getElementById("noRadio").checked = true;
        getRem(value);
    }
    else if (value == "Public") {
        document.getElementById("pubRadio").checked = true;
        getRadio(value);
    }
    else if (value == "Private") {
        document.getElementById("priRadio").checked = true;
        getRadio(value);
    }
}

function getRadio(value) {
    arrlist.privacy = value;
}

function getRem(value) {
    if (value === "Yes") {
        document.getElementById("rem").style.display = "block";
    }
    else {
        document.getElementById("rem").style.display = "none";
    }
    arrlist.rem = value;
}

function edit() {

    arrlist.task = document.getElementById("task").value;
    arrlist.category = document.getElementById("category").value;
    arrlist.startDate = document.getElementById("startDate").value;
    arrlist.endDate = document.getElementById("endDate").value;
    arrlist.remDate = document.getElementById("remDate").value;
    document.getElementById("status").value = arrlist.status;
    localStorage.setItem(locObj.email, JSON.stringify(locObj));
    alert("Edited Successfully");
}


