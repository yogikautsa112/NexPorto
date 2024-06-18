import Transition from "./TransitionLink";

const Navbar = () => {
    return (
        <nav className="w-full p-5 flex flex-grow place-items-center justify-between bg-[#f8f9fa] sticky top-0 bottom-0">
            <h1 className="text-3xl tracking-tight font-bold text-neutral-900">GOY</h1>
                <div className="flex gap-5">
                    <Transition href="/" label="Home"/>
                    <Transition href="/about" label="About"/>
                    <Transition href="/portofolio" label="Portofolio"/>
                </div>
        </nav>
    )
}

export default Navbar;