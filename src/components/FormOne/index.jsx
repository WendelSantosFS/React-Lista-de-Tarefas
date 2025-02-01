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

        const principalDiv = document.getElementById('renderTasks')
        console.log(currentBtn)

        const newVarValue = array.filter( (task) => task.id !== currentBtn)
        console.log(newVarValue)
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
                            required
                            id="task"
                            value={tasks}
                            onChange={ (ev) => setTasks(ev.target.value)}
                        />
                        <button type="submit">Enviar</button>
                    </div>
                    
                </div>

                <div id="renderTasks">
                    <h2>Tarefas Pendentes:</h2>

                    {
                        arrayTasks.length === 0 ?
                        <h3>Sem tarefas para fazer!</h3> :
                        arrayTasks.map( (result) => (
                            <div className={styles.divTasks} id={result.id} key={result.id}>
                                <p className=''>{result.task}</p>
                
                                <button
                                    type="button"
                                    onClick={ DeleteTask }
                                >X
                                </button>
                                <button type="button">ED</button>
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
    let arrayTasks = localStorage.getItem('react-tasks')
    arrayTasks = arrayTasks ? JSON.parse(arrayTasks) : []


    const [arrayTasks, setArrayTasks] = useState(
        arrayTasks = setArrayTasks(JSON.parse(arrayTasks)): []
    )
*/