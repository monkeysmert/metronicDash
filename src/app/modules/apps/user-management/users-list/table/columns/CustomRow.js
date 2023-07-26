// @ts-nocheck
import clsx from "clsx"

const CustomRow = ({ row }) => (
  <tr {...row.getRowProps()}>
    {row.cells.map(cell => {
      return (
        <td
          {...cell.getCellProps()}
          className={clsx({
            "text-end min-w-100px": cell.column.id === "actions"
          })}
        >
          {cell.render("Cell")}
        </td>
      )
    })}
  </tr>
)

export { CustomRow }
