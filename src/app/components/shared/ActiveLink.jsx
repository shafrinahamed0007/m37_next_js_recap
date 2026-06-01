"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link 
            href={href} 
            className={`
                relative py-1 transition-all duration-300 ease-in-out
                ${isActive 
                    ? "font-bold text-primary scale-105" 
                    : "text-base-content/80 hover:text-primary hover:scale-105"
                }
            `}
        >
          
            {children}

          
            <span 
                className={`
                    absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-in-out
                    ${isActive ? "w-full" : "w-0 hover:w-full"}
                `}
            />
        </Link>
    );
};

export default ActiveLink;