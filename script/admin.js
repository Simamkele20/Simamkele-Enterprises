// let products = JSON.parse(localStorage.getItem("products"));
// // Display the cart
// let productsData = document.getElementById("Products-data");;


   
    
// // Display the cart
// productsData.innerHtml = " ";
// if (cartProducts) {
//   // Loop through products array
//   for (let key in cartProducts) {
//     cartTable.innerHTML += `
    
//     <tr>
//     <th scope="row">${cartProducts[key][0].id}</th>
//     <td>${cartProducts[key][0].Description}</td>
//     <td>
//         <img class=" img-fluid " id="IMG" src="${
//           cartProducts[key][0].imgUrl
//         }" alt="${cartProducts[key][0].make}">
//     </td>
//     <td>R${cartProducts[key][0].amount} </td>
//     <td>${cartProducts[key].length}</td>
//     <td>R${cartProducts[key].length * cartProducts[key][0].amount}</td>
// </tr>
         
        
        
       
        
        
    
//     `;
//   }
// }
    























// current year footer
CurrentYear= new Date (Date.now());
let year = CurrentYear.getFullYear();
document.getElementById("CurrYear").innerHTML = year;
