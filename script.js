/* CAMPO_MINATO - ESERCIZIO CON BONUS */
// 1. L'utente sceglie la difficoltà e clicca su play
// 2. Che genererà una griglia di gioco quadrata in base alla difficoltà (easy 7x7 / medium 9x9 / hard 10x10) e le bombe
// 3. Quando l'utente clicca su ogni cella... (creo un evento)
// 4. ...la cella cliccata si colora di blu se giusta, rossa se è sbagliata
// 5. Emetto un messaggio in console con il numero della cella cliccata
// 6. Il gioco finisce
// 7. Mostro a schermo lo score


// dichiaro variabili fuori dal button
const grid = document.querySelector(`.grid`);
const btnPlay = document.querySelector(`#play`);

// 1. BUTTON
btnPlay.addEventListener(`click`, 
function() {
    
    // pulisco lo spazio di gioco
    document.querySelector(`.grid`).innerHTML = "";
    grid.style.cssText += 'border: 0px;';
    grid.classList.remove(`no_click`)

    let txtScore = document.querySelector(`.score`);
    txtScore.innerHTML = "";
    let score = 0;
    
    // 2. GENERO GRIGLIA
    let difficult = document.querySelector(`#difficult`).value.toLowerCase().replace(" ", "");
    console.log(difficult);
    
    // flag
    let NumCell = 0;

    // array per le bombe
    let arrNBomb = [];
    
    // controllo difficoltà per determinare la grandezza della griglia e il numero delle bombe
    switch (difficult) {
        case `souls`:
            griglia(25, grid);
            NumCell = 5;
            grid.style.cssText += 'border: 1px solid black;';
            checkArrBomb(1, 25, arrNBomb);
            break;
        case `hard`:
            griglia(81, grid);
            NumCell = 9;
            grid.style.cssText += 'border: 1px solid black;';
            checkArrBomb(1, 81, arrNBomb);
            break;
        case `medium`:
            griglia(100, grid);
            NumCell = 10;
            grid.style.cssText += 'border: 1px solid black;';
            checkArrBomb(1, 100, arrNBomb);
            break;
        case `easy`:
            griglia(225, grid);
            NumCell = 15;
            grid.style.cssText += 'border: 1px solid black;';
            checkArrBomb(1, 225, arrNBomb);
            break;
    }

    console.log(arrNBomb);

    // generazione griglia
    grid.style.setProperty('--sezione', NumCell);

    // 3. CLICK CELLE
    // comprendo tutte le celle in una var
    const listCells = document.querySelectorAll(`.click`);

    // ad ogni click, coloro la cell cliccata di blu
    for (let i = 0; i < listCells.length; i++) {
        // seleziono la cella in base all0index
        const cell = listCells[i];

        // 4. CLICK -> BLU SE GOOD / ROSSA PERDI
        cell.addEventListener(`click`, 
            function() {
                // 5. NUMERO IN CONSOLE
                console.log(`Num Selezionato:` + ` ` + this.innerHTML);
                
                if (arrNBomb.includes(parseInt(this.innerHTML))) {
                    // 6. FINE PARTITA
                    this.classList.toggle(`clicked-lose`);
                    grid.classList.add(`no_click`);

                    txtScore.innerHTML += `Score raggiunto: ` + score;

                } else {
                    this.classList.toggle(`clicked-good`);
                    score++;
                }
                
            }
        )
    };

    }
);


// ------------------------------


// FUNCTION
// function per generare la griglia
function griglia(nCell, contenitore) {
    for (let i = 1; i <= nCell; i++) {
        contenitore.innerHTML += `<div class="cell_fluid click">${i}</div>`;
    };
}

// function per controllare che i numeri in arrNBomb non si ripetano
function checkArrBomb(min, max, arr) {
    while (arr.length < 16) {

        let newNum = nRandom(min, max);
        if (!arr.includes(newNum)) {
          arr.push(newNum);
        }

    }
}

// function per i numeri casuali
function nRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }