let elements = document.getElementsByTagName('a');

var unwordArray = [];
var newUnword = "";


for (elt of elements) {
    elt.style['background-color'] = '#FF00FF';
}

function unwordGenerator(){
    newUnword = document.getElementsByClassName("wordInput").value;
    console.log("newUnword" + newUnword);
}

function myFunction() {
    document.getElementById("unword-List").classList.toggle("show");
  }