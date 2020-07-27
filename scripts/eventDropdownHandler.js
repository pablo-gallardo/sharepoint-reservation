import { getTable } from ".\getTable.js";
import { getSpace } from ".\getSpace.js";
import { getDate } from ".\getDate.js";
import { resetSelection } from ".\resetSelection.js";
import { createReservation } from ".\createReservation.js";

let selectionObj = {
    "Fase": "",
    "Mesa": "",
    "Campo": "",
    "Fecha": ""
};

function eventDropdownHandler(sel){
    let selFase = document.getElementById("fase");
    let selMesa= document.getElementById("mesa");
    let selCampo = document.getElementById("campo");
    let selection = sel;
    let picture = document.getElementById("testPic");
    if(selection === selFase.value){
        resetSelection(selMesa);
        picture.src = `${url}/SiteAssets/${selection}/${selection}.jpg`;
        selectionObj.Fase = selection;
        getTable(selection);
        console.log(selectionObj);
    }else if(selection === selMesa.value){
        resetSelection(selCampo);
        let selFase = selectionObj.Fase;
        picture.src = `${url}/SiteAssets/${selFase}/Mesas/${selFase}-${selection}.jpg`;
        selectionObj.Mesa = selection;
        console.log(selectionObj);
        getSpace(selection);
    }else{
        selectionObj.Campo = `${selection}`;
        let forms = document.getElementById("formReserva");
        forms.hidden = false;
    };
};