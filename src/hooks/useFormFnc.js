export default function useFormFnc(array, setArray) {
    
    function DeleteTask (id, chaveLocal) {
        const newArray = array.filter( (value) => value.id !== id)

        localStorage.setItem(chaveLocal, JSON.stringify(newArray))

        setArray(newArray);
    }

    function addTask (task, chave) {
        const newTask = {
            id: Math.floor(Math.random() * 1000000),
            task: task
        }

        array.unshift(newTask)
        localStorage.setItem(chave, JSON.stringify(array))
    }
   

    return { DeleteTask, addTask }
}