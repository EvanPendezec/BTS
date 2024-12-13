function résultat(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t4").value;
    var c = Number(a) * Number(b);

    t35.value = c;


    var a = document.getElementById("t2").value;
    var b = document.getElementById("t5").value;
    var c = Number(a) * Number(b);

    t36.value = c;


    var a = document.getElementById("t3").value;
    var b = document.getElementById("t6").value;
    var c = Number(a) * Number(b);

    t37.value = c;


    var a = document.getElementById("t35").value;
    var b = document.getElementById("t36").value;
    var c = document.getElementById("t37").value;
    var d = Number(a) + Number(b) +  Number(c) ;

    t38.value = d;


}


function réinitialiser(){
    document.getElementById("t1").value=""
    document.getElementById("t2").value=""
    document.getElementById("t3").value=""
    document.getElementById("t4").value=""
    document.getElementById("t5").value=""
    document.getElementById("t6").value=""
    document.getElementById("t35").value=""
    document.getElementById("t36").value=""
    document.getElementById("t37").value=""
    document.getElementById("t38").value=""
    
    document.getElementById("A1").value=""
    document.getElementById("A2").value=""
    document.getElementById("A3").value=""
}

