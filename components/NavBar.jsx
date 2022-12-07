import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
const NavBar = () => {
  return (
    <div>
          <nav className="py-10 mb-12 flex justify-between">
            <BsFillMoonStarsFill />
            <ul className="flex items-center">
              <li >
                <a className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  href="#sobre-mi"
                >
                  Sobre Mí
                </a>
                <a
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  href="#habilidades"
                >
                  Habilidades
                </a>
                <a
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  href="#contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
    </div>
  )
}

export default NavBar