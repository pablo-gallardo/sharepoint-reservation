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