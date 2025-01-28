"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
    {name:"Register", href:"/auth/register"},
    {name:"Login", href:"/auth/login"},
    {name:"Forgot Password", href:"/auth/forgot_password"}
]

export default function AuthLayout({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children,
}: { children: React.ReactNode; }) {
    const pathName = usePathname();
    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href)
                return (
                    <Link href={link.href} key={link.name} className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}>{ link.name}</Link>
                )
            })}
            
        </div>
    )
}