import React from 'react';
import FirstElement from './SubElements/FirstElement';
import SecondElement from './SubElements/SecondElement';
import ThirdElement from './SubElements/ThirdElement';


function Main() {
    return (
        <div>
            <div className="flex justify-center items-center pt-5">
                <h1 className="text-2xl font-semibold">Welcome to the WORLD!</h1>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 p-5">
                <FirstElement />
                <SecondElement />
                <ThirdElement />
            </div>
        </div>
    );
}

export default Main;