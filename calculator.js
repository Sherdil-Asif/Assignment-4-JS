var button = document.getElementById('button');

var output = document.getElementById('output');


button.addEventListener('click', function(){
    var str =document.getElementById('word').value;
    output.innerHTML = str.length;
})