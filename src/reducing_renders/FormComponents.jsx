export const Input = (props) => (
  <div className="form-group mb-2">
    <input className="form-control" {...props} />
  </div>
)
export const Buttons = ({ children }) => (
  <div className="form-group mb-2 d-flex justify-content-end">{children}</div>
)
export const Button = ({ onClick, text }) => {
  doSomethingThatTakesAges()
  return (
    <button type="button" className="btn btn-primary ms-2" onClick={onClick}>
      {text}
    </button>
  )
}
const doSomethingThatTakesAges = () => {
  let i = 0
  while (i < 10000000) {
    i++
  }
}
