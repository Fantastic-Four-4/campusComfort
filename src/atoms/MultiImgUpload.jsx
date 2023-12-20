import React, { useState } from 'react';
import './atoms.css';
import { FaUpload } from 'react-icons/fa';

function MultiImgUpload({ onFileSelect,setMultiFilePreviews,multifilePreviews }) {
  const [fileName, setFileName] = useState('');
  const [filePreview, setFilePreviews] = useState([]);
  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files)
    onFileSelect(files);
    const previews = [];

    // Iterate through each file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
  
      // Create a new FileReader
      const reader = new FileReader();
  
      // Define the onload function
      reader.onload = (e) => {
        const previewUrl = e.target.result;
        previews.push(previewUrl);
  
        // If we have previews for all files, set them in state
        if (previews.length === files.length) {
          console.log(previews)
          setMultiFilePreviews([...multifilePreviews,...previews]);
        }
      };
  
      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="animated-file-input">
      <label htmlFor="fileInput" className="file-label">
        {fileName || 'Choose multiple imgs'} <FaUpload/>
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden-input"
        onChange={handleFileChange}
        multiple
      />
      {filePreview ? (
        <div>{filePreview.map((item)=>
          <img src={item} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        )}
        </div>
        ) : (null)}
    </div>
  );
}

export default MultiImgUpload;
