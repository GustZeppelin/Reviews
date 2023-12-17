image = document.querySelector(".client-img");
clientName = document.querySelector("h1");
product = document.querySelector("h2");
review = document.querySelector("p");
prev = document.querySelector(".prev");
next = document.querySelector(".next");
let counter = 0;

objReviews = [
    {image: "image/Pessoa_1.png", name:"Joana", product:"Hair Cream", client_review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati error esse reprehenderit incidunt itaque est, fugiat saepe? Aliquam vitae ab sed incidunt numquam voluptatibus, nobis ea qui at corrupti."},
    {image: "image/Pessoa_2.png", name:"Mary", product:"Body Moisturizer", client_review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati error esse."},
    {image: "image/Pessoa_3.png", name:"Will", product:"Perfume", client_review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati error esse reprehenderit incidunt itaque est, fugiat saepe? Aliquam vitae ab sed incidunt."}
]

clientName.innerText = objReviews[counter]["name"]
product.innerText = objReviews[counter]["product"]
review.innerText = objReviews[counter]["client_review"]
image.style.backgroundImage = 'url('+ objReviews[counter]['image'] +')'



next.addEventListener("click", () => {
    console.log(counter)
    
    switch (counter) {
        case 0:
            counter ++
            clientName.innerText = objReviews[counter]["name"]
            product.innerText = objReviews[counter]["product"]
            review.innerText = objReviews[counter]["client_review"]
            image.style.backgroundImage = 'url('+ objReviews[counter]['image'] +')'

            break;
        case 1:
            counter ++
            clientName.innerText = objReviews[counter]["name"]
            product.innerText = objReviews[counter]["product"]
            review.innerText = objReviews[counter]["client_review"]
            image.style.backgroundImage = 'url('+ objReviews[counter]['image'] +')'

            break;
        case 2:
            counter = 0
            clientName.innerText = objReviews[counter]["name"]
            product.innerText = objReviews[counter]["product"]
            review.innerText = objReviews[counter]["client_review"]
            image.style.backgroundImage = 'url('+ objReviews[counter]['image'] +')'

            break;
    
        default:
            break;
    }


    }) 


next.addEventListener("click", () => {
    
    switch (counter) {
        case 0:
            counter ++
            clientName.innerText = objReviews[counter]["name"]
            product.innerText = objReviews[counter]["product"]
            review.innerText = objReviews[counter]["client_review"]
            image.style.backgroundImage = 'url('+ objReviews[counter]['image'] +')'

            break;
        case 1:
            counter ++
            clientName.innerText = objReviews[counter]["name"]
            product.innerText = objReviews[counter]["product"]
            review.innerText = objReviews[counter]["client_review"]
            image.style.backgroundImage = 'url('+ objReviews[counter]['image'] +')'
            break;
        case 2:
            counter = 0
            clientName.innerText = objReviews[counter]["name"]
            product.innerText = objReviews[counter]["product"]
            review.innerText = objReviews[counter]["client_review"]
            image.style.backgroundImage = 'url('+ objReviews[counter]['image'] +')'
            break;
    
        default:
            break;
    }


    }) 


prev.addEventListener("click", () => {
        
        switch (counter) {
        case 0:
            counter = 2
            clientName.innerText = objReviews[counter]["name"]
            product.innerText = objReviews[counter]["product"]
            review.innerText = objReviews[counter]["client_review"]
            image.style.backgroundImage = 'url('+ objReviews[counter]['image'] +')'
            break;
        case 1:
            counter --
            clientName.innerText = objReviews[counter]["name"]
            product.innerText = objReviews[counter]["product"]
            review.innerText = objReviews[counter]["client_review"]
            image.style.backgroundImage = 'url('+ objReviews[counter]['image'] +')'
            break;
        case 2:
            counter --
            clientName.innerText = objReviews[counter]["name"]
            product.innerText = objReviews[counter]["product"]
            review.innerText = objReviews[counter]["client_review"]
            image.style.backgroundImage = 'url('+ objReviews[counter]['image'] +')'
            break;
    
        default:
            break;
    }
    
    
    }) 



    
