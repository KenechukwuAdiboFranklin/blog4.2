const getAllProducts = async () => {
  const container = document.querySelector("#news-cards");
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2025-07-29&to=2025-07-29&sortBy=popularity&apiKey=009860c72acc49a68a5d5024d0b54150"
  );
  const data = await response.json();

  data.articles.slice(0, 8).forEach((post) => {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = post.urlToImage || "/pics/fallback.jpg";
    image.alt = "Post Image";

    const content = document.createElement("div");
    content.className = "card-content";

    const title = document.createElement("h3");
    title.textContent = post.title;

    const toggle = document.createElement("button");
    toggle.className = "toggle-btn";
    toggle.textContent = "Show Post";

    const text = document.createElement("div");
    text.className = "instructions";
    text.style.display = "none";
    text.innerHTML = `<p>${post.content || post.description || "No content available."}</p>`;

    toggle.addEventListener("click", () => {
      const isVisible = text.style.display === "block";
      text.style.display = isVisible ? "none" : "block";
      toggle.textContent = isVisible ? "Show Post" : "Hide Post";
    });

    content.appendChild(title);
    content.appendChild(toggle);
    content.appendChild(text);

    card.appendChild(image);
    card.appendChild(content);
    container.appendChild(card);
  });
};

window.addEventListener("DOMContentLoaded", getAllProducts);
