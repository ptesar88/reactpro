import React from 'react';

function FirstElement() {
    return (
        <div>
            <div className="bg-purple-700 p-5 rounded-lg border border-purple-950">
                <h1 className="text-white font-bold">First Element</h1>
                <span className="flex flex-wrap text-white italic mb-2">This is the first element</span>
                <span className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
            </div>
        </div>
    );
}

export default FirstElement;