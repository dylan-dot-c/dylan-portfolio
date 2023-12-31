import Link from "next/link";

function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full z-50 shadow-md w-100 text-white bg-slate-900 bg-opacity-40 backdrop-blur-lg p-5 '>
            <div className='max-w-6xl flex justify-between items-center mx-auto'>
                <div>
                    <Link href='/'>
                        <h1>Dylan Heslop</h1>
                    </Link>
                </div>
                <div>
                    <ul className=' gap-5 text-orange-400 list-none hidden md:flex'>
                        <li>About</li>
                        <li>Profile</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
