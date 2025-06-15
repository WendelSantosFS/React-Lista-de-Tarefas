function CompleteTaskIcon ( { id, array, setArray, keyString}) {
    const indexTask = array.findIndex( (value) => value.id == id)

    return  (
        <i
            className="icons"
            onClick={ (ev)=> {
                let div = ev.currentTarget.parentElement
                const p = div.querySelector('p')

                const oldStatus = array[indexTask].status
                const statusMudando = array[indexTask].status == 'todo' ? 'done' : 'todo'
                console.log(oldStatus)
                array[indexTask].status = statusMudando

                
                setArray(array)
                localStorage.setItem(keyString, JSON.stringify(array))

                p.classList.remove(oldStatus)
                p.classList.toggle(statusMudando)
            }}
        >
            <img 
                src="/completado.png" 
                alt="Completar tarefa" 
                title="Completar tarefa"
            />
        </i>
    )
}

export default CompleteTaskIcon