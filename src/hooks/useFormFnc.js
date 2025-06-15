export default function useFormFnc(array, setArray) {

    function addTask (task, chave) {
        const newTask = {
            id: Math.floor(Math.random() * 1000000),
            task,
            status: 'todo'
        }
        // todo || done

        array.unshift(newTask)
        localStorage.setItem(chave, JSON.stringify(array))
    }
   

    return { addTask }
}