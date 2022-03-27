import * as React from "react";
import logo from "./LOGO/donaki-logo-positive.svg";
import chevronRight from "./LOGO/icon/chevron-right.svg";
import menu from "./LOGO/icon/menu.svg";
import MainContent from './mainContent';
import FooterContent from './FooterContent';

function App() {
    const [menuShow, setMenuShow] = React.useState(false);
    const [langShow, setLangShow] = React.useState(false);

    return (
        <div className="App">
            <header className="App-header px-5">
                <nav className="font-nunito uppercase tex-sm bg-white">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex item-center space-x-4">
                            <div>
                                <a href="#">
                                    <img src={logo} alt="logo" width="100" height="30" />
                                </a>
                            </div>
                            <div className="xs:flex item-center space-x-3 hidden">
                                <a href="#">Home</a>
                                <a href="#">
                                    <div className="flex flex-row-reverse">
                                        <img src={chevronRight} alt="icon" width="8" height="12" />
                                        <label className="mr-1">Link</label>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="flex flex-row-reverse">
                                        <img src={chevronRight} alt="icon" width="8" height="12" />
                                        <label className="mr-1">Link</label>
                                    </div>
                                </a>
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                        <div>
                            <div className="xs:flex flex-row-reverse hidden">
                                <img src={chevronRight} alt="icon" width="8" height="12" />
                                <label className="mr-1">En</label>
                            </div>
                            <div className="xs:flex space-x-4 hidden">
                                <button className="border-2 border-purple-500 py-0.5 rounded w-28">Login</button>
                                <button className="border-2 border-purple-500 bg-purple-500 py-0.5 rounded w-28 text-white">
                                    Register
                                </button>
                            </div>
                            <div className="xs:hidden flex justify-between space-x-3">
                                <div className="relative">
                                    <div className="flex flex-row-reverse" onClick={() => setLangShow(!langShow)}>
                                        <img src={chevronRight} alt="icon" width="8" height="12" />
                                        <label className="mr-1">En</label>
                                    </div>
                                    {langShow && (
                                        <div className="absolute bg-white shadow-md rounded right-0 w-28 xs:hidden">
                                            <a href="#" className="block py-1 px-3">
                                                En - <span className="normal-case">English</span>
                                            </a>
                                            <a href="#" className="block py-1 px-3">
                                                Fr - <span className="normal-case">French</span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div onClick={() => setMenuShow(!menuShow)}>
                                    <img src={menu} alt="icon" width="24" height="24" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {menuShow && (
                        <div className="xs:hidden block bg-stone-100 px-3 border-b-2 mb-4">
                            <a href="#" className="block py-1 text-sm">
                                Home
                            </a>
                            <a href="#" className="block py-1 text-sm">
                                <div className="flex justify-between">
                                    <label>Link</label>
                                    <img src={chevronRight} alt="icon" width="8" height="12" />
                                </div>
                            </a>
                            <a href="#" className="block py-1 text-sm">
                                <div className="flex justify-between">
                                    <label>Link</label>
                                    <img src={chevronRight} alt="icon" width="8" height="12" />
                                </div>
                            </a>
                            <a href="#" className="block py-1 text-sm">
                                Contact Us
                            </a>
                        </div>
                    )}
                    {menuShow && (
                        <div className="xs:hidden block px-2 space-y-2">
                            <button className="block w-full border-2 border-purple-500 py-0.5 rounded-lg w-28">
                                Login
                            </button>
                            <button className="block w-full border-2 border-purple-500 bg-purple-500 py-0.5 rounded-lg w-28 text-white">
                                Register
                            </button>
                        </div>
                    )}
                </nav>
            </header>
            <main>
                <div className="">
                  <MainContent/>
                </div>
            </main>
            <footer className="bg-black">
                <FooterContent/>
            </footer>
        </div>
    );
}

export default App;
