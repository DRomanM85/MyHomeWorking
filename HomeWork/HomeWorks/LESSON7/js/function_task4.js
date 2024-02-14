//Function to delete specified symbols from a given string.
function deleteSymbolIsLine(line, symbols){
    const pattern = new RegExp(`[${symbols.join('')}]`, 'g');
    const modifiedLine = line.replace(pattern, '');
    return modifiedLine;
}