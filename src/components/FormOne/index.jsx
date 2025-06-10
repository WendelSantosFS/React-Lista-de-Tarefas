import { useState } from "react"
import styles from './styles.module.css'
import useFormFnc from "../../hooks/useFormFnc"
import DeleteTaskIcon from "../DeleteTaskIcon"
import EditTaskIcon from "../EditTaskIcon"

export default function FormOne () {
    const [tasks, setTasks] = useState('')
    const chaveLocalStorage = 'react-tasks'
    
    const [arrayTasks, setArrayTasks] = useState( ()=>{
        if (localStorage.getItem(chaveLocalStorage)) {
            return JSON.parse(localStorage.getItem('react-tasks'))
        } else {
            return []
        }
    } )
    
    const { DeleteTask, addTask } = useFormFnc(arrayTasks, setArrayTasks)

    const handleSubmit = (ev) => {
        ev.preventDefault()
    
        addTask(tasks, chaveLocalStorage)
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

                                <DeleteTaskIcon array={arrayTasks} setArray={setArrayTasks} id={result.id} keyStorage={chaveLocalStorage}/>
                                
                                <EditTaskIcon array={arrayTasks} id={result.id} setArrayTasks={setArrayTasks}/>

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