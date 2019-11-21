export const filterArrayByArgument = (list, argument, key) => list.filter(data => data[key].toLowerCase().startsWith(argument.toLowerCase()))

export const alphabeticalOrder = (list, key) => list.sort((a,b) => a[key].localeCompare(b[key]))