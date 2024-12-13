function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
    document.write("<tr>*<td></td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
    }




function affichagetab2() {
    var x = prompt("Combien de lignes ?");
    x = parseInt(x); 
    if (isNaN(x) || x <= 0) {
        alert("Veuillez entrer un nombre valide !");
        return;
    }

    document.write("<table border='2' width='30%'>");
    for (let i = 0; i < x; i++) {
        document.write("<tr><td>" + (i + 1) + "</td><td></td><td>*</td></tr>");
    }
    document.write("</table>");
}
function seconnecter() {
    var login = prompt("Donnez votre nom d'utilisateur");
    var password = prompt("Entrez votre mot de passe");

    if (login === "admin" && password === "admin") {
        document.write("Bienvenue : " + login);
    } else {
        alert("Accès refusé");
    }
}


function seconnecter2() {
    window.location.href = "authentification.html";
}
function login() {
    
    var login = document.getElementById("t1").value;
    var password = document.getElementById("t2").value;

    if (login === "admin" && password === "admin") {
        
        window.location.href = "yes.html";
    } else {
        
        window.location.href = "no.html";
    }
}

function seconnecter3() {
    let i = 0;

    do {
        var login = prompt("Donnez votre nom d'utilisateur");
        var password = prompt("Entrez votre mot de passe");

        if (login === "admin" && password === "admin") {
            document.write("Bienvenue : " + login);
            break; // Corrigé ici
        } else {
            alert("Accès refusé");
            i += 1;
        }
    } while (i < 3);

    if (i === 3) {
        alert("Délai dépassé");
    }
}

function cdc() {
    var chaine = prompt("Donner un mot");
        document.write(chaine.toUpperCase() + "<br>");
        document.write(chaine.toLowerCase() + "<br>");
        document.write ("La chaine contient " + chaine.length + " caractères <br>");
        document.write("La première lettre est " + chaine.substr(0,1) + " caractère <br>");

    
}

function ligne (){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;

    if (a == "" || b == "") {
        alert("Un ou 2 champs vide");
    }else if (Number(b) <10 || Number(b) > 20) {
        alert("Age invalide")
    }else {
        var table = document.getElementById("yTable");
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        cell1.innerHTML = document.getElementById("t1").value ;
        cell2.innerHTML = document.getElementById("t2").value ;


        
    }
}