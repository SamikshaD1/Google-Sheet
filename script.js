const header = document.getElementById("header");
const body = document.getElementById("body");

for (let i = 65; i <= 90; i++) {
    let char = String.fromCharCode(i);
    const bold = document.createElement("b");
    bold.innerText = char;
    header.appendChild(bold);
}


    
 function createAndAppendRow(rownumber){
    const row = document.createElement("div");
    row.className = "row";  //<div class="row"></div>

    for (let i = 64; i <= 90; i++) {
        if (i === 64) {
            //represents the S.No
            const b = document.createElement("b")
            b.innerText = rownumber;
            row.appendChild(b);
        } else {
            // represents the empty cell
            const cell = document.createElement("div");
            cell.id=  `${String.fromCharCode(i)}${rownumber}`;//c7,m8
            cell.contentEditable="true";
            cell.addEventListener("focus", onCellFocus);//cell is focus or blur
            row.appendChild(cell);
        }
    }
    body.appendChild(row); 
 }

for(let i=1;i<=100;i++){
    createAndAppendRow(i);
}

//  function onCellFocus(e){
//     console.log(e.target.id);
//  }

