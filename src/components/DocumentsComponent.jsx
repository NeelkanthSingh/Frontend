import { useState } from 'react';

const DocumentsComponent = () => {
    const [docs, setDocs] = useState({});

    return (
        <div>
            <div className='mt-6 mx-3 flex justify-between items-center'>
                <div> 
                    <input
                        type="text"
                        placeholder='Search Documents'
                        className='border-gray-600 border-2 px-1 py-0.5 bg-gray-100'
                    />
                </div>
                <div>Total Documents</div>
            </div>
            <div className='mt-12 mx-3 flex-wrap flex'>
                {/* Add your content here */}
            </div>
        </div>
    );
};

export default DocumentsComponent;