// represents the options in google sheet 
const activecellelement = document.getElementById("active-cell");
let activecell = null;

let activeoptionstate;


function onCellFocus(e) {
    activecell = e.target;
    activecellelement.innerText = e.target.id;
    const computedStyle = getComputedStyle(activecell);
    activeoptionstate = {
        fontfamily: computedStyle.fontFamily,
        isboldselected: computedStyle.fontweight === "600",
        isitalicselected: computedStyle.fontstyle === "italic",
        isunderlineselected: computedStyle.textDecoration === "underlined",
        textalign: computedStyle.textAlign,
        textcolor: computedStyle.color,
        backgroundcolor: computedStyle.backgroundColor,
        fontsize: computedStyle.fontSize,
    };
}
let copiedText = "";

        function copyText() {
            if (activecell) {
                copiedText = activecell.textContent;
                console.log("Text copied: " + copiedText);
            }
        }

        function pasteText() {
            if (activecell) {
                activecell.textContent = copiedText;
                console.log("Text pasted: " + copiedText);
            }
        }

 function changeFontSize() {
  
  const fontSizeInput = document.getElementById("font-size-input");
   
    const fontSize = fontSizeInput.value;
    if (activecell) {
       activecell.style.fontSize = fontSize + "px";
     }
    }
    

function onclickbold(boldbutton) {
    //when user click on bold button this function work
    boldbutton.classList.toggle("active-option");
    if (activecell) {
        const fontWeight = getComputedStyle(activecell).fontWeight;
        if (fontWeight === "400") {
            // text will be bold
            activecell.style.fontWeight = "600";
        } else {
            // text will be normal
            activecell.style.fontWeight = "400";
        }
        //activeoptionstate,isboldselected=!activeoptionstate.isboldselected;
    }
}

function onclickitalic(italicButton) {
    // When the user clicks on the italic button, this function works
    italicButton.classList.toggle("active-option");
    if (activecell) {
        const fontStyle = getComputedStyle(activecell).fontStyle;
        if (fontStyle === "normal") {
            // Text will be italic
            activecell.style.fontStyle = "italic";
        } else {
            // Text will be normal (not italic)
            activecell.style.fontStyle = "normal";
        }
    }
}

function onclickUnderline(underlineButton) {
    // When the user clicks on the underline button, this function works
    underlineButton.classList.toggle("active-option");
    if (activecell) {
        const textDecoration = getComputedStyle(activecell).textDecoration;
        if (textDecoration.includes("underline")) {
            // Remove underline
            activecell.style.textDecoration = "none";
        } else {
            // Apply underline
            activecell.style.textDecoration = "underline";
        }
    }
}
function onclickAlignLeft(LeftAlignButton) {
    LeftAlignButton.classList.toggle("active-option");
    if (activecell) {
        activecell.style.textAlign = "left";
    }
}
function onclickAlignCenter(CenterAlignButton) {
    CenterAlignButton.classList.toggle("active-option");
    if (activecell) {
        activecell.style.textAlign = "center";
    }
}


function onclickAlignRight(RightAlignButton) {
    RightAlignButton.classList.toggle("active-option");
    if (activecell) {
        activecell.style.textAlign = "right";
    }
}

function changeTextColor(textColorButton) {
    
    let Selectedcolor = textColorButton.value;
    if (activecell) {
        activecell.style.color = Selectedcolor;
        activeoptionstate.color = Selectedcolor;
    }
}

function changeBackgroundColor(textColorButton) {

    let selectedColor = textColorButton.value;
    if (activecell) {
        // Set the background color of the active cell
        activecell.style.backgroundColor = selectedColor;
        activeoptionstate.backgroundColor = selectedColor;
    }
}
document.getElementById("sum-button").addEventListener("click", calculateSum);
document.getElementById("subtract-button").addEventListener("click", calculateSubtraction);
function calculateSum() {
    if (activecell) {
        const cellText = activecell.innerText;
        const numbers = cellText.split('+').map(parseFloat);
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        activecell.innerText = sum;
    }
}

function calculateSubtraction() {
    if (activecell) {
        const cellText = activecell.innerText;
        const numbers = cellText.split('-').map(parseFloat);
        const result = numbers.reduce((acc, num, index) => {
            if (index === 0) return num;
            return acc - num;
        }, 0);
        activecell.innerText = result;
    }
}
document.getElementById("average-button").addEventListener("click", calculateAverage);
function calculateAverage() {
    if (activecell) {
        const cellText = activecell.innerText;
        const numbers = cellText.split(',').map(parseFloat);
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;
        activecell.innerText = average.toFixed(2); // Display average with 2 decimal places
    }
}