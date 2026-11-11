import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({todos}) {

    const [description, setDescription] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        router.post('/post', {description},{onSuccess: setDescription('')})
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
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <main className="p-6 text-gray-900 flex flex-col">
                            You're logged in! Make your own todolist!

                            <form onSubmit={handleSubmit} className='flex flex-col w-[40%]'>
                                <label>Todo</label>
                                <input value={description} onChange={(e)=>{setDescription(e.target.value)}} name='todos' type="text"  placeholder='Enter todos'/>
                                <input type="submit" className='p-1 hover:cursor-pointer self-start border bg-slate-600 text-white' value={"Submit"}/>
                            </form>

                        </main>
                    </div>
                </div>
            </div>

        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.description}</li>
            ))}
        </ul>

        </AuthenticatedLayout>
    );
}
