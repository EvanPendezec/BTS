function Correction() {
    window.open('correction.html', '_blank', 'width=800,height=600'); 
}

function Fermerlapage() {
    window.close(); 
}




function Effacer() {
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    

    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });

    const labels = document.querySelectorAll('label.true');
    labels.forEach(function(label) {
        label.classList.remove('true');  
        label.style.color = '';
    });
}

function Corrigé() {
    let score = 0;

    // Vérifier si l'option A est cochée (ajoute +1 si vrai)
    if (document.getElementById('optionC').checked) {
        score += 1;
    }

    if (document.getElementById('optionA2').checked) {
        score += 1;
    }

    if (document.getElementById('optionB3').checked) {
        score += 1;
    }

    if (document.getElementById('optionC4').checked) {
        score += 1;
    }

    if (document.getElementById('optionB5').checked) {
        score += 1;
    }

    if (document.getElementById('optionC6').checked) {
        score += 1;
    }

    if (document.getElementById('optionC7').checked) {
        score += 1;
    }

    if (document.getElementById('optionA8').checked) {
        score += 1;
    }

    if (document.getElementById('optionB9').checked) {
        score += 1;
    }

    if (document.getElementById('optionB10').checked) {
        score += 1;
    }


     else {
        // Liste des autres options à vérifier
        let autresOptions = ['optionA', 'optionB', 'optionD',
            'optionD2', 'optionB2', 'optionC2',
            'optionA3', 'optionD3', 'optionC3',
            'optionA4', 'optionB4', 'optionD4',
            'optionA5', 'optionD5', 'optionC5',
            'optionA6', 'optionB6', 'optionD6',
            'optionA7', 'optionB7', 'optionD7',
            'optionD8', 'optionB8', 'optionC8',
            'optionA9', 'optionD9', 'optionC9',
            'optionA10', 'optionD10', 'optionC10'
        ]; // Autres options à vérifier

        // Vérifie si l'une des autres options est cochée et ajoute -1
        autresOptions.forEach(function(optionId) {
            if (document.getElementById(optionId).checked) {
                score -= 1; // Si l'option est cochée, on retire 1 point
            }
        });
    }


    // Si le score est inférieur à 0, on l'affiche comme 0
    if (score < 0) {
        score = 0;
    }

    // Afficher le score dans l'élément avec l'id 'score'
    alert("Votre score est : " + score);
}

