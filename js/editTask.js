let locObj = JSON.parse(localStorage.getItem(sessionStorage.key(sessionStorage.length - 1)));
let index = sessionStorage.getItem("index");
let arrlist = locObj.todoArr[index];

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

    document.getElementById("profile").src = locObj.file;
})();

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
    arrlist.status = document.getElementById("status").value;
    localStorage.setItem(locObj.email, JSON.stringify(locObj));
    alert("Edited Successfully");
}
