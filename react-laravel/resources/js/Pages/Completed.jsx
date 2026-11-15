import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { router, Head } from "@inertiajs/react"
export default function Completed({completedTodos}){


    function handleDelete(id) {
        router.delete(route('todos.destroy', {id : id}))
    }
    return(
        <>
            <AuthenticatedLayout>
                <Head title="Completed"/>
                <h1>Hello, World!</h1>

                {completedTodos.map((todo,index)=>(
                    <>
                    <div className="flex">
                        <p key={index}>{todo.description}</p>
                        <button onClick={()=>handleDelete(todo.id)} className='ml-4 text-red-600 text-xl hover:cursor-pointer'>X</button>
                    </div>

                    </>

                ))}
            </AuthenticatedLayout>

        </>
    )
}
