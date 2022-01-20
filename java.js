var example = ["I'm Aleksandar", "I'm web developer"];

textSequence(0);
function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = example[i];
            textSequence(++i);
        }, 1500); 

    } else if (example.length == i) { 
        textSequence(0);
    }

}



