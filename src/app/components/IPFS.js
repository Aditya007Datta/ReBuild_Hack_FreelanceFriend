"use client"
import React, { useState } from 'react';
import axios from 'axios';

const IPFSUploadComponent = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('https://rpc.particle.network/ipfs/upload', formData, {
                auth: {
                    username: '5e076585-5a25-43ef-b615-1f71cefa9486',
                    password: 'sm38fVUNBeFWgPKLtiOwKRcGkJtJJXBTECoPROvh',
                },
            });

            const cid = response.data.cid;
            alert(`Successfully uploaded. CID: ${cid}`);
        } catch (error) {
            alert('Upload failed.');
            console.error(error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileInputChange} />
            <button onClick={handleFileUpload}>Upload to IPFS</button>
        </div>
    );
};

export default IPFSUploadComponent;
