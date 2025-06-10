function CompleteTaskIcon () {
    return  (
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
    )
}

export default CompleteTaskIcon