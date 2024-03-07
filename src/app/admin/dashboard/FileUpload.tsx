"use client";

import React, { useState, useRef, ChangeEvent } from "react";

interface FileUploadProps {
  label: string;
  onFileChange: (file: File, type: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, onFileChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onFileChange(file, label);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col w-full py-8">
      <label htmlFor={label}>{label}</label>
      <div
        className="p-4 flex w-full border-2 border-gray-300 rounded-md justify-between items-center"
        onClick={handleUploadClick}
      >
        <p className="text-[gray]">Upload</p>
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Uploaded preview"
            height={20}
            width={20}
          />
        ) : (
          <img
            height={20}
            width={20}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1708135436/utilities/Laptop_Upload_1_basxso.svg"
            alt="Upload icon"
          />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default FileUpload;
