var stock = document.getElementById("displayStock");
var searchBut = document.querySelector("#searchButton");

//alert(Handlebars);
var shoeDataList = [
  {Brand: "MakhoSneakers", Color:"White", Size:7, Price:"R250"},
  {Brand: "ThabsSneakers", Color:"Black", Size:8, Price:"R350"},
  {Brand: "YanSneakers", Color:"Brown", Size:9, Price:"R450"},
  {Brand: "LuckSneakers", Color: "Red", Size:10, Price: "R550"}
]

var myTemplate = document.querySelector(".myTemplate")
var template = Handlebars.compile(myTemplate.innerHTML);
//console.log(template);
searchBut.addEventListener("click", function(){

var shoeStock = template({ shoes: shoeDataList })
stock.innerHTML = shoeStock;

})
