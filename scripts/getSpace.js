import { url } from ".\url.js";
// get the available spaces on the selected site and table
function getSpace(table, phase, date){
    let respSpaceReservaTitle = []
    let tableChosen = table
    let listTable = phase
    let fechaReserva = date
    let returnValue = []
    async function fetchSpace(){
        let fecthSpaceNReserva = await fetch(`${url}/_api/web/lists/GetByTitle('${listTable} Calendar')/items?$select=Title&$filter=EventDate eq '${fechaReserva}' and Location eq '${listTable}-${tableChosen}'`, 
                {method: "GET", 
                headers:  { 
                    "accept": "application/json;odata=verbose"}
                })
        tableChosen = tableChosen.replace("M","")

        let fecthSpaceTitle = await fetch(`${url}/_api/web/lists/GetByTitle('${listTable}')/items?$select=Space&$filter=Table eq '${tableChosen}'`, 
        {method: "GET", 
        headers:  { 
            "accept": "application/json;odata=verbose"}
        })

        let respSpaceReserva = await fecthSpaceNReserva.json()
        let respSpaceTitle = await fecthSpaceTitle.json()
        respSpaceReserva = respSpaceReserva.d.results
        for(let itemIndex in respSpaceReserva){
            respSpaceReservaTitle.push(respSpaceReserva[itemIndex].Title)
        }
        respSpaceTitle = respSpaceTitle.d.results
        for(let item in respSpaceTitle){
            let space = respSpaceTitle[item].Space
            let filterValue = `Space ${Space}`
            console.log(filterValue)
            if(respSpaceReservaTitle.includes(filterValue)){
                continue
            }else{
                returnValue.push(space)
            }            
        }
        console.log(returnValue)
        return returnValue
    }

    let answer =  fetchSpace()
    answer.then(function(data){
        space = data
        let selSpaceOpts = document.getElementById("space")
        for(let i in space){
            let spaceTitle = space[i]
            let opt = document.createElement("option")
            opt.appendChild(document.createTextNode(`${spaceTitle}`))
            opt.value = `Space ${spaceTitle}`
            selSpaceOpts.appendChild(opt)
            }
        }
    )
}
exports = { getSpace }