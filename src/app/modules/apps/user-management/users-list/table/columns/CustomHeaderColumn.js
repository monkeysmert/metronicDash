const CustomHeaderColumn = ({ column }) => (
  <>
    {column.Header && typeof column.Header === "string" ? (
      <th {...column.getHeaderProps()}>{column.render("Header")}</th>
    ) : (
      column.render("Header")
    )}
  </>
)

export { CustomHeaderColumn }
