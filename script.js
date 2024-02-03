const API_KEY = "41facde16a8b408796a01d97936b8c7b";
axios(`https://newsapi.org/v2/everything?q=Islam&apiKey=${API_KEY}`)
    .then((res) => {
        const news = document.getElementById("news");
        const articles = res.data.articles;
        for (let i = 0; i < articles.length; i++) {
            const { title, description, source, publishedAt, urlToImage, url } = articles[i];
            const { name } = source;
            news.innerHTML += `
            <div class="card">
            <div class="card-header">
            <div id="authorName">
            ${name}
            </div>
            <div id="publishedDate">
            ${publishedAt}
            </div>
            </div>
            <div class="card-body">
            <img src="${urlToImage}" class="card-img-top" alt="...">
            <h5 class="card-title">${title.slice(0, 20)}...</h5>
            <p class="card-text">${description.slice(0, 100)}...<p>
            <button class="detailsbtn btn"><a href="${url}" target="_blank" class="details">Goto Main Page</a></button>
            </div>
            </div>
            `
        }
    });

const giveData = () => {
    event.preventDefault();
    const API_KEY1 = "41facde16a8b408796a01d97936b8c7b";
    axios(`https://newsapi.org/v2/everything?q=Islam&apiKey=${API_KEY1}`)
        .then((res) => {
            const news = document.getElementById("news");
            const articles = res.data.articles;
            for (let i = 0; i < articles.length; i++) {
                const { title, description, source, publishedAt, urlToImage, url } = articles[i];
                const { name } = source;
                news.innerHTML = "";
            }
        });
    const searchValue = document.querySelector("#searchNews").value;
    if (searchValue === "") {
        alert("Please Enter the Value");
        return;
    }

    const API_KEY = "41facde16a8b408796a01d97936b8c7b";
    axios(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${API_KEY}`)
        .then((res) => {
            const news = document.getElementById("news");
            const articles = res.data.articles;
            for (let i = 0; i < articles.length; i++) {
                const { title, description, source, publishedAt, urlToImage, url } = articles[i];
                const { name } = source;
                news.innerHTML += `
            <div class="card">
            <div class="card-header">
            <div id="authorName">
            ${name}
            </div>
            <div id="publishedDate">
            ${publishedAt}
            </div>
            </div>
            <div class="card-body">
            <img src="${urlToImage}" class="card-img-top" alt="...">
            <h5 class="card-title">${title.slice(0, 20)}...</h5>
            <p class="card-text">${description.slice(0, 100)}...<p>
            <button class="detailsbtn btn"><a href="${url}" target="_blank" class="details">Goto Main Page</a></button>
            </div>
            </div>
            `
            }
        });
}

//Search Via Search Button
const getData = () => {
    giveData();
}

pakistanButton.addEventListener('click', function () {
    const API_KEY1 = "41facde16a8b408796a01d97936b8c7b";
    axios(`https://newsapi.org/v2/everything?q=Islam&apiKey=${API_KEY1}`)
        .then((res) => {
            const news = document.getElementById("news");
            const articles = res.data.articles;
            for (let i = 0; i < articles.length; i++) {
                const { title, description, source, publishedAt, urlToImage, url } = articles[i];
                const { name } = source;
                news.innerHTML = "";
            }
        });
    const pk = "Pakistan";
    const API_KEY = "41facde16a8b408796a01d97936b8c7b";
    axios(`https://newsapi.org/v2/everything?q=${pk}&apiKey=${API_KEY}`)
        .then((res) => {
            const news = document.getElementById("news");
            const articles = res.data.articles;
            for (let i = 0; i < articles.length; i++) {
                const { title, description, source, publishedAt, urlToImage, url } = articles[i];
                const { name } = source;
                news.innerHTML += `
            <div class="card">
            <div class="card-header">
            <div id="authorName">
            ${name}
            </div>
            <div id="publishedDate">
            ${publishedAt}
            </div>
            </div>
            <div class="card-body">
            <img src="${urlToImage}" class="card-img-top" alt="...">
            <h5 class="card-title">${title.slice(0, 20)}...</h5>
            <p class="card-text">${description.slice(0, 100)}...<p>
            <button class="detailsbtn btn"><a href="${url}" target="_blank" class="details">Goto Main Page</a></button>
            </div>
            </div>
            `
            }
        });
});

