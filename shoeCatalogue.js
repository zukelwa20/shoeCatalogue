var stock = document.getElementById("displayStock");
var searchBut = document.querySelector("#searchButton");
var options = document.querySelector("#options");

//alert(Handlebars);

// var templateText = document.querySelector('.myTemplate').innerHTML;
// var Template = Handlebars.compile(templateText);



var shoeDataList = [
  {Brand: "MakhoSneakers", Color:"White", Size:7, Price:"R250"},
  {Brand: "MakhoSneakers", Color:"White", Size:8, Price:"R250"},
  {Brand: "MakhoSneakers", Color:"White", Size:9, Price:"R250"},
  {Brand: "MakhoSneakers", Color:"White", Size:10, Price:"R250"},
  {Brand: "ThabsSneakers", Color:"Black", Size:7, Price:"R350"},
  {Brand: "ThabsSneakers", Color:"Black", Size:8, Price:"R350"},
  {Brand: "ThabsSneakers", Color:"Black", Size:9, Price:"R350"},
  {Brand: "ThabsSneakers", Color:"Black", Size:10, Price:"R350"},
  {Brand: "YanSneakers", Color:"Brown", Size:7, Price:"R450"},
  {Brand: "YanSneakers", Color:"Brown", Size:8, Price:"R450"},
  {Brand: "YanSneakers", Color:"Brown", Size:9, Price:"R450"},
  {Brand: "YanSneakers", Color:"Brown", Size:10, Price:"R450"},
  {Brand: "LuckSneakers", Color: "Red", Size:7, Price:"R550"},
  {Brand: "LuckSneakers", Color: "Red", Size:8, Price:"R550"},
  {Brand: "LuckSneakers", Color: "Red", Size:9, Price:"R550"},
  {Brand: "LuckSneakers", Color: "Red", Size:10, Price:"R550"}
]

 var myTemplate = document.querySelector(".myTemplate");
 var template = Handlebars.compile(myTemplate.innerHTML);



  var shoeFilter=[];
  searchBut.addEventListener("click", function(){


  var brandClass= document.querySelector(".brandClass");
  var colorClass=document.querySelector(".colorClass");
  var sizeClass= document.querySelector(".sizeClass");
  var selectedBrand = brandClass.value;
  var selectedColor = colorClass.value;
  var selectedSize = Number(sizeClass.value);

for (var i = 0; i < shoeDataList.length; i++) {
var shoeData = shoeDataList[i];
var brandMatch = false;
if(selectedBrand === shoeData.Brand){
    brandMatch = shoeData;
}
if(brandMatch){
shoeFilter.push(shoeData)
}
}



//
//  for (var i = 0; i < shoeDataList.length; i++) {
//    shoeData = shoeDataList[i];
//   if(selectedBrand === shoeData.Brand
//   && selectedColor === shoeData.Color
//   && selectedSize === shoeData.Size){
//     shoeFilter.push(shoeData);
//   }
//   }
//
// stock.innerHTML = template({shoesList: shoeDataList})
//
//
 });

var tempDisplay = document.querySelector(".tempDisplay");
var filterTemplate = document.querySelector(".filterTemplate");
var filterTempOptions = Handlebars.compile(filterTemplate.innerHTML);

(function(){
tempDisplay.innerHTML = filterTempOptions({ Brand: shoeDataList,
                                             Color: shoeDataList,
                                             Size: shoeDataList,
                                             Price: shoeDataList})
})()


 var addBox = document.querySelector(".addBox");

addBox.addEventListener("click", function(){

  var brandBox = document.querySelector(".brandBox");
  var colorBox = document.querySelector(".colorBox");
  var sizeBox = document.querySelector(".sizeBox");
//alert("im clicked");

var brandB = brandBox.value;
var colorB = colorBox.value;
var sizeB = Number(sizeBox.value);

var newStock = {
  Brand: brandB,
  Color: colorB,
  Size: sizeB
};
shoeDataList.push(newStock)


tempDisplay.innerHTML = filterTempOptions({ Brand: shoeDataList,
                                            Color: shoeDataList,
                                            Size: shoeDataList,
                                            Price: shoeDataList});
  document.querySelector(".brandBox").value=""
  document.querySelector(".colorBox").value=""
  document.querySelector(".sizeBox").value=""
});
