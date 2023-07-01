const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = event.target.title.value
    let author = event.target.author.value
    let price = event.target.price.value
    let image = event.target.image.value
    let inStock = event.target.inStock.value
    

    console.log(title);
    console.log(author);
    console.log(price);
    console.log(image);
    console.log(inStock);

    generateBookInfo(title, author, price, image, inStock)

    form.reset();
})

function bookTemplate(title, author, price, image, inStock) {
    const article = document.createElement("article");

    if (title) {
        const h2 = document.createElement("h2");
        h2.textContent += title
        article.append(h2);
    }

    if (author) {
        const h3 = document.createElement("h3");
        h3.textContent += author
        article.append(h3);
    }

    if (price) {
        const p = document.createElement("p");
        p.textContent += price
        article.append(p);
    }

    if (image) {
        const img = document.createElement("img");
        img.src += image
        article.append(img);
    }

    if (inStock) {
        const div = document.createElement("div");
        div.textContent += ""
        article.append(div);
    }

    const remove = document.createElement("button")
    remove.innerText = "Remove"
    console.log(remove)
    article.append(remove)

    remove.addEventListener("click", (event) => {
        article.remove();
    })

    return article;
}

function generateBookInfo(title, author, price, inStock, image) {

const article = bookTemplate(title, author, price, inStock, image);

const li = document.querySelector("article");
li.append(article);


}

