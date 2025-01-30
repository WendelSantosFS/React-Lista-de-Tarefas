import DeleteTask from "../DeleteTask"

export default function RenderTask ({ array }) {
    return (    
        array.map( (result) => (
            <div id={result.id} key={result.id}>
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
    )
}