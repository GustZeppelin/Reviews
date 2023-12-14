image = document.querySelector(".client-img");
clientName = document.querySelector("h1");
product = document.querySelector("h2");
review = document.querySelector("p");
prev = document.querySelector(".prev");
next = document.querySelector(".next");
const counter = 0;

objReviews = [
    {image: "pessoa_1", name:"Joana", product:"Hair Cream", client_review:"1"},
    {image: "pessoa_2", name:"Mary", product:"Body Moisturizer", client_review:"2"},
    {image: "pessoa_3", name:"Will", product:"Perfume", client_review:"3"}
]

clientName.innerText = objReviews[counter]["name"]
product.innerText = objReviews[counter]["product"]
review.innerText = objReviews[counter]["client_review"]



// next.addEventListener("click", () => {
//     if (counter = 2) {
//         console.log(counter);
//         counter = 0;
//     } else {
//         counter += 1;
//     }

//     }) 

    
