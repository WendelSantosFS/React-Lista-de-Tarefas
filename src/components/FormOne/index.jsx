import { useState } from "react"
import styles from './styles.module.css'
import useFunctionsBtn from "../../hooks/useFunctionsBtn"

export default function FormOne () {
    const [tasks, setTasks] = useState('')
    let arrayTasks = localStorage.getItem('react-tasks')
    arrayTasks = arrayTasks ? JSON.parse(arrayTasks) : []

    const {funcDeleteElement} = useFunctionsBtn()

    const handleSubmit = (ev) => {
        ev.preventDefault()

        const newTask = {
            id: Math.floor(Math.random() * 1000000),
            task: tasks
        }
        arrayTasks.unshift(newTask)

        console.log('nova tarefa')
        localStorage.setItem('react-tasks', JSON.stringify(arrayTasks))
        console.log(arrayTasks)
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
                            id="task"
                            value={tasks}
                            onChange={ (ev) => setTasks(ev.target.value)}
                        />
                        <button type="submit">Enviar</button>
                    </div>
                    
                </div>

                <div id="renderTasks">
                    <h2>Tarefas Pendentes:</h2>

                    {arrayTasks.length === 0 ?
                    <h3>Sem tarefas para fazer!</h3> :
                    arrayTasks.map( (result) => (
                        <div id={result.id} key={result.id}>
                            <p className={styles.completed}>{result.task}</p>

                            <button 
                                type="button"
                                onClick={ funcDeleteElement }
                            >X
                            </button>
                            <button type="button">ED</button>
                        </div>
                    ))
                    }
                </div>
                
            </form>

            
        </div>
    )
}