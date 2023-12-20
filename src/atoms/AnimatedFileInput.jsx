import React, { useState } from 'react';
import './atoms.css';
import Upload from 'antd/es/upload/Upload';
import { FaUpload } from 'react-icons/fa';

function AnimatedFileInput({ onFileSelect,setFilePreviews }) {
  const [fileName, setFileName] = useState('');
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
    const reader = new FileReader();
  
    reader.onload = (e) => {
      const previewUrl = e.target.result;
      setFilePreviews(previewUrl);
    };
  
    reader.readAsDataURL(file);
  };

  return (
    <div className="animated-file-input">
      <label htmlFor="fileInput" className="file-label">
        {fileName || 'Choose a file'} <FaUpload/>
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden-input"
        onChange={handleFileChange}
      />
      
    </div>
  );
}

export default AnimatedFileInput;
