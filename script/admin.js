let products = JSON.parse(localStorage.getItem("products"));
// Display the cart
let productsData = document.getElementById("Products-data");;
let adminProducts = Object.groupBy(products, (item) => item.id);


   
    
// Display the cart
productsData.innerHtml = " ";
if (adminProducts) {
  // Loop through products array
  for (let key in adminProducts) {
    productsData.innerHTML += `
    
    <tr>
    <th scope="row">${adminProducts[key][0].id}</th>
    <td>${adminProducts[key][0].Description}</td>
    <td>
        <img class=" img-fluid " id="IMG" src="${
            adminProducts[key][0].imgUrl
        }" alt="${adminProducts[key][0].make}">
    </td>
    <td>R${adminProducts[key][0].amount} </td>
    <td>${adminProducts[key].length}</td>
    <td class="bg-black border-0">  <button class="btn btn-dark mt-md-5   mt-1 mx-o " type="button"aria-expanded="false" id="edit-btn">
    Edit
  </button> </td>
  <td class="bg-black border-0 ">  <button class="btn btn-dark mt-md-5 mt-1 mx-0" type="button"aria-expanded="false" id="add-btn">
  Delete
</button> </td>

    
</tr>
         
        
        
       
        
        
    
    `;
  }
}
    























// current year footer
CurrentYear= new Date (Date.now());
let year = CurrentYear.getFullYear();
document.getElementById("CurrYear").innerHTML = year;
