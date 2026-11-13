import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import cloud from '../../images/cloud.png'

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-linear-to-br from-browner to-amber-900 pt-6 sm:justify-center sm:pt-0">

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-xl sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
