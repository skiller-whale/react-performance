import { useState } from "react"

export const Input = (props) => (
  <div className="form-group mb-2">
    <input className="form-control" {...props} />
  </div>
)
export const Buttons = ({ children }) => (
  <div className="form-group mb-2 d-flex justify-content-end">{children}</div>
)
export const Button = ({ onClick, text }) => {
  const [hover, setHover] = useState(false)
  return (
    <button
      type="button"
      className={`ms-2 btn ${hover ? "btn-success" : "btn-primary"}`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  )
}
