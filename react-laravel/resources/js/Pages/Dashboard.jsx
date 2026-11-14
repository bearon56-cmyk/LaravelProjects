import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm, Link } from '@inertiajs/react';
export default function Dashboard({todos}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        description: '',
    });

    function handleDelete(id) {
        router.delete(route('todos.destroy', {id : id}))
    }

    function handleSubmit(e){
        e.preventDefault()
        post('/post', {onSuccess:() => reset()})
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-xs sm:rounded-lg">
                        <main className="p-6 text-gray-900 flex flex-col">
                            You're logged in! Make your own todolist!

                            <form onSubmit={handleSubmit} className='flex flex-col w-[40%]'>
                                <label>Todo</label>
                                <input onChange={(e)=>{setData('description',e.target.value)}} value={data.description} name='todos' type="text"  placeholder='Enter todos'/>
                                {errors.description && <p className='text-red-600'>{errors.description}</p>}
                                <input type="submit" className='p-1 hover:cursor-pointer self-start border bg-slate-600 text-white' value={"Submit"}/>
                            </form>

                        </main>
                    </div>
                </div>
            </div>

        <Link href={'/destroyAll'} method='delete' className='hover:cursor-pointer mb-3'>Delete All</Link>
        <ul>
            {todos.map((todo) => (
                <div className='flex' key={todo.id}>
                    <li>{todo.description}</li>
                        <button onClick={()=>handleDelete(todo.id)} className='ml-4 text-red-600 text-xl hover:cursor-pointer'>X</button>
                </div>

            ))}
        </ul>

        </AuthenticatedLayout>
    );
}
