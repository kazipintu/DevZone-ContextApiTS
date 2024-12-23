import { useState } from "react"

export default function Condition() {

  const [isOpen, setIsOpen] = useState<boolean>();  // for boolean
  const [object, setObject] = useState({}); // for object
  const [array, setArray] = useState([]) // for array

  return (
    <div>
      Condition <br /><br />
      <button onClick={() => setIsOpen(true)}>True </button>
      <button onClick={() => setIsOpen(false)}>False </button>
    </div>
  )
}
