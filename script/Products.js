
// current year footer
CurrentYear= new Date (Date.now());
let year = CurrentYear.getFullYear();
document.getElementById("CurrYear").innerHTML = year;




//  - sample data on a array saved in local storage

let Products =  JSON.parse(localStorage.getItem("products")) ? 
JSON.parse(localStorage.getItem("products")) :
localStorage.setItem("products", 
JSON.stringify({
    "id" : 1,
    "make" : "iPhone",
    "amount" : 23000,
     "Description" : "iPhone15"},
     {
        "id": 2,
        "make" : "iPhone",
        "amount" : 20000,
        "Description" : "iPhone14" },
        {
            "id" : 3,
            "make" : "iPhone",
            "amount" : 17000,
            "Description" : "iPhone13" },

         {
            "id ":4,
            "make": "iPhone",
            "amount": 14000,
            "Description": "iPhone12"},
            {
                "id": 5,
                "make": "iPhone",
                "amount": 11000,
                "Description": "iPhone11"},
                {
                    "id":6,
                    "make": 8000,
                    "Description": "iPhone10"
                }    


               
    
));


            

