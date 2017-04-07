var stock = document.getElementById("displayStock");
var searchBut = document.querySelector("#searchButton");
var options = document.querySelector("#options");
var brandClass= document.querySelector(".brandClass");
var colorClass=document.querySelector(".colorClass");
var sizeClass= document.querySelector(".sizeClass");

//alert(Handlebars);

// var templateText = document.querySelector('.myTemplate').innerHTML;
// var Template = Handlebars.compile(templateText);



var shoeDataList = [
  {Brand: "MakhoSneakers", Color:"White", Size:7, Price:"R250"},
  {Brand: "ThabsSneakers", Color:"Black", Size:8, Price:"R350"},
  {Brand: "YanSneakers", Color:"Brown", Size:9, Price:"R450"},
  {Brand: "LuckSneakers", Color: "Red", Size:10, Price: "R550"},
  {Brand: "MakhoSneakers", Color:"Black", Size:8, Price:"R250"},
  {Brand: "ThabsSneakers", Color:"White", Size:7, Price:"R350"},
  {Brand: "YanSneakers", Color: "Red", Size: 9, Price: "R450"},
  {Brand: "LuckSneakers", Color: "Brown", Size:10, Price: "R550"}
]
// var myOptionsTemplate = document.querySelector(".myOptionsTemplate");
//var templateOptions = Handlebars.compile(myOptionsTemplate.innerHTML);



 var myTemplate = document.querySelector(".myTemplate");
 var template = Handlebars.compile(myTemplate.innerHTML);
 var shoeFilter=[];

 var selectedBrand = brandClass.value;
 var selectedColor = colorClass.value;
 var selectedSize = sizeClass.value;
searchBut.addEventListener("click", function(){
  
for (var i = 0; i < shoeDataList.length; i++) {
if(shoeDataList[i].Brand === selectedBrand
  && shoeDataList[i].Color === selectedColor
  && shoeDataList[i].Size === selectedSize){
  shoeFilter.push(shoeDataList[i]);
  //alert(shoeFilter);
}
}
var shoeStock = template({ shoeDataList: shoeFilter })
stock.innerHTML = shoeStock;

});



// else {
//        if(checkedColor.filter(clickedOption)){
//          shoeFilter.push(shoesList)
//        }
//        if(checkedSize.filter(clickedOption)){
//          shoeFilter.push(shoeList)
//        }

// var shoeArray = [];
// options.addEventListener("click", function(evt){
// var valueS = evt.target.value
// for(var i=0; i<shoeDataList.length; i++){
// if(shoeDataList[i]!==""){
// shoeArray.push(valueS);
//
// }
// }

//   var shoeStockHTML = template({ shoes: shoeDataList })
//   stock.innerHTML = shoeArray;
//
// });
