"use-client"

import { CustomLink } from './ui/CustomNavLink';
import {motion} from 'framer-motion';
import { GithubIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from './Icons';

interface INavItems {
    name: string;
    link: string;
}

const NavbarDesktop = ({navItems} : {navItems: INavItems[]}) => {
    return(
        <div className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <div>
                <div>
                    {navItems.map((item, index) => (
                        <CustomLink key={index} name={item.name} link={item.link}/>
                    ))}
                </div>
            </div>
            <nav className="flex items-center justify-center gap-8 flex-wrap">
                         <motion.a
                            href="https://github.com/acheiveer"
                            target="_blank"
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 1 }}
                           
                          >
                            <GithubIcon className="w-6" />
                          </motion.a>
                          <motion.a
                            href="https://www.linkedin.com/in/prabhakr4u/"
                            target="_blank"
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 1 }}
                           
                          >
                            <LinkedInIcon className="w-6" />
                          </motion.a>
                          <motion.a
                            href="https://x.com/prabhakr4u"
                            target="_blank"
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 1 }}
                           
                          >
                            <TwitterIcon className="w-6" />
                          </motion.a>
                          <motion.a
                            href="https://www.instagram.com/Prabhakr4u/"
                            target="_blank"
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 1 }}
                           
                          >
                            <InstagramIcon className="w-8" />
                          </motion.a>
            </nav>
        </div>
    )
}

export default NavbarDesktop;