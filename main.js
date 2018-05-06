function plus(){
    var inp1 = document.getElementById('value1').value;
    var inp2 = document.getElementById('value2').value;
    inp1 = parseInt(inp1);
    inp2 = parseInt(inp2);
    var result;
    result = inp1 + inp2;
    document.getElementById('result').value = result;
}

function minus(){
    var inp1 = document.getElementById('value1').value;
    var inp2 = document.getElementById('value2').value;
    var result;
    result = inp1 - inp2;
    document.getElementById('result').value = result;
}

function multi(){
    var inp1 = document.getElementById('value1').value;
    var inp2 = document.getElementById('value2').value;
    var result;
    result = inp1 * inp2;
    document.getElementById('result').value = result;
}

function div(){
    var inp1 = document.getElementById('value1').value;
    var inp2 = document.getElementById('value2').value;
    var result;
    result = inp1 / inp2;
    document.getElementById('result').value = result;
}