import { useState } from 'react'
import logo from '/logo-name.svg'


export default function Header() {
    const [date, setNewDate] = useState(new Date())
    
    setInterval(() => setNewDate(new Date()), 1000)
    
    return(
      <header>
        {/* <h3>Result University</h3> */}
        <img src={logo} alt="лого" />
        <span>Время сейчас: {date.toLocaleTimeString()}</span>
      </header>
    )
  }
  