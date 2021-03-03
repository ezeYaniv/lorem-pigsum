function generate() {
    // console.log("test");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            // document.getElementById('results__container').innerHTML = "asdf";
        }
    };
    xhttp.open("GET", "/", true);
    xhttp.send();
}