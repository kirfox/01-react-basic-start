import { useRef, useState } from "react"
import Button from "./Button/Button"

function StateVsRf() {
    const input = useRef()
    const [val, setVal] = useState(false)

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setVal(true)
        }
    }

    return (
        <div>
            <h3>Input value: {val && input.current.value}</h3>
            <input type="text" className="control" 
            ref={input} onKeyDown={handleKeyDown}
            />
        </div>
    
    )
    
}


export default function FeedBackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })
    // const [name, setName] = useState('');
    // const [reason, setReason] = useState('help')
    // const [hasError, sethasError] = useState(false)

    function handleNameChange(event) {
        // setName()
        // sethasError(event.target.value.trim().length === 0)
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0
        })
        )
    }


    return (
        <section>
            <h3>Обратная связь</h3>

            <form style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Ваше имя</label>
                <input  
                    className="control" 
                    type="text" 
                    id="name" 
                    value={form.name} 
                    style={{
                        border: form.hasError ? '1px solid red' : null,
                      }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" className="control" value={form.reason} onChange={event => setForm((prev) => ({...prev, reason: event.target.value}))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button disabled={form.hasError}>
                Отправить
                </Button>

            </form>

            <StateVsRf />
        </section>
        
    )
}