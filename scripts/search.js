// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML =navbar();

import { searchNews ,appendNews } from "./fetch.js";

let query = JSON.parse(localStorage.getItem("query"));
searchNews(query).then((data) =>{
    console.log(data);

    let container = document.getElementById("results");
    container.innerHTML=null;
    appendNews(data,container);
   });

let search = (e) =>{
  if(e.key =="Enter"){
    let query = document.getElementById("search_input").value;
    searchNews(query).then((data) =>{
     console.log(data);

     let container = document.getElementById("results");
     container.innerHTML=null;
     appendNews(data,container);
    })
  }
}

document.getElementById("search_input").addEventListener("keydown" , search);