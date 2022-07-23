import { useState } from "react"

type Props = {
  text: string
}

const FormSubmitButton = ({ text }: Props) => {
  const [hover, setHover] = useState(false)

  const buttonStyle = hover ? "btn-primary" : "btn-default"

  return (
    <button
      type="submit"
      style={{ transition: "all 1s ease-in-out" }}
      className={"btn " + buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  )
}

export default FormSubmitButton
