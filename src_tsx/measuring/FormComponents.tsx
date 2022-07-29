import { useState } from "react"

type InputProps = {
  placeholder: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = (props: InputProps) => (
  <div className="form-group mb-2">
    <input className="form-control" {...props} />
  </div>
)

type ButtonsProps = {
  children: React.ReactNode
}

export const Buttons = ({ children }: ButtonsProps) => (
  <div className="form-group mb-2 d-flex justify-content-end">{children}</div>
)

type ButtonProps = {
  text: string
  onClick: () => void
}

export const Button = ({ onClick, text }: ButtonProps) => {
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
