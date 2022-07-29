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
