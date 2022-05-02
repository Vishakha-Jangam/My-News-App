let searchNews =async (query) =>{
    try{
        let res =await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        let data =await res.json();
       // console.log(data.articles);
       let result=data.articles;
       return result;

    }catch(err){
        console.log(err);
    }
}


let appendNews = (data,container) =>{
    data.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute("class","news")

        let img =document.createElement("img");
        img.src = el.urlToImage;


        let div2 =document.createElement("div");

        let head= document.createElement("h3");
        head.innerText=el.title;
        
        let info =document.createElement("p");
        info.innerText =el.content;
         div2.append(head,info);
        div.append(img,div2);
        div.style.cursor="pointer";
        div.addEventListener("click",function(){
            localStorage.setItem("news",JSON.stringify(el));
            window.location.href="news.html";
        })
        container.append(div);

    });
}

let searchCountryNews = async(country) =>{
    try{
        let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`);
        let data =await res.json();
       // console.log(data.articles);
       let result=data.articles;
       return result;

    }catch(err){
        console.log(err);
    }
}

let news_append = (data,container)=>{
    let div = document.createElement("div");
    div.style.width="600px"
    div.style.margin=" 50px auto"
        let img =document.createElement("img");
        img.style.width="100%"
        img.style.height="400px"
        img.src = data.urlToImage;


        let div2 =document.createElement("div");

        let head= document.createElement("h3");
        head.innerText=data.title;
        
        let info =document.createElement("p");
        info.innerText =data.content;
        div2.append(head,info);
        div.append(img,div2);
        container.append(div);

}
export {searchNews , appendNews,searchCountryNews,news_append};