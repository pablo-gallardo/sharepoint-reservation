// get the selected date
// hide the element and show the dropdowns
function getDate(val, obj){
    let dateReserva = (new Date(val)).toISOString()
    let dateForm = document.getElementById('dateForm')
    let selectParagraph = document.getElementById("pSelect")
    dateForm.hidden = true
    selectParagraph.hidden = false
    obj.Fecha = dateReserva  
}
exports = { getDate }