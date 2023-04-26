/* CAMPO_MINATO - ESERCIZIO CON BONUS */
// 1. L'utente sceglie la difficoltà e clicca su play
// 2. Che genererà una griglia di gioco quadrata in base alla difficoltà (easy 7x7 / medium 9x9 / hard 10x10)
// 3. Quando l'utente clicca su ogni cella... 
// 4. ...la cella cliccata si colora di azzurro
// 5. Emetto un messaggio in console con il numero della cella cliccata



// 1. BUTTON
const grid = document.querySelector(`.grid`);
const btnPlay = document.querySelector(`#play`);
btnPlay.addEventListener(`click`, 
function() {
    
    document.querySelector(`.grid`).innerHTML = "";
    
    // 2. GENERO GRIGLIA
    // controllo difficoltà
    let difficult = document.querySelector(`#difficult`).value.toLowerCase().replace(" ", "");
    console.log(difficult);

    let NumCell = 0;
    
        switch (difficult) {
            case `easy`:
                griglia(49, grid);
                NumCell = 7;
                break;
            case `medium`:
                griglia(81, grid);
                NumCell = 9;
                break;
            case `hard`:
                griglia(100, grid);
                NumCell = 10;
                break;
        }

        grid.style.setProperty('--sezione', NumCell);

        // 3. CLICK CELLE
        const listCells = document.querySelectorAll(`.click`);
        for (let i = 0; i < listCells.length; i++) {
            const cell = listCells[i];
            // 4. COLORARE DI AZZURRO
            cell.addEventListener(`click`, 
                function() {
                    cell.classList.toggle(`clicked`);
                    // 5. NUMERO IN CONSOLE
                    console.log(`Num Selezionato:` + ` ` + this.innerHTML);
                }
            )
        };

    }
);


// ------------------------------


// FUNCTION
function griglia(nCell, contenitore) {
    
    for (let i = 1; i <= nCell; i++) {
        contenitore.innerHTML += `<div class="cell_fluid click">${i}</div>`;
    };

}