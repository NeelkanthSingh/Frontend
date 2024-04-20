import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../store/atoms/authAtom';
import axios from '../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';

const DocumentComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useRecoilValue(authAtom);
    const [documents, setDocuments] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/docs/getAll', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${auth?.accessToken}`
                    }
                });
                setDocuments(response.data.documents);
            } catch (error) {
                navigate("/signin", { state: { from: location } });
            }
        };

        fetchData();
    }, []);

    const filteredDocuments = documents.filter(doc =>
        doc.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search documents"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="text-lg">Total documents: {documents.length}</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {filteredDocuments.map((doc, index) => (
                    <div key={index} className="border p-4 rounded-lg">
                        <h2 className="font-bold mb-2">{doc.name}</h2>
                        <p>{doc.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentComponent;
