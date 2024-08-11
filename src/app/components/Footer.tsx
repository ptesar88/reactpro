import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="fixed bottom-0 bg-gray-950 rounded-lg shadow m-4">
                <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-50 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap ml-12 items-center text-sm font-medium text-gray-50">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;