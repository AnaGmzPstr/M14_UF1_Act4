//Part 1

//Exercici 1
function exercici1(){
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
function exercici2(){
    let resultat = document.getElementById("res2");
    const coordenades = [12, 5, 8];
    resultat.innerHTML =  `Les coodenades són x=${coordenades[0]}, y=${coordenades[1]}  i z=${coordenades[2]}`;
}

//Part 2

//Exercici 3
function exercici3(){
    let resultat = document.getElementById("res3");
    const preus = [100, 200, 300, 400];
    const preusIncrementats = preus.map(preu => preu * 1.1);
    resultat.innerHTML = `Els preus amb un  10% d'increment són ${preusIncrementats}`;
}

//Exercici 4
function exercici4(){
    let resultat = document.getElementById("res4");
    const edats = [16, 21, 18, 24, 12, 30];
    const edatsMajors = edats.filter(edat => edat >= 18);
    resultat.innerHTML = `Les edats majors són ${edatsMajors}`;
}

//Exercici 5
function exercici5(){
    let resultat = document.getElementById("res5");
    const notes = [7, 9, 5, 10, 8];
    let mitjana  = notes.reduce((acumulador, valor) => acumulador + valor, 0 ) / notes.length; 
    resultat.innerHTML = `La mitjana de les notes és ${mitjana}`;
}

//FIXME: mostrar por pantalla correctamente los objetos
//Exerici 6
function exercici6(){
    let resultat = document.getElementById("res6").value;
    let producte = document.getElementById("prod").value;
    let cantitat = document.getElementById("cant").value;
    let preu = document.getElementById("preu").value;


    let producteObjecte = {
        producte: producte,
        cantitat: cantitat,
        preu:  preu
    }
     console.log(producteObjecte);
     resultat.innerHTML = `${Object.values(producteObjecte)}`
}

//Exercici 7
function exercici7(){
    let resultat = document.getElementById("res7");
    const cotxe = {
        marca: 'Tesla',
        model: 'Model S',
        preu: 80000
    };
    
    cotxe['any'] = 2023;
    console.log(cotxe);
    resultat.innerHTML = `${Object.values(cotxe)}`
}

