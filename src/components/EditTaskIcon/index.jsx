function EditTaskIcon ( { array, id, setArrayTasks }) {
    return (
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
                    
                    const currentInput = document.getElementById('inputValue').value

                    const newArray = array.map( (value) => {
                        if (value.id !== id) {
                            return value
                        } else {
                            return {id: id, task: currentInput}
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
    )
}

export default EditTaskIcon