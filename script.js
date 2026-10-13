
fetch("https://fakestoreapi.com/products/")
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <img src="${product.image}">
                <h3>${product.title.slice(0, 60)}</h3>
                <p>${product.category}</p>
                <p>${product.description.slice(0, 120)}</p>
            `;

            document.getElementById("product-container")
                .appendChild(card);
        });
    })
    .catch(err => {
        document.getElementById("error").innerText = err.message;
    })
    .finally(() => {
        console.log("API called");
    });

