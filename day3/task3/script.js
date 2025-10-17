
function clone(obj){
    const duplicate = structuredClone(obj)
    console.log(duplicate, obj)
}
clone({name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']})