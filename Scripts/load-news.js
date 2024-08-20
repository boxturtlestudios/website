document.addEventListener("DOMContentLoaded", function () {
    fetch('news.json')
        .then(response => response.json())
        .then(newsData => {
            const cardWrapper = document.querySelector(".card-wrapper");

            for (let i = 0; i < newsData.length; i++) {
                const news = newsData[i];
                const card = document.createElement("div");
                card.className = "card";

                const imageDiv = document.createElement("div");
                imageDiv.className = "image";
                imageDiv.style.backgroundImage = `url(${news.image})`;
                card.appendChild(imageDiv);

                const detailsDiv = document.createElement("div");
                detailsDiv.className = "details";

                const dateP = document.createElement("p");
                dateP.className = "date";
                dateP.textContent = news.date;
                detailsDiv.appendChild(dateP);

                const headingH3 = document.createElement("h3");
                headingH3.className = "heading";
                headingH3.textContent = news.title;
                detailsDiv.appendChild(headingH3);

                const descriptionP = document.createElement("p");
                descriptionP.className = "description";
                descriptionP.textContent = news.description;
                detailsDiv.appendChild(descriptionP);

                const linkA = document.createElement("a");
                linkA.href = news.link.url;
                linkA.target = "_blank";
                linkA.className = "link";
                linkA.textContent = news.link.text;

                const arrowSpan = document.createElement("span");
                arrowSpan.className = "material-symbols-outlined";
                arrowSpan.textContent = "arrow_forward";
                linkA.appendChild(arrowSpan);

                detailsDiv.appendChild(linkA);
                card.appendChild(detailsDiv);

                cardWrapper.appendChild(card);
            }
        })
        .catch(error => console.error('Error loading news data:', error));
});