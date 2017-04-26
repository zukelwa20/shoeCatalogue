var stock = document.getElementById("displayStock");
var searchBut = document.querySelector("#searchButton");
var options = document.querySelector("#options");
var display = document.querySelector(".display");
var stock2 = document.querySelector(".stock2");
var showButton = document.querySelector(".showButton");



var shoeDataList = [
  {Brand: "MakhoSneakers", Color:"White", Size:7, Price:"R250"},
  {Brand: "MakhoSneakers", Color:"Black", Size:8, Price:"R255"},
  {Brand: "MakhoSneakers", Color:"green", Size:9, Price:"R260"},
  {Brand: "MakhoSneakers", Color:"White", Size:10, Price:"R270"},
  {Brand: "ThabsSneakers", Color:"Black", Size:7, Price:"R350"},
  {Brand: "ThabsSneakers", Color:"Black", Size:8, Price:"R355"},
  {Brand: "ThabsSneakers", Color:"Black", Size:9, Price:"R360"},
  {Brand: "ThabsSneakers", Color:"Black", Size:10, Price:"R370"},
  {Brand: "YanSneakers", Color:"Brown", Size:7, Price:"R450"},
  {Brand: "YanSneakers", Color:"Brown", Size:8, Price:"R455"},
  {Brand: "YanSneakers", Color:"Brown", Size:9, Price:"R460"},
  {Brand: "YanSneakers", Color:"Brown", Size:10, Price:"R470"},
  {Brand: "LuckSneakers", Color: "Red", Size:7, Price:"R550"},
  {Brand: "LuckSneakers", Color: "Red", Size:8, Price:"R560"},
  {Brand: "LuckSneakers", Color: "Red", Size:9, Price:"R570"},
  {Brand: "LuckSneakers", Color: "Red", Size:10, Price:"R580"}
]

 var myTemplate = document.querySelector(".myTemplate");
 var template = Handlebars.compile(myTemplate.innerHTML);


 var filterTemplate = document.querySelector(".filterTemplate");
 var filterTempOptions = Handlebars.compile(filterTemplate.innerHTML);

function brandUniquelist(shoeDataList){
var brandUniq = [];
var brandMap = {};
for (var i = 0; i < shoeDataList.length; i++){
var dataList = shoeDataList[i];
if(brandMap[dataList.Brand] === undifined){
  brandMap[dataList.Brand] = dataList.Brand
  brandUniq.push(dataList.Brand);
}
}
// return brandUniq;
stock2.innerHTML = tamplate({Brand : dataList});
}



showButton.addEventListener("click", function(){
   display.innerHTML = template({shoesList: shoeDataList})
 });

  searchBut.addEventListener("click", function(){

  var brandClass= document.querySelector(".brandClass");
  var colorClass=document.querySelector(".colorClass");
  var sizeClass= document.querySelector(".sizeClass");
  var selectedBrand = brandClass.value;
  var selectedColor = colorClass.value;
  var selectedSize = Number(sizeClass.value);



var shoeFilter=[];
for (var i = 0; i < shoeDataList.length; i++) {
     shoeData = shoeDataList[i];
    if(selectedBrand === shoeData.Brand || selectedColor === shoeData.Color
    || selectedSize === shoeData.Size){
     shoeFilter.push(shoeData);
    }
  }

stock.innerHTML = template({shoesList: shoeFilter})
});

var tempDisplay = document.querySelector(".tempDisplay");
var filterTemplate = document.querySelector(".filterTemplate");
var filterTempOptions = Handlebars.compile(filterTemplate.innerHTML);

(function(){
stock2.innerHTML = filterTempOptions({ Brand: shoeDataList,
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


  stock2.innerHTML = filterTempOptions({ Brand: shoeDataList,
                                          Color: shoeDataList,
                                          Size: shoeDataList,
                                          Price: shoeDataList});
  document.querySelector(".brandBox").value=""
  document.querySelector(".colorBox").value=""
  document.querySelector(".sizeBox").value=""
});
