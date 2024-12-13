<<<<<<< HEAD
// Fonction pour afficher la solution
function afficherTexte() {
    document.getElementById("solution").classList.remove("hidden");
}

// Fonction pour afficher la démonstration
function Demo_1() {
    // Demander à l'utilisateur s'il veut faire une addition
    var proceed = confirm("Voulez-vous faire une addition ?");

    // Si l'utilisateur accepte (OK)
    if (proceed) {
        // Demander à l'utilisateur d'entrer le premier nombre
        var num1 = prompt("Entrez le premier nombre :");

        // Demander à l'utilisateur d'entrer le deuxième nombre
        var num2 = prompt("Entrez le deuxième nombre :");

        // Convertir les entrées en nombres (float)
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // Vérifier si les entrées sont des nombres valides
        if (!isNaN(num1) && !isNaN(num2)) {
            // Calculer la somme
            var sum = num1 + num2;
            // Afficher le résultat
            alert("Le résultat de l'addition est : " + sum);
        } else {
            // Si l'une des entrées n'est pas un nombre valide
            alert("Veuillez entrer des nombres valides.");
        }
    } else {
        // Si l'utilisateur a annulé l'addition
        alert("L'addition a été annulée.");
    }
}











function Demo_2() {
    let proceed = confirm("Voulez-vous vérifier si un nombre est pair ou impair ?");
    if (proceed) {
        let number = parseInt(prompt("Entrez un nombre :"));
        if (!isNaN(number)) {
            alert(number % 2 === 0 ? "Le nombre est pair." : "Le nombre est impair.");
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte2() {
    document.getElementById("solution2").classList.remove("hidden");
}



function Demo_3() {
    var proceed = confirm("Voulez-vous faire une multiplication ?");
    if (proceed) {
        var num1 = prompt("Entrez le premier nombre :");
        var num2 = prompt("Entrez le deuxième nombre :");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (!isNaN(num1) && !isNaN(num2)) {
            alert("Le résultat de la multiplication est : " + (num1 * num2));
        } else {
            alert("Veuillez entrer des nombres valides.");
        }
    } else {
        alert("Multiplication annulée.");
    }
}

function afficherTexte3() {
    document.getElementById("solution3").classList.remove("hidden");
}








function Demo_4() {
    var proceed = confirm("Voulez-vous convertir une température de Celsius en Fahrenheit ?");
    if (proceed) {
        var celsius = prompt("Entrez la température en Celsius :");
        celsius = parseFloat(celsius);
        if (!isNaN(celsius)) {
            var fahrenheit = (celsius * 9 / 5) + 32;
            alert("La température en Fahrenheit est : " + fahrenheit);
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    } else {
        alert("Conversion annulée.");
    }
}

function afficherTexte4() {
    document.getElementById("solution4").classList.remove("hidden");
}






function Demo_5() {
    var proceed = confirm("Voulez-vous vérifier si une phrase contient un mot spécifique ?");
    if (proceed) {
        var phrase = prompt("Entrez une phrase :");
        var mot = prompt("Entrez le mot à rechercher :");
        if (phrase.includes(mot)) {
            alert("Le mot '" + mot + "' est présent dans la phrase.");
        } else {
            alert("Le mot '" + mot + "' n'est pas présent.");
        }
    } else {
        alert("Vérification annulée.");
    }
}

function afficherTexte5() {
    document.getElementById("solution5").classList.remove("hidden");
}










function Demo_6() {
    var proceed = confirm("Voulez-vous trouver le plus grand de deux nombres ?");
    if (proceed) {
        var num1 = prompt("Entrez le premier nombre :");
        var num2 = prompt("Entrez le deuxième nombre :");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (!isNaN(num1) && !isNaN(num2)) {
            var max = Math.max(num1, num2);
            alert("Le plus grand nombre est : " + max);
        } else {
            alert("Veuillez entrer des nombres valides.");
        }
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte6() {
    document.getElementById("solution6").classList.remove("hidden");
}












function Demo_7() {
    var proceed = confirm("Voulez-vous compter jusqu'à 10 ?");
    if (proceed) {
        var result = "";
        for (var i = 1; i <= 10; i++) {
            result += i + " ";
        }
        alert("Voici les nombres de 1 à 10 : " + result);
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte7() {
    document.getElementById("solution7").classList.remove("hidden");
}













function Demo_8() {
    var proceed = confirm("Voulez-vous afficher une table de multiplication ?");
    if (proceed) {
        var n = prompt("Entrez un nombre :");
        n = parseInt(n);
        if (!isNaN(n)) {
            var result = "";
            for (var i = 1; i <= 10; i++) {
                result += n + " x " + i + " = " + (n * i) + "\n";
            }
            alert(result);
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte8() {
    document.getElementById("solution8").classList.remove("hidden");
}










function Demo_9() {
    var proceed = confirm("Voulez-vous calculer la somme des nombres de 1 à N ?");
    if (proceed) {
        var N = prompt("Entrez un nombre N :");
        N = parseInt(N);
        if (!isNaN(N)) {
            var sum = 0;
            for (var i = 1; i <= N; i++) {
                sum += i;
            }
            alert("La somme des nombres de 1 à " + N + " est : " + sum);
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte9() {
    document.getElementById("solution9").classList.remove("hidden");
}











function Demo_10() {
    var proceed = confirm("Voulez-vous connaître la longueur d'une chaîne de caractères ?");
    if (proceed) {
        var texte = prompt("Entrez une chaîne de caractères :");
        alert("La longueur de la chaîne est : " + texte.length);
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte10() {
    document.getElementById("solution10").classList.remove("hidden");
}












function Demo_11() {
    var proceed = confirm("Voulez-vous générer un nombre aléatoire entre 1 et 100 ?");
    if (proceed) {
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        alert("Le nombre aléatoire généré est : " + randomNumber);
    } else {
        alert("Opération annulée.");
    }
}


function afficherTexte11() {
    document.getElementById("solution11").classList.remove("hidden");
}










function Demo_12() {
    var proceed = confirm("Voulez-vous inverser une chaîne de caractères ?");
    if (proceed) {
        var str = prompt("Entrez une chaîne :");
        var reversed = str.split('').reverse().join('');
        alert("La chaîne inversée est : " + reversed);
    } else {
        alert("Opération annulée.");
    }
}


function afficherTexte12() {
    document.getElementById("solution12").classList.remove("hidden");
}










function afficherTexte13() {
    document.getElementById("solution13").classList.remove("hidden");
}

function Demo_13() {
    var proceed = confirm("Voulez-vous afficher les voyelles d'une chaîne ?");
    if (proceed) {
        var texte = prompt("Entrez une chaîne de caractères :");
        var voyelles = texte.match(/[aeiouy]/gi);
        alert("Les voyelles sont : " + (voyelles ? voyelles.join('') : "aucune voyelle trouvée."));
    } else {
        alert("Opération annulée.");
    }
}







function Demo_14() {
    var proceed = confirm("Voulez-vous vérifier si un élément est dans un tableau ?");
    if (proceed) {
        var fruits = ["pomme", "banane", "orange"];
        var fruit = prompt("Entrez un fruit :");
        if (fruits.includes(fruit)) {
            alert(fruit + " est présent dans le tableau.");
        } else {
            alert(fruit + " n'est pas présent.");
        }
    } else {
        alert("Opération annulée.");
    }
}


function afficherTexte14() {
    document.getElementById("solution14").classList.remove("hidden");
}





function Demo_15() {
    var proceed = confirm("Voulez-vous compter les occurrences d'un caractère dans une chaîne ?");
    if (proceed) {
        var phrase = prompt("Entrez une phrase :");
        var char = prompt("Entrez le caractère à chercher :");
        var count = phrase.split(char).length - 1;
        alert("Le caractère '" + char + "' apparaît " + count + " fois.");
    } else {
        alert("Opération annulée.");
    }
}


function afficherTexte15() {
    document.getElementById("solution15").classList.remove("hidden");
}
=======
// Fonction pour afficher la solution
function afficherTexte() {
    document.getElementById("solution").classList.remove("hidden");
}

// Fonction pour afficher la démonstration
function Demo_1() {
    // Demander à l'utilisateur s'il veut faire une addition
    var proceed = confirm("Voulez-vous faire une addition ?");

    // Si l'utilisateur accepte (OK)
    if (proceed) {
        // Demander à l'utilisateur d'entrer le premier nombre
        var num1 = prompt("Entrez le premier nombre :");

        // Demander à l'utilisateur d'entrer le deuxième nombre
        var num2 = prompt("Entrez le deuxième nombre :");

        // Convertir les entrées en nombres (float)
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // Vérifier si les entrées sont des nombres valides
        if (!isNaN(num1) && !isNaN(num2)) {
            // Calculer la somme
            var sum = num1 + num2;
            // Afficher le résultat
            alert("Le résultat de l'addition est : " + sum);
        } else {
            // Si l'une des entrées n'est pas un nombre valide
            alert("Veuillez entrer des nombres valides.");
        }
    } else {
        // Si l'utilisateur a annulé l'addition
        alert("L'addition a été annulée.");
    }
}











function Demo_2() {
    let proceed = confirm("Voulez-vous vérifier si un nombre est pair ou impair ?");
    if (proceed) {
        let number = parseInt(prompt("Entrez un nombre :"));
        if (!isNaN(number)) {
            alert(number % 2 === 0 ? "Le nombre est pair." : "Le nombre est impair.");
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte2() {
    document.getElementById("solution2").classList.remove("hidden");
}



function Demo_3() {
    var proceed = confirm("Voulez-vous faire une multiplication ?");
    if (proceed) {
        var num1 = prompt("Entrez le premier nombre :");
        var num2 = prompt("Entrez le deuxième nombre :");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (!isNaN(num1) && !isNaN(num2)) {
            alert("Le résultat de la multiplication est : " + (num1 * num2));
        } else {
            alert("Veuillez entrer des nombres valides.");
        }
    } else {
        alert("Multiplication annulée.");
    }
}

function afficherTexte3() {
    document.getElementById("solution3").classList.remove("hidden");
}








function Demo_4() {
    var proceed = confirm("Voulez-vous convertir une température de Celsius en Fahrenheit ?");
    if (proceed) {
        var celsius = prompt("Entrez la température en Celsius :");
        celsius = parseFloat(celsius);
        if (!isNaN(celsius)) {
            var fahrenheit = (celsius * 9 / 5) + 32;
            alert("La température en Fahrenheit est : " + fahrenheit);
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    } else {
        alert("Conversion annulée.");
    }
}

function afficherTexte4() {
    document.getElementById("solution4").classList.remove("hidden");
}






function Demo_5() {
    var proceed = confirm("Voulez-vous vérifier si une phrase contient un mot spécifique ?");
    if (proceed) {
        var phrase = prompt("Entrez une phrase :");
        var mot = prompt("Entrez le mot à rechercher :");
        if (phrase.includes(mot)) {
            alert("Le mot '" + mot + "' est présent dans la phrase.");
        } else {
            alert("Le mot '" + mot + "' n'est pas présent.");
        }
    } else {
        alert("Vérification annulée.");
    }
}

function afficherTexte5() {
    document.getElementById("solution5").classList.remove("hidden");
}










function Demo_6() {
    var proceed = confirm("Voulez-vous trouver le plus grand de deux nombres ?");
    if (proceed) {
        var num1 = prompt("Entrez le premier nombre :");
        var num2 = prompt("Entrez le deuxième nombre :");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (!isNaN(num1) && !isNaN(num2)) {
            var max = Math.max(num1, num2);
            alert("Le plus grand nombre est : " + max);
        } else {
            alert("Veuillez entrer des nombres valides.");
        }
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte6() {
    document.getElementById("solution6").classList.remove("hidden");
}












function Demo_7() {
    var proceed = confirm("Voulez-vous compter jusqu'à 10 ?");
    if (proceed) {
        var result = "";
        for (var i = 1; i <= 10; i++) {
            result += i + " ";
        }
        alert("Voici les nombres de 1 à 10 : " + result);
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte7() {
    document.getElementById("solution7").classList.remove("hidden");
}













function Demo_8() {
    var proceed = confirm("Voulez-vous afficher une table de multiplication ?");
    if (proceed) {
        var n = prompt("Entrez un nombre :");
        n = parseInt(n);
        if (!isNaN(n)) {
            var result = "";
            for (var i = 1; i <= 10; i++) {
                result += n + " x " + i + " = " + (n * i) + "\n";
            }
            alert(result);
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte8() {
    document.getElementById("solution8").classList.remove("hidden");
}










function Demo_9() {
    var proceed = confirm("Voulez-vous calculer la somme des nombres de 1 à N ?");
    if (proceed) {
        var N = prompt("Entrez un nombre N :");
        N = parseInt(N);
        if (!isNaN(N)) {
            var sum = 0;
            for (var i = 1; i <= N; i++) {
                sum += i;
            }
            alert("La somme des nombres de 1 à " + N + " est : " + sum);
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte9() {
    document.getElementById("solution9").classList.remove("hidden");
}











function Demo_10() {
    var proceed = confirm("Voulez-vous connaître la longueur d'une chaîne de caractères ?");
    if (proceed) {
        var texte = prompt("Entrez une chaîne de caractères :");
        alert("La longueur de la chaîne est : " + texte.length);
    } else {
        alert("Opération annulée.");
    }
}

function afficherTexte10() {
    document.getElementById("solution10").classList.remove("hidden");
}












function Demo_11() {
    var proceed = confirm("Voulez-vous générer un nombre aléatoire entre 1 et 100 ?");
    if (proceed) {
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        alert("Le nombre aléatoire généré est : " + randomNumber);
    } else {
        alert("Opération annulée.");
    }
}


function afficherTexte11() {
    document.getElementById("solution11").classList.remove("hidden");
}










function Demo_12() {
    var proceed = confirm("Voulez-vous inverser une chaîne de caractères ?");
    if (proceed) {
        var str = prompt("Entrez une chaîne :");
        var reversed = str.split('').reverse().join('');
        alert("La chaîne inversée est : " + reversed);
    } else {
        alert("Opération annulée.");
    }
}


function afficherTexte12() {
    document.getElementById("solution12").classList.remove("hidden");
}










function afficherTexte13() {
    document.getElementById("solution13").classList.remove("hidden");
}

function Demo_13() {
    var proceed = confirm("Voulez-vous afficher les voyelles d'une chaîne ?");
    if (proceed) {
        var texte = prompt("Entrez une chaîne de caractères :");
        var voyelles = texte.match(/[aeiouy]/gi);
        alert("Les voyelles sont : " + (voyelles ? voyelles.join('') : "aucune voyelle trouvée."));
    } else {
        alert("Opération annulée.");
    }
}







function Demo_14() {
    var proceed = confirm("Voulez-vous vérifier si un élément est dans un tableau ?");
    if (proceed) {
        var fruits = ["pomme", "banane", "orange"];
        var fruit = prompt("Entrez un fruit :");
        if (fruits.includes(fruit)) {
            alert(fruit + " est présent dans le tableau.");
        } else {
            alert(fruit + " n'est pas présent.");
        }
    } else {
        alert("Opération annulée.");
    }
}


function afficherTexte14() {
    document.getElementById("solution14").classList.remove("hidden");
}





function Demo_15() {
    var proceed = confirm("Voulez-vous compter les occurrences d'un caractère dans une chaîne ?");
    if (proceed) {
        var phrase = prompt("Entrez une phrase :");
        var char = prompt("Entrez le caractère à chercher :");
        var count = phrase.split(char).length - 1;
        alert("Le caractère '" + char + "' apparaît " + count + " fois.");
    } else {
        alert("Opération annulée.");
    }
}


function afficherTexte15() {
    document.getElementById("solution15").classList.remove("hidden");
}
>>>>>>> 681d3a5d732ba1c0accea9d5e292c300ef03dc16
