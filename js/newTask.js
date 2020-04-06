function checkAccess(){
    if(localStorage.getItem(sessionStorage.key(sessionStorage.length-1))== null)
    {
        document.getElementsByTagName("body").innerHTML = "You Don't Have Access to this page...!";
        window.location.href="login.html";
        return false;
    }
    else{
        return true;
    }
}

let today = new Date().toISOString().substr(0, 10);
document.getElementById("startDate").setAttribute("min", today);
document.getElementById("remDate").setAttribute("min", today);

function setEndDate(value){
    document.getElementById("endDate").setAttribute("min", value);
}

let locObj = JSON.parse(localStorage.getItem(sessionStorage.key(sessionStorage.length-1)));

let taskObj={
    task:"",
    category:"",
    startDate:"",
    endDate:"",
    rem:"",
    remDate:"",
    status:"",
    privacy:""
};

(function(){
    document.getElementById("profile").src=locObj.file;
})();

function getRadio(value) {
    taskObj.privacy = value;
}

function getRem(value){
    if(value==="Yes"){
        document.getElementById("rem").style.display="block";
    }
    else{
        document.getElementById("rem").style.display="none";
    }
    taskObj.rem = value;
}

function addTask(){
    taskObj.task=document.getElementById("task").value;
    taskObj.category=document.getElementById("category").value;
    taskObj.startDate=document.getElementById("startDate").value;
    taskObj.endDate=document.getElementById("endDate").value;
    taskObj.remDate=document.getElementById("remDate").value;
    taskObj.status=document.getElementById("status").value;
    locObj.todoArr.push(taskObj);
    localStorage.setItem(locObj.email,JSON.stringify(locObj));
    alert("Record Added Successfully");
}

function checkRadio(value){
    if(value == 1){
        document.getElementById("yesRadio").checked = true;
    }else if(value == 2){
        document.getElementById("noRadio").checked = true;
    }
    else if(value == 3){
        document.getElementById("pubRadio").checked = true;
    }
    else if(value == 4){
        document.getElementById("priRadio").checked = true;
    }
}