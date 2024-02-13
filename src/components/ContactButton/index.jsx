import { useState } from "react"
import { ContactDialog } from "../dialogs/ContactDialog"

export const ContactButton = ({ className }) => {

  const [isContactOpen, setIsContactOpen] = useState(false)

  return (<>
    <button onClick={() => setIsContactOpen(true)} className={`button ${className}`}>Contact Us</button>
    <ContactDialog isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
  </>)
}