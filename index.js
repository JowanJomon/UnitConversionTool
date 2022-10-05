const addbtn = document.getElementById("add");
const savebtn = document.getElementById("save");
const deletbtn = document.getElementById("delete");
const links = document.getElementById("links");
let leads = [];
let storageleads = "";

storageleads = JSON.parse(localStorage.getItem("leads"));
if (storageleads) {
  render(storageleads);
}

addbtn.addEventListener("click", add);
deletbtn.addEventListener("click", clearLink);
savebtn.addEventListener("click", saveLnk);

function add() {
  let link = document.getElementById("link").value;
  if (link) {
    leads.push(link);
    render(leads);
    pushLocalStoage();
  } else {
    links.innerHTML = `<li>Please enter a valid link</li>`;
  }
}

function render(x) {
  links.innerHTML = "";
  for (i = 0; i < x.length; i++) {
    links.innerHTML += `<a href="${x[i]}" target="_blank"><li>${x[i]}</li><a>`;
  }
}

function pushLocalStoage() {
  storageleads = JSON.stringify(leads);
  localStorage.setItem("leads", storageleads);
}

function saveLnk() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    leads.push(tabs[0].url);
    render(leads);
    pushLocalStoage();
  });
}
function clearLink() {
  localStorage.clear();
  leads = [];
  links.innerHTML = `<li>Please enter a  link to store</li>`;
}
