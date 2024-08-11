// Filename: src/pages/app.js

// To inform next js, this is a client component
"use client";

// Import useState from 'react' library
import { useState } from "react";
import Image from 'next/image';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from "./components/Footer";

function App() {

  const pic1 = require('./img/pic1.png');
  const pic2 = require('./img/pic2.png');

  const [setVisibleOfMain, setFull] = useState(true);

  function handleClick() {
    setFull(!setVisibleOfMain);
  }

  return (
    <div>
      <div className="w-screen-2xl">
        <Menu />
        <div className="flex flex-row justify-center items-center py-2">
          <h1>Click to see the behaviour of element:</h1>
          <button className="ml-2 w-16 h-16" onClick={handleClick}>
            <Image src={setVisibleOfMain ? pic2 : pic1} className="w-12" alt='Image' />
          </button>
          <h1 className="ml-2 w-7">{setVisibleOfMain ? 'Visible' : 'Hidden'}</h1>
        </div>
        {setVisibleOfMain &&
          <Main />
        }
        <Footer />
      </div>
    </div>
  );
}

export default App;