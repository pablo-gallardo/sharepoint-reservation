// each time the user selects a new site or space, this function is used to
// delete the already existing options on the dropdowns
function resetSelect(object){
    let max = object.options.length
    console.log(max)
    if(max > 1){
        while(max > 1){
        object.removeChild(object.options[1])
        max--
        }

    }
}
exports = { resetSelect }