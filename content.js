let elements = document.getElementsByTagName('a');

for (elt of elements) {
    elt.style['background-color'] = '#FF00FF';
}

function myFunction() {
    document.getElementById("unword-List-Container").classList.toggle("show");
  }