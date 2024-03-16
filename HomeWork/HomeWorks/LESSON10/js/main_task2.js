createTable();
let buttonClear = document.getElementById("clearBtn");
let buttonRandom = document.getElementById("randomBtn");
let buttonSequential = document.getElementById("sequentialBtn");
buttonClear.addEventListener("click", function(){
  createTable();
});
buttonRandom.addEventListener("click", function(){
  createTable("R");
});
buttonSequential.addEventListener("click", function(){
  createTable("S");
});