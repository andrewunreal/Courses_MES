function searchUniqueElem (elem) {
    const elemLowerCase = elem.toLowerCase();
    const uniqueSym = elemLowerCase.split('');
    const totalResult = uniqueSym.find(char => elemLowerCase.indexOf(char) === elemLowerCase.lastIndexOf(char))
return totalResult;
}
console.log(searchUniqueElem('paPapevaGeVmabody'))