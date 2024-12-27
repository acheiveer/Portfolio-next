import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";

interface INavItem {
    name: string;
    link: string;
}

const NavbarMobile = ({navItems}:{navItems: INavItem[]}) => {
    const [mobileNav,setMobilenav] = useState(false);

    const toggleMobileNav = () => {
        setMobilenav(!mobileNav);
    }
    return(
        <>
        </>
    )
}

export default NavbarMobile;