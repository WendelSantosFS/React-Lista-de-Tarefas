import { useState, useEffect } from "react"
import styles from './styles.module.css'

export default function FormOne () {
    const [tasks, setTasks] = useState('')

    const [arrayTasks, setArrayTasks] = useState( ()=>{
        if (localStorage.getItem('react-tasks')) {
            return JSON.parse(localStorage.getItem('react-tasks'))
        } else {
            return []
        }
    } )
    
    function DeleteTask (ev) {
        const currentBtn = +ev.currentTarget.parentNode.id
        let array = localStorage.getItem('react-tasks')
        array = array ? JSON.parse(array): []

        const newVarValue = array.filter( (task) => task.id !== currentBtn)
        localStorage.setItem('react-tasks', JSON.stringify(newVarValue));

        setArrayTasks(newVarValue)
    }    

    const handleSubmit = (ev) => {
        ev.preventDefault()

        const newTask = {
            id: Math.floor(Math.random() * 1000000),
            task: tasks
        }
        arrayTasks.unshift(newTask)

        localStorage.setItem('react-tasks', JSON.stringify(arrayTasks))
        return setTasks('')
    }

    

    return (
        <div id={styles.formDefault}>
            <h1>Lista de Tarefas</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task">Tarefa:</label>

                    <div className={styles.inputTop}>
                        <input
                            type="text"
                            required
                            id="task"
                            value={tasks}
                            onChange={ (ev) => setTasks(ev.target.value)}
                        />
                       
                        <button type="submit">
                            <img src="/mais.png" alt="" title="Adicionar tarefa"/>
                        </button>

                    </div>
                    
                </div>

                <div id="renderTasks">
                    <h2>Tarefas Pendentes:</h2>

                    {
                        arrayTasks.length === 0 ?
                        <h3>Sem tarefas para fazer!</h3> :
                        arrayTasks.map( (result) => (
                            <div className={styles.divTasks} id={result.id} key={result.id}>

                                    <p>{result.task}</p>
                                
                                    <i className="icons" onClick={ DeleteTask }>
                                        <img src="/excluir.png" alt="Excluir tarefa" title="Excluir tarefa"/>
                                    </i>

                                    <i
                                        className="icons"
                                        onClick={ (ev) => {
                                            const principal = ev.currentTarget.parentElement
                                            const p = principal.querySelector('p')
                                            const valueP = p.innerText
                                            
                                            const icons = principal.querySelectorAll('.icons')

                                            p.classList.toggle('none')
                                            icons.forEach( (btn) => btn.classList.toggle('none'))

                                            const input = document.createElement('input')
                                            input.id = 'inputValue'
                                            input.type = 'text'
                                            input.value = valueP
                                            input.focus()

                                            const btnCancel = document.createElement('i')
                                            const imgCancel = document.createElement('img')
                                            imgCancel.src = '/cancelar.png'
                                            imgCancel.alt = 'Cancelar alteração'
                                            imgCancel.title = 'Cancelar alteração'
                                            imgCancel.className = 'cancelAndSave'
                                            btnCancel.onclick = ()=> {
                                                p.classList.toggle('none')
                                                icons.forEach( (btn) => btn.classList.toggle('none'))

                                                input.remove()
                                                btnCancel.remove()
                                                btnSave.remove()
                                            }

                                            const btnSave = document.createElement('i')
                                            const imgSave = document.createElement('img')
                                            imgSave.src = '/completado.png'
                                            imgSave.alt = 'Salvar alteração'
                                            imgSave.title = 'Salvar alteração'
                                            imgSave.className = 'cancelAndSave'
                                            btnSave.onclick = () => {
                                                const valueOld = valueP
                                                let array = localStorage.getItem('react-tasks')
                                                array = array ? JSON.parse(array) : []

                                                function indexArray (value, index, array) {
                                                    return value.task === valueOld
                                                }
                                                
                                                const indexOldValue = Number(array.findIndex(indexArray))
                                                const currentInput = document.getElementById('inputValue').value

                                                const newTask = {
                                                    id: result.id, task: currentInput
                                                }

                                                const newArray = array.map( (value) => {
                                                    if (value.id !== result.id) {
                                                        return value
                                                    } else {
                                                        return {id: result.id, task: currentInput}
                                                    }
                                                } )

                                                localStorage.setItem('react-tasks', JSON.stringify(newArray))
                                                setArrayTasks(newArray)
                                                
                                                p.classList.toggle('none')
                                                icons.forEach( (btn) => btn.classList.toggle('none'))

                                                input.remove()
                                                btnCancel.remove()
                                                btnSave.remove()
                                                

                                            }

                                            btnCancel.appendChild(imgCancel)
                                            btnSave.appendChild(imgSave)

                                            principal.append(input, btnCancel, btnSave)
                                            
                                        } }
                                    >
                                        <img 
                                            src="/editar.png" 
                                            alt="Editar tarefa" 
                                            title="Editar tarefa"
                                        />
                                    </i>

                                    <i
                                        className="icons"
                                        onClick={ (ev)=> {
                                            let div = ev.currentTarget.parentElement
                                            const p = div.querySelector('p')
                                            p.classList.toggle('pCompleted')
                                        }}
                                    >
                                        <img 
                                            src="/completado.png" 
                                            alt="Completar tarefa" 
                                            title="Completar tarefa"
                                        />
                                    </i>  
                            </div>
                            )
                        )
                    }
                </div>
                
            </form>

            
        </div>
    )
}


/*
    const indexOldValue = array.indexOf( (value)=> value.task === valueOld) + 1
*/