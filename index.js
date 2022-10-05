const addbtn = document.getElementById("add");
const savebtn = document.getElementById("save");
const deletbtn = document.getElementById("delete");
const link = document.getElementById("links");
let leads = [];
let storageleads = "";

addbtn.addEventListener("click", add);

function add() {
  let link = document.getElementById("link").value;
  if (link) {
    leads.push(link);
    render();
    pushLocalStoage();
  } else {
    alert("Please Enter Something");
  }
}

function render() {
  link.innerHTML = "";
  for (i = 0; i < leads.length; i++) {
    link.innerHTML += `<li>${leads[i]}</li>`;
  }
}

function pushLocalStoage() {
  storageleads = JSON.stringify(leads);
  localStorage.setItem("leads", storageleads);
}
