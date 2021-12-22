console.log("This is my index js file");

// Initialize the news api parameters
let source = "bbc-news";
let apiKey = "78b45085752c4e7aaa51f2e603be5b64";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=78b45085752c4e7aaa51f2e603be5b64`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;

    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element,index){
        //onsole.log(element,index)


      let news = `     <div class="card">
                            <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                               <b> BREAKING NEWS <span class="badge badge-secondary"> ${index+1}</span></b> ${element['title']}
                                </button>
                            </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body">
                            ${element['description']}. <a href="${element ['url']}" target="_blank" >Click for full article</a>
                                
                            </div>
                            </div>
                        </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("some error has occured bro");
  }
};
xhr.send();
