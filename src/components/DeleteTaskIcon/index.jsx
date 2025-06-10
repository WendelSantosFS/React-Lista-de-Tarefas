import useFormFnc from "../../hooks/useFormFnc"

function DeleteTask (array, setArray, id, chaveLocal) {
    const newArray = array.filter( (value) => value.id !== id)

    localStorage.setItem(chaveLocal, JSON.stringify(newArray))

    setArray(newArray);
}

function DeleteTaskIcon ( { array, setArray, id, keyStorage} ) {

    return (
        <>
             <i
                className="icons"
                onClick={
                    () => DeleteTask(array, setArray, id, keyStorage)
                }
            >
                <img src="/excluir.png" alt="Excluir tarefa" title="Excluir tarefa"/>
            </i>
        </>
    )
}

export default DeleteTaskIcon