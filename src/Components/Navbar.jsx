import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {navLinks} from '../constants/content'
import { logo, menu, close } from "../assets"

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="p-0 lg:px-16 py-0.5 w-full flex items-center fixed top-0 bg-black border-b-2 z-20">
            <div className="w-full flex p-6 justify-between items-center mx-auto">
                <Link 
                  to='/'
                  className="flex items-center gap-2"
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0)
                  }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="flex text-white text-[18px] font-bold cursor-pointer">
                        Abimanyu&nbsp;
                        <span className="sm:block hidden">| Full Stack Developer</span>
                    </p>
                </Link>

                <ul className="list-none hidden md:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li 
                          key={link.id}
                          className={`${active === link.title ? 'text-white font-medium' : 'text-gray-300 font-extralight'} hover:text-white text-[18px]`}
                          onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{`${link.title}`}</a>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu}
                      className="w-[28px] h-[28px] object-contain cursor-pointer"
                      onClick={() => setToggle(!toggle)}
                      alt="menu" />
                </div>

                <div className="md:hidden">
                    <ul className={`${!toggle ? 'hidden' : 'flex'} p-5 black-gradient flex flex-col absolute mx-4 my-2 top-20 right-0 rounded-xl gap-4 min-w-[160px]`}>
                    {navLinks.map((link) => (
                        <li 
                          key={link.id}
                          className={`${active === link.title ? 'text-white font-medium' : 'text-gray-300 font-extralight'} hover:text-white text-[18px]`}
                          onClick={() => {
                            setToggle(!toggle)
                            setActive(link.title)
                          }
                        }
                        >
                            <a href={`#${link.id}`}>{`${link.title}`}</a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar