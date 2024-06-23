import React from 'react';

const AdminDashboard = () => {
  const handleButtonClick = () => {
    const fileUrl = 'https://d.docs.live.net/a9265fc845e73a5f/Documents/excel2.xlsx';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'excel2.xlsx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="container d-flex flex-column align-items-center vh-100">
      <h1 className="text-center mx-auto justify-content-center border-2 p-2 border-cyan-300 mt-4 bg-cyan-100 rounded-lg">Jaldhaara Foundation</h1>
      <button className="btn btn-outline-primary text-lg mt-3" onClick={handleButtonClick}>DONORS</button>
      <div className="mt-auto mb-4">
        <button className="btn btn-outline-primary text-lg" onClick={handleButtonClick}>Download</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
