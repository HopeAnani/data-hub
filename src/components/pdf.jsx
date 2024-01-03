import React from 'react';

const Pdf = ({ title, downloadLink }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = downloadLink;
        link.download = `${title}.pdf`; // You can customize the downloaded file name
        link.click();
      };
    
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 border rounded shadow-lg bg-white mb-4">
      {/* Title */}
      <div className="flex-grow mb-2 sm:mb-0 sm:mr-2">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      {/* Download Button */}
      <div>
        <button
          className="bg-[#173e26] text-white p-2 px-4 rounded hover:bg-[#112e1c]"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Pdf;
