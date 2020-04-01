let obj = JSON.parse(sessionStorage.getItem(sessionStorage.key(1)));
let locObj = JSON.parse(localStorage.getItem(sessionStorage.key(1)));
let fillProfile = (function () {
    document.getElementById("fname").value = obj.fname;
    document.getElementById("lname").value = obj.lname;
    document.getElementById("email").value = obj.email;
    document.getElementById("addr").value = obj.addr;
})();

let editbtn = document.getElementById("edit");
let savebtn = document.getElementById("submit");

editbtn.addEventListener("click", function () {
    document.getElementById("fname").readOnly = false;
    document.getElementById("lname").readOnly = false;
    document.getElementById("addr").readOnly = false;
    editbtn.style.display = "none";
    savebtn.style.display = "block";
});

savebtn.addEventListener("click", function () {
    obj.fname = document.getElementById("fname").value;
    obj.lname = document.getElementById("lname").value;
    obj.addr = document.getElementById("addr").value;
    locObj.fname = document.getElementById("fname").value;
    locObj.lname = document.getElementById("lname").value;
    locObj.addr = document.getElementById("addr").value;
    localStorage.setItem(sessionStorage.key(1), JSON.stringify(locObj));
    sessionStorage.setItem(sessionStorage.key(1), JSON.stringify(obj));
    editbtn.style.display = "block";
    savebtn.style.display = "none";
    document.getElementById("fname").readOnly = true;
    document.getElementById("lname").readOnly = true;
    document.getElementById("addr").readOnly = true;
});

function logout() {
    sessionStorage.clear();
}