gamesButton.addEventListener('click', function () {
    const API_KEY1 = "41facde16a8b408796a01d97936b8c7b";
    axios(`https://newsapi.org/v2/everything?q=Islam&apiKey=${API_KEY1}`)
        .then((res) => {
            const news = document.getElementById("news");
            const articles = res.data.articles;
            for (let i = 0; i < articles.length; i++) {
                const { title, description, source, publishedAt, urlToImage, url } = articles[i];
                const { name } = source;
                news.innerHTML = "";
            }
        });
    const gm = "Games"
    const API_KEY = "41facde16a8b408796a01d97936b8c7b";
    axios(`https://newsapi.org/v2/everything?q=${gm}&apiKey=${API_KEY}`)
        .then((res) => {
            const news = document.getElementById("news");
            const articles = res.data.articles;
            for (let i = 0; i < articles.length; i++) {
                const { title, description, source, publishedAt, urlToImage, url } = articles[i];
                const { name } = source;
                news.innerHTML += `
             <div class="card">
             <div class="card-header">
             <div id="authorName">
             ${name}
             </div>
             <div id="publishedDate">
             ${publishedAt}
             </div>
             </div>
             <div class="card-body">
             <img src="${urlToImage}" class="card-img-top" alt="...">
             <h5 class="card-title">${title.slice(0, 20)}...</h5>
             <p class="card-text">${description.slice(0, 100)}...<p>
             <button class="detailsbtn btn"><a href="${url}" target="_blank" class="details">Goto Main Page</a></button>
             </div>
             </div>
             `
            }
        });
})

ChatgptButton.addEventListener('click', function () {
    const API_KEY1 = "41facde16a8b408796a01d97936b8c7b";
    axios(`https://newsapi.org/v2/everything?q=Islam&apiKey=${API_KEY1}`)
        .then((res) => {
            const news = document.getElementById("news");
            const articles = res.data.articles;
            for (let i = 0; i < articles.length; i++) {
                const { title, description, source, publishedAt, urlToImage, url } = articles[i];
                const { name } = source;
                news.innerHTML = "";
            }
        });
    const cg = "Chat Gpt"
    const API_KEY = "41facde16a8b408796a01d97936b8c7b";
    axios(`https://newsapi.org/v2/everything?q=${cg}&apiKey=${API_KEY}`)
        .then((res) => {
            const news = document.getElementById("news");
            const articles = res.data.articles;
            for (let i = 0; i < articles.length; i++) {
                const { title, description, source, publishedAt, urlToImage, url } = articles[i];
                const { name } = source;
                news.innerHTML += `
             <div class="card">
             <div class="card-header">
             <div id="authorName">
             ${name}
             </div>
             <div id="publishedDate">
             ${publishedAt}
             </div>
             </div>
             <div class="card-body">
             <img src="${urlToImage}" class="card-img-top" alt="...">
             <h5 class="card-title">${title.slice(0, 20)}...</h5>
             <p class="card-text">${description.slice(0, 100)}...<p>
             <button class="detailsbtn btn"><a href="${url}" target="_blank" class="details">Goto Main Page</a></button>
             </div>
             </div>
             `
            }
        });
})

AiButton.addEventListener('click', function () {
    const API_KEY1 = "41facde16a8b408796a01d97936b8c7b";
    axios(`https://newsapi.org/v2/everything?q=Islam&apiKey=${API_KEY1}`)
        .then((res) => {
            const news = document.getElementById("news");
            const articles = res.data.articles;
            for (let i = 0; i < articles.length; i++) {
                const { title, description, source, publishedAt, urlToImage, url } = articles[i];
                const { name } = source;
                news.innerHTML = "";
            }
        });
    const ai = "Artificial Intelligence"
    const API_KEY = "41facde16a8b408796a01d97936b8c7b";
    axios(`https://newsapi.org/v2/everything?q=${ai}&apiKey=${API_KEY}`)
        .then((res) => {
            const news = document.getElementById("news");
            const articles = res.data.articles;
            for (let i = 0; i < articles.length; i++) {
                const { title, description, source, publishedAt, urlToImage, url } = articles[i];
                const { name } = source;
                news.innerHTML += `
             <div class="card">
             <div class="card-header">
             <div id="authorName">
             ${name}
             </div>
             <div id="publishedDate">
             ${publishedAt}
             </div>
             </div>
             <div class="card-body">
             <img src="${urlToImage}" class="card-img-top" alt="...">
             <h5 class="card-title">${title.slice(0, 20)}...</h5>
             <p class="card-text">${description.slice(0, 100)}...<p>
             <button class="detailsbtn btn"><a href="${url}" target="_blank" class="details">Goto Main Page</a></button>
             </div>
             </div>
             `
            }
        });
})

//Registered Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
    navigator.serviceWorker.ready.then((swReg) => {
        var options = {
            message: "This is message body.",
            icon: "/images/icons/icon-512x512.png",
        }
        swReg.showNotification("This is message title.", options);
    })
}