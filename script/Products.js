
// current year footer
CurrentYear= new Date (Date.now());
let year = CurrentYear.getFullYear();
document.getElementById("CurrYear").innerHTML = year;




//  - sample data on a array saved in local storage

let Products =  JSON.parse(localStorage.getItem("products")) ? 
JSON.parse(localStorage.getItem("products")) :
localStorage.setItem("products", 
JSON.stringify( [{
              "id" : 1,
              "imgUrl":"https://i.postimg.cc/1tqXNmtz/download-2.webp",
               "make": "iPhone",
                "amount":"R" + 11000,
                "Description": "iPhone11"},
     {
        "id": 2,
        "imgUrl":"https://i.postimg.cc/d0c80xnr/download-1.webp",
        "make" : "iPhone",
        "amount" : "R" +20000,
        "Description" : "iPhone14" },
        {
            "id" : 3, 
            "imgUrl":"https://i.postimg.cc/PJqtQdfZ/download-1.webp",
            "make": "iPhone",
            "amount":"R" + 8000,
            "Description": "iPhoneX"},

         {
            "id ":4,
            "imgUrl":"https://i.postimg.cc/x8vsyjSR/shopping-12.webp",
            "make": "iPhone",
            "amount":"R" + 14000,
            "Description": "iPhone12"},
            {
                "id": 5,
                "imgUrl":"https://i.postimg.cc/HWbzcLzc/images-3.jpg",
                "make" : "iPhone",
                "amount" :"R" + 23000,
                 "Description" : "iPhone15"
               },
                {
                    "id":6,
                    "imgUrl": "https://i.postimg.cc/BbBgPhx7/download-3.webp",
                    "make" : "iPhone",
                    "amount" :"R" + 17000,
                    "Description" : "iPhone13"
                    
                }   
            ] 
                
                

    
));

let items = document.querySelector("[data-items]");
items.innerHtml = ""
if(Products){
// Loop through products array
Products.forEach(Products => {
    items.innerHTML += `
  
    <div class="card mt-5 mb-5 m-4 p-2 text-center">
  <img src="${Products.imgUrl}" class="card-img-top w-75 align-self-center img-fluid" alt="${Products.id}">
  <div class="card-body">
    <h5 class="card-title ">${Products.Description}</h5>
    <h3 class="card-text mt-4"> ${Products.amount}</h3>
    <a href="#" class="btn btn-dark mt-5">Add to Cart</a>
  </div>
</div>


    `

    
});
}

// Search Product by name
