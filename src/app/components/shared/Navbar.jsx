import Link from "next/link";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
    const navLinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        }, 
        {
            name: "Blogs",
            href: "/blogs"
        },
        {
            name: "Users",
            href: "/users"
        }
    ];

    const renderLinks = navLinks.map((link, index) => (
        <li key={index} className="font-bold text-xs tracking-widest uppercase">
            <ActiveLink href={link.href}>{link.name}</ActiveLink>
        </li>
    ));

    return (
        /* 🔮 মেইন নেভবার কন্টেইনার: স্টিকি গ্লাস মরফিজম */
        <div className="navbar sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 shadow-xl transition-all duration-300">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-slate-300 hover:bg-white/10 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    {/* 📱 মোবাইল মেনু গ্লাস ড্রপডাউন */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#070b12]/90 backdrop-blur-lg border border-white/10 rounded-2xl z-[1] mt-3 w-52 p-3 shadow-2xl space-y-2 text-slate-300"
                    >
                        {renderLinks}
                    </ul>
                </div>
                {/* 💎 ব্র্যান্ড লোগো */}
                <Link href="/" className="btn btn-ghost text-xl font-black text-white tracking-tight hover:bg-transparent">
                    M-37 <span className="text-[#8b5cf6]">NextJs</span>
                </Link>
            </div>

            {/* 💻 ডেক্সটপ মেনু লিংকস */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 text-slate-300">
                    {renderLinks}
                </ul>
            </div>

            {/* ⚡ অ্যাকশন বাটন */}
            <div className="navbar-end">
                <button className="px-5 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs tracking-widest rounded-xl shadow-lg shadow-purple-950/50 hover:shadow-purple-500/20 active:scale-[0.95] transition-all uppercase">
                    Connect
                </button>
            </div>
        </div>
    );
};

export default Navbar;