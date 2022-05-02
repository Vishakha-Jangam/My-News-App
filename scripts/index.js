// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML =navbar();

import { appendNews ,searchCountryNews} from "./fetch.js";


searchCountryNews("in").then((data)=>{
console.log(data);
 let container = document.getElementById("results");
 appendNews(data,container);
})
let search = (e) =>{
  if(e.key =="Enter"){
    let query =document.getElementById("search_input").value;
        localStorage.setItem("query",JSON.stringify(query));
        window.location.href="search.html"; 
  }
}

document.getElementById("search_input").addEventListener("keydown" , search);

let countries =document.getElementById("sidebar").children;

function CounteryNews(){
    searchCountryNews(this.id).then((data)=>{
        console.log(data);
     let container = document.getElementById("results");
     container.innerHTML=null;
     appendNews(data,container);
    })
}
for(let el of countries){
    el.addEventListener('click',CounteryNews);
}