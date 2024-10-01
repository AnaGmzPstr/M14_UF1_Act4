//Part 1

//Exercici 1
function exercici1_1(){
    let resultat = document.getElementById("res1");
    const estudiant = {
        nom: 'Joan',
        edat: 20,
        notes: {
            matematiques: 8,
            programacio: 9,
            fisica: 7
        }
    };
    resultat.innerHTML = `${estudiant.nom} té ${estudiant.edat} anys i ha tret un ${estudiant.notes.matematiques} en matemàtiques`;

}

//Exercici 2
function exercici1_2(){
    let resultat = document.getElementById("res2");
    const coordenades = [12, 5, 8];
    resultat.innerHTML =  `Les coodenades són x=${coordenades[0]}, y=${coordenades[1]}  i z=${coordenades[2]}`;
}

//Part 2
