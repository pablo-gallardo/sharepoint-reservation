import { url } from ".\url.js";
// get the selected tables on the desired site
function getTable(fase){
    let enlace = `${url}/_api/web/lists/GetByTitle('${fase}')/items?$select=table`
    let tableArray = []
    function loopTables(response){
        for(let i = 0; i < response.length; i++){
            let item = response[i].Table
            tableArray.push(item)
        }
        let unique = [...new Set(tableArray)]
        unique = unique.sort((a, b) => a - b)
        console.log(unique)
        return unique
    }
    async function fetchTable(link){
        let uniqueReturn = []
        let fecthTable = await fetch(link, 
                {method: "GET", 
                headers:  { 
                    "accept": "application/json;odata=verbose"}
                })
        let respTable = await fecthTable.json()
        respTable = respTable.d
        if(respTable.__next){
            responseTable = respTable.results
            let items = loopTables(responseTable)
            items.forEach(element => uniqueReturn.push(element))
            nextURL = respTable.__next
            let fechtTableAnswer = await fetchTable(nextURL)
            return fechtTableAnswer

        }else{
            responseTable = respTable.results
            let items = loopTables(responseTable)
            items.forEach(element => uniqueReturn.push(element))
            return uniqueReturn
            }
        
    }
    let answerTable = fetchTable(enlace)
    answerTable.then(function(data){
        let tables = data
        let selTablesOpts = document.getElementById("table")
        for(let i = 0; i < tables.length; i++){
            let item = tables[i]
            let opt = document.createElement("option")
            opt.appendChild(document.createTextNode(`M${item}`))
            opt.value = `M${item}`
            selTablesOpts.appendChild(opt)
        }
    })
}
exports = { getTable }