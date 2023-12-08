// current year footer
CurrentYear = new Date(Date.now());
let year = CurrentYear.getFullYear();
document.getElementById("CurrYear").innerHTML = year;

//  - sample data on a array saved in local storage

let Products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem(
      "products",
      JSON.stringify([
        {
          id: 1,
          imgUrl: "https://i.postimg.cc/1tqXNmtz/download-2.webp",
          make: "iPhone",
          amount: 11000,
          Description: "iPhone 11",
        },
        {
          id: 2,
          imgUrl: "https://i.postimg.cc/d0c80xnr/download-1.webp",
          make: "iPhone",
          amount: 20000,
          Description: "iPhone 14",
        },
        {
          id: 3,
          imgUrl: "https://i.postimg.cc/PJqtQdfZ/download-1.webp",
          make: "iPhone",
          amount: 9000,
          Description: "iPhone X",
        },

        {
          id: 4,
          imgUrl: "https://i.postimg.cc/x8vsyjSR/shopping-12.webp",
          make: "iPhone",
          amount: 14000,
          Description: "iPhone 12",
        },
        {
          id: 5,
          imgUrl: "https://i.postimg.cc/HWbzcLzc/images-3.jpg",
          make: "iPhone",
          amount: 23000,
          Description: "iPhone 15",
        },
        {
          id: 6,
          imgUrl: "https://i.postimg.cc/BbBgPhx7/download-3.webp",
          make: "iPhone",
          amount: 17000,
          Description: "iPhone 13",
        },
        {
          id: 7,
          imgUrl: "https://i.postimg.cc/DZsCLQTX/images-5.jpg",
          make: "iPhone",
          amount: 2200,
          Description: "iPhone 6",
        },
        {
          id: 8,
          imgUrl: "https://i.postimg.cc/N0RXsK4D/download-25.jpg",
          make: "iPhone",
          amount: 4000,
          Description: "iPhone 7",
        },
        {
          id: 9,
          imgUrl: "https://i.postimg.cc/sxMD28zz/download-26.jpg",
          make: "iPhone",
          amount: 5900,
          Description: "iPhone 8",
        },
        {
          id: 10,
          imgUrl: "https://i.postimg.cc/fTxjWgRm/download-27.jpg",
          make: "iPhone",
          amount: 7000,
          Description: "iPhone 9",
        },

        {
          id: 11,
          imgUrl: "https://i.postimg.cc/15rqkVLw/download-28.jpg",
          make: "iPhone",
          amount: 8599,
          Description: "iPhone XR",
        },
        {
          id: 12,
          imgUrl: "https://i.postimg.cc/6qYB0Km2/download-29.jpg",
          make: "iPhone",
          amount: 11900,
          Description: "iPhone XS",
        },
      ])
    );

// Display Data
let items = document.querySelector("[data-items]");
items.innerHtml = "";
if (Products) {
  // Loop through products array
  Products.forEach((Product) => {
    items.innerHTML += `
  
    <div class="card mx-4 mt-3   text-center" id="ProductCard" >
  <img src="${
    Product.imgUrl
  }" class="card-img-top  align-self-center img-fluid" alt="${Product.id}">
  <div class="card-body">
    <h5 class="card-title ">${Product.Description}</h5>
    <h3 class="card-text mt-2">R ${Product.amount}</h3>
    <a href="#" class="btn btn-dark mt-2" id="add-btn" onclick='addToCart(${JSON.stringify(
      Product
    )})'>Add to Cart</a>
  </div>
</div>


    `;
  });
}

// Search Product by name
let searchInput = document.getElementById("data-search");
searchInput.addEventListener("keyup", () => {
  let searchItems = Products.filter((Products) => {
    return Products.Description.toLowerCase().includes(
      searchInput.value.toLowerCase()
    );
  });
  if (searchItems) {
    items.innerHTML = "";
    searchItems.forEach((Product) => {
      items.innerHTML += `
  
    <div class="card mx-4 mt-3 text-center" id="Product-Card" >
  <img src="${
    Product.imgUrl
  }" class="card-img-top  align-self-center img-fluid" alt="${Product.id}">
  <div class="card-body">
    <h5 class="card-title ">${Product.Description}</h5>
    <h3 class="card-text mt-2">R ${Product.amount}</h3>
    <a href="#" class="btn btn-dark " id="add-btn" onclick='addToCart(${JSON.stringify(
      Product
    )})'>Add to Cart</a>
  </div>
</div>


    `;
    });
  } 
});

// Sort by Product Price
let sortBtn = document.getElementById("sort-btn");
sortBtn.addEventListener("click", () => {
  let sortedItems = Products.sort((arg1, arg2) => {
    if (+arg1.amount < +arg2.amount) {
      return -1;
    } else if (arg1.amount > arg2.amount) {
      return 1;
    } else {
      return 0;
    }
  });
  if (sortedItems) {
    items.innerHTML = " ";
    sortedItems.forEach((sortedProducts) => {
      items.innerHTML += `
  
     <div class="card mx-4 mt-3   text-center" id="ProductCard" >
   <img src="${
     sortedProducts.imgUrl
   }" class="card-img-top  align-self-center img-fluid" alt="${
        sortedProducts.id
      }">
   <div class="card-body">
     <h5 class="card-title ">${sortedProducts.Description}</h5>
     <h3 class="card-text mt-2">R ${sortedProducts.amount}</h3>
     <a href="#" class="btn btn-dark mt-2" id="add-btn" onclick='addToCart(${JSON.stringify(
       sortedProducts
     )})'>Add to Cart</a>
   </div>
 </div>
 
 
     `;
    });
  }
});

// Add To Cart
let emptyArray = JSON.parse(localStorage.getItem("checkout")) || [];
function addToCart(item) {
  if (item) {
    emptyArray.push(item);
    localStorage.setItem("checkout", JSON.stringify(emptyArray));
  }
}
