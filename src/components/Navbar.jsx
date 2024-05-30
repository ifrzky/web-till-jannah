const Nav = () => {
    return (
        <div className="">
            <nav className="flex justify-between items-center">
                <div className="logo text-2xl">
                    <h1>Till Jannah</h1>
                </div>
                <div className="menu">
                    <ul className="flex flex-row justify-between gap-5 items-center">
                        <li className="mx-2 text-2xl"><button>Home</button></li>
                        <li className="mx-2 text-2xl"><button>About</button></li>
                        <li className="mx-2 text-2xl"><button>Zakat Calc</button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;