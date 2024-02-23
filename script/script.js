var val=0;

function increment(event){
    var box = event.target;
    var boxid = box.id;
    if (val<5){
        val += 1;
    }
    else{
        val=0;
    }
changeColor(boxid, val);
}

function changeColor(obj, val) {
    var colors="";
    switch (val) {
    case 1: colors="red";
    break;

    case 2: colors="blue";
    break;

    case 3: colors="green";
    break;

    case 4: colors="yellow";
    break;

    case 5: colors="orange";
    break;

    default: colors="black";
    break;
    }
    document.getElementById(obj).style.background=colors;
}