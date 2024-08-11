import React from 'react';
import { useState } from "react";
import MainConditions from '../Conditions/MainConditions';

function ThirdElement() {
    const [setVisibleOfMainConditions, setCondtition] = useState(false);

    function handleClick() {
        setCondtition(!setVisibleOfMainConditions);
    }
    return (
        <div>
            <div className="bg-purple-700 p-5 rounded-lg border border-purple-950">
                <h1 className="text-white font-bold">Third Element</h1>
                <span className="flex flex-wrap text-white italic mb-2">This is the third element</span>
                <span className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
            </div>
            <label className="flex items-center justify-center cursor-pointer my-4">
                <input type="checkbox" value="" onChange={handleClick} className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">I agree</span>
            </label>
            {setVisibleOfMainConditions &&
                <MainConditions />
            }
        </div>
    );
}

export default ThirdElement;