import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import logo from '../../assets/image/24_crown_e-Photoroom.png'
export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('hidden!');
        document.getElementById('docs-card')?.classList.add('row-span-1!');
        document
            .getElementById('docs-card-content')
            ?.classList.add('flex-row!');
        document.getElementById('background')?.classList.add('hidden!');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-mist-700 relative overflow-hidden text-black/50  dark:text-white/50">

                <div id='bg' className='absolute -left-10 top-0 z-0'>
                    <div className=' shadow-2xl shadow-red-500 bg-linear-to-r from-white to-red-700 blur-2xl rounded-full size-120 '></div>
                    <div className='bg-transparent shadow-2xl shadow-red-500 rounded-full size-120 absolute top-0 -left-25'></div>
                    <div className=' shadow-md shadow-red-500 rounded-full size-120 absolute top-0 left-50'></div>

                </div>

                <div id='bg' className='absolute -right-10 bottom-0 z-0 rotate-35'>
                    <div className=' shadow-2xl shadow-red-500 bg-linear-to-r from-white to-red-700 blur-2xl rounded-full size-90 '></div>
                    <div className='animate-[spin_3s_linear_infinite]  bg-transparent shadow-2xl shadow-red-500 rounded-full size-90 absolute top-0 -left-25'></div>
                    <div className=' shadow-md shadow-yellow-300 rounded-full size-90 absolute top-0 left-50'></div>

                </div>


                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-2 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">

                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-hidden focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-hidden focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-hidden focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="flex gap-6 lg:grid-cols-2 lg:gap-8 justify-center flex-col items-center">
                                <img className='grayscale-100 size-22' src={logo} alt="" />
                                <Link
                                    href={route('dashboard')}
                                    id="docs-card"
                                    className=" underline flex w-[75%] p-0 flex-col items-start gap-6 overflow-hidden rounded-lg bg-white shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/5 transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-hidden focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    start shopping freely, be like no others
                                </Link>



                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>


            </div>
        </>
    );
}
