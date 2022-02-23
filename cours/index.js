//XMLHttpResquest

function reqListener() {
  //   console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

//------
// FETCH
//------

// fetch("mon-url", "object d'obtions")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err));

fetch("data.txt").then((res) => res.text());
//   .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

//--------------------------------------------------
// CRUD => Create (POST), read (GET), updapte (PUT), delete (DELETE)
const init2 = {
  method: "post",
  header: {
    "content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Code Warren",
    message: "yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/post", init2).then(() =>
    console.log("data evoyée")
  );
});

//-----------
// Asynchrome
//-----------

setTimeout(() => {
  // console.log("test");
}, 2000);

// promise

// fetch("monlien").then((res) => res);

// async/await
async function fetchData() {
  await fetch("monlien");
  // attend que le await soit éxécuté avant de faire la suite

  executeFunction();
}

const fetchData2 = async () => {
  await fetch("monlien");
  // attend que le await soit éxécuté avant de faire la suite

  executeFunction();
};

//--------
// LE JSON
//--------

// méthode .json() => méthode qui s'auto-résout en renvoyant le Body de la requète

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // Stringify => convertit en JSON
    let settings = JSON.stringify(data);
    // Parse => transforme json en object js
    // console.log(JSON.parse(settings));
  });

//--------
// Web API
//--------

//CLIENT STORAGE
//--------------

//Local Storage
localStorage.data = "Je stock la data";
// document.body.textContent = localStorage.data;
localStorage.removeItem("data");

const obj = {
  name: "Denis",
  age: 22,
};

// Il faut passer des chaines de caractères
localStorage.user = JSON.stringify(obj);
// console.log(JSON.parse(localStorage.user));

//<Session Storage

sessionStorage.dataSettings = "55px";
// console.log(sessionStorage.dataSettings);
sessionStorage.clear();

//--------
// Cookies
document.cookie = "username=code-warren";

// Bonne pratique
document.cookie =
  "pseudo=CW;path=/;expires=Thu, 31 Dec 2099 23:59:59 GMT;secure;samesite";
