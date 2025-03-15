export default function useFormFnc() {
    
    function DeleteTask (id, array, chaveLocal, setArray) {
        const newArray = array.filter( (value) => value.id !== id)

        localStorage.setItem(chaveLocal, JSON.stringify(newArray))
        console.log('Chamando função DELETE')
        console.log(newArray)

        setArray(newArray);
    }

    return { DeleteTask }
}