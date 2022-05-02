// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML =navbar();


import {news_append } from "./fetch.js";


let search = (e) =>{
    if(e.key =="Enter"){
      let query =document.getElementById("search_input").value;
          localStorage.setItem("query",JSON.stringify(query));
          window.location.href="search.html"; 
    }
  }
  
  document.getElementById("search_input").addEventListener("keydown" , search);
let news = JSON.parse(localStorage.getItem("news"));
console.log(news);

let container =document.getElementById("detailed_news");

news_append(news,container);