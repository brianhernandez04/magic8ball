const inputval = document.querySelector('input');

const button = document.querySelector('button');

const replace = document.getElementById('question');

button.addEventListener('click', function() {
    replace.innerHTML = 
    `
    <h1>${inputval.value}</h1>
    `
    ;
    // add the random images here
    window.onload = function() {
        var elem = document.createElement("img");
        elem.setAttribute("src", "magic8ball_3.png");
        elem.setAttribute("height", "40vh");
        elem.setAttribute("width", "20rem");
        elem.setAttribute("alt", "Random 8ball answers");
        document.getElementById("answers").appendChild(elem);
      }
});



