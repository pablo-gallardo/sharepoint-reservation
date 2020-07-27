import { url } from ".\url.js";

// where the magic happens
// this will create the reservation
function createReservation(obj){
    let submitReserva = document.getElementById("submitReserva")
    submitReserva.setAttribute("onclick", "return false")
    submitReserva = document.getElementById("submitReserva")
    console.log(submitReserva)
        let listTable = obj.Fase
        async function getApi(){
            let api = await fetch(`${url}/_api/web/lists/GetByTitle('${listTable} Calendar')?$select=ListItemEntityTypeFullName`, 
                    {method: "GET", headers:  { 
                        "accept": "application/json;odata=verbose"}
                    })
            let resp = await api.json()
            let respEntityName = resp.d.ListItemEntityTypeFullName
            return respEntityName
        }
    
        let answer = getApi()
        answer.then(function(data){
            let listItemType = data
            let listItemCampo = obj.Campo
            let listItemDate = obj.Fecha
            let listItemMesa = obj.Mesa
            let listItemEndDate = listItemDate.replace("00:00:00.000", "22:59:59.000")
            let listItemLocation = `${listTable}-${listItemMesa}`
            let listItemName = document.getElementById("fname").value
            let listItemMudid = document.getElementById("fmudid").value
            let newItem = {
                "__metadata": {
                    "type": listItemType
                },
                "Title": listItemCampo,
                "EventDate": listItemDate,
                "EndDate": listItemEndDate,
                "Location": listItemLocation,
                "Description": listItemName,
                "Mudid": listItemMudid
                }
            let bodyJSON = JSON.stringify(newItem)
            let bodyLenght = bodyJSON.length;
            fetch(`${url}/_api/web/lists/GetByTitle('${listTable} Calendar')/items`,
            { method: "POST",
            headers: {
                "accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
                "Content-Length": `${bodyLenght}`,
                "X-RequestDigest": $("#__REQUESTDIGEST").val()
            }, 
            body: bodyJSON
        })
    })
}

exports = {createReservation}