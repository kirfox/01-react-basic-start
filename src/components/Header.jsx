import { useEffect, useState } from 'react'
import logo from '/logo-name.svg'


export default function Header() {
    const [date, setNewDate] = useState(new Date())
    useEffect(() => {
      const interval = setInterval(() => setNewDate(new Date()), 1000)

      return() => {
        clearInterval(interval)
      }
    }, [])
    
    
    return(
      <header>
        {/* <h3>Result University</h3> */}
        <img src={logo} alt="лого" />
        <span>Время сейчас: {date.toLocaleTimeString()}</span>
      </header>
    )
  }
  