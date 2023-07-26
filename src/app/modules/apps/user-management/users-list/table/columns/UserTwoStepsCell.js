const UserTwoStepsCell = ({ two_steps }) => (
  <>
    {" "}
    {two_steps && (
      <div className="badge badge-light-success fw-bolder">Enabled</div>
    )}
  </>
)

export { UserTwoStepsCell }
