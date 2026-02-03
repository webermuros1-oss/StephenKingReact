const Navbar = () => {
    return (
        <nav className="bg-[#1a1a1a] text-[#8a0303] px-6 py-4 flex justify-between items-center font-bold">

            <h1 className="text-xl font-semibold">
                STEPHEN KING
            </h1>

            <ul className="flex gap-6">
                <li className="hover:text-black cursor-pointer">
                    Home
                </li>
                <li className="hover:text-black cursor-pointer">
                    Libros
                </li>
                <li className="hover:text-black cursor-pointer">
                    Ubicación
                </li>
            </ul>

        </nav>
    )
}

export default Navbar