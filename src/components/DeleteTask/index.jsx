export default function DeleteTask (ev) {
    const currentBtn = +ev.currentTarget.parentNode.id
    let array = localStorage.getItem('react-tasks')
    array = array ? JSON.parse(array): []
    

    const principalDiv = document.getElementById('renderTasks')
    console.log(currentBtn)

    const newVarValue = array.filter( (task) => task.id !== currentBtn)
    console.log(newVarValue)
    localStorage.setItem('react-tasks', JSON.stringify(newVarValue));

    principalDiv.removeChild(ev.currentTarget.parentNode)
}

/*
    let array = localStorage.getItem('react-tasks')
    array = array ? JSON.parse(array): []
*/