let today = new Date().toISOString().substr(0, 10);
document.getElementById("startDate").setAttribute("min", today);
document.getElementById("remDate").setAttribute("min", today);


let taskObj={
    task:"",
    category:"",
    startDate:"",
    endDate:"",
    remDate:"",
    status:"",
    privacy:""
}

function addTask(){
    taskObj.task=document.getElementById("task").value;
    taskObj.category=document.getElementById("category").value;
    taskObj.startDate=document.getElementById("startDate").value;
    taskObj.endDate=document.getElementById("endDate").value;
    taskObj.remDate=document.getElementById("remDate").value;
    taskObj.status=document.getElementById("status").value;
    taskObj.privacy=document.getElementById("privacy").value;
}