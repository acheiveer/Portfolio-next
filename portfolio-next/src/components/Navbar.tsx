"use client";

import useDeviceContext from "@/customHooks/useDeviceContext";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import navItems from "@/data/navitems";

const Navbar = () => {
    const device = useDeviceContext();
    return(
        <>
         {device?.isDesktop ? (<NavbarDesktop navItems={navItems}/>):(<NavbarMobile navItems={navItems}/>)}
        </>
    );
};

export default Navbar;