import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
export default function Completed({completedTodos}){
    return(
        <>
            <AuthenticatedLayout>
                <h1>Hello, World!</h1>

                {completedTodos.map((todo,index)=>(
                    <p key={index}>{todo.description}</p>
                ))}
            </AuthenticatedLayout>

        </>
    )
}
