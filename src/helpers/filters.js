export const filterArrayByArgument = (columnData, argument) => {
    const columnFiltered = columnData.filter(data => {
        return data.startsWith(argument)
    })

    return columnFiltered
}