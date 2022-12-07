import Head from "next/head";
import { useCallback, useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Contacto from "../components/Contacto";
import { Scroll } from "../components/Scroll";



function Home() {
  return (
    <div>
      <Head>
        <title>Maximiliano Ide</title>

        <meta name="description" content="Simple about me page"></meta>
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 text-center">
        <NavBar />
        <Main />
        <About />
        <Skills />
        <Contacto />
        <Scroll />
      </main>


    </div>
  );

}

export default Home
