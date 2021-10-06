// 1
let nombre = Number(prompt("ecris ton nombre : "));

console.log(isNaN(nombre));lol
switch (isNaN(nombre)) {
    case true:
        console.log("ERREUR pas un nombre");
        break;

    default:
        switch (nombre % 2 === 0) {
            case true:
                alert(`vous avez introduit un nombre pair ${nombre}`);
                break;
            case false:
                alert(`vous avez introduit un nombre impair ${nombre}`);
                break;
            default:
                break;
        }
        break;
}

// 2
let choix = Number(prompt("choisi entre 1 & 12"));

switch (choix) {
    case 1:
        alert("Vous etes en janvier");
        break;
    case 2:
        alert("Vous etes en fevrier");
        break;
    case 3:
        alert("Vous etes en mars");
        break;
    case 4:
        alert("Vous etes en avril");
        break;
    case 5:
        alert("Vous etes en mai");
        break;
    case 6:
        alert("Vous etes en juin");
        break;
    case 7:
        alert("Vous etes en juillet");
        break;
    case 8:
        alert("Vous etes en aout");
        break;
    case 9:
        alert("Vous etes en septembre");
        break;
    case 10:
        alert("Vous etes en octobre");
        break;
    case 11:
        alert("Vous etes en novembre");
        break;
    case 12:
        alert("Vous etes en decembre");
        break;
    default:
        alert("vous n'avez pas introduit le bon hciffre")
        break;
}