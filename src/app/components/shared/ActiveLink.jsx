"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({href, children}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href}
        className={isActive ? "active font-bold text-primary underline underline-offset-2" : ""}>
            {children}
        
        </Link>
    );
};

export default ActiveLink;