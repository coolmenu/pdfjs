module.exports = function(doc, { lorem })  {
  const table = doc.table({
    backgroundColor: 0xeeeeee,
    widths: [null, null, null],
    borderWidth: 1,
    borderVerticalWidths: [2, 4, 6, 8],
  })

  {
    const row = table.row()
    row.cell('First', { fontSize: 20, padding: 10 })
    row.cell('Second', { fontSize: 20, padding: 10 })
    row.cell('Third', { fontSize: 20, padding: 10 })
  }

  {
    const row = table.row()
    row.cell('First', { fontSize: 20, padding: 10, colspan: 2 })
    row.cell('Second', { fontSize: 20, padding: 10 })
  }

  {
    const row = table.row()
    row.cell('First', { fontSize: 20, padding: 10 })
    row.cell('Second', { fontSize: 20, padding: 10 })
    row.cell('Third', { fontSize: 20, padding: 10 })
  }

  {
    const row = table.row()
    row.cell('First', { fontSize: 20, padding: 10 })
    row.cell('Second', { fontSize: 20, padding: 10, colspan: 2 })
  }

  {
    const row = table.row()
    row.cell('First', { fontSize: 20, padding: 10, colspan: 3 })
  }

  {
    const row = table.row()
    row.cell('First', { fontSize: 20, padding: 10 })
    row.cell('Second', { fontSize: 20, padding: 10 })
    row.cell('Third', { fontSize: 20, padding: 10 })
  }
}

