"use client";

import useDeviceContext from "@/customHooks/useDeviceContext";
import NavbarDesktop from "./NavbarDesktop";
import navItems from "@/data/navitems";

const Navbar = () => {
    const device = useDeviceContext();
    return(
        <>
         {<NavbarDesktop navItems={navItems}/>}
        </>
    );
};

export default Navbar;