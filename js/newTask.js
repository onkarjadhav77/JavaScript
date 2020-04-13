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

let today = new Date().toISOString().substr(0, 10);
document.getElementById("startDate").setAttribute("min", today);

function setEndDate(value) {
    document.getElementById("endDate").setAttribute("min", value);
    document.getElementById("remDate").setAttribute("min", value);
}

function setRemDate(value) {
    document.getElementById("remDate").setAttribute("max", value);
}

let locObj = JSON.parse(localStorage.getItem(sessionStorage.key(sessionStorage.length - 1)));

let taskObj = {
    task: "",
    category: "",
    startDate: "",
    endDate: "",
    rem: "",
    remDate: "",
    status: "",
    privacy: ""
};

(function () {
    if (locObj.file === undefined) {
        document.getElementById("profile").src = "images/profile.png"
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
    taskObj.privacy = value;
}

function getRem(value) {
    if (value === "Yes") {
        document.getElementById("rem").style.display = "block";
        console.log(value);
    }
    else {
        document.getElementById("rem").style.display = "none";
    }
    taskObj.rem = value;
}

function addTask() {
    taskObj.task = document.getElementById("task").value;
    taskObj.category = document.getElementById("category").value;
    taskObj.startDate = document.getElementById("startDate").value;
    taskObj.endDate = document.getElementById("endDate").value;
    taskObj.remDate = document.getElementById("remDate").value;
    taskObj.status = document.getElementById("status").value;
    locObj.todoArr.push(taskObj);
    localStorage.setItem(locObj.email, JSON.stringify(locObj));
    alert("Record Added Successfully");
}

