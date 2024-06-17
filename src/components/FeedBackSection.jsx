import { useState } from "react"
import Button from "./Button/Button"

export default function FeedBackSection() {

    const [name, setName] = useState('');
    const [reason, setReason] = useState('help')
    const [hasError, sethasError] = useState(false)

    function handleNameChange(event) {
        setName(event.target.value)
        sethasError(event.target.value.trim().length === 0)
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
                    value={name} 
                    style={{
                        border: hasError ? '1px solid red' : null,
                      }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" className="control" value={reason} onChange={event => setReason(event.target.value)}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button disabled={hasError}>
                Отправить
                </Button>

            </form>
        </section>
        
    )
}