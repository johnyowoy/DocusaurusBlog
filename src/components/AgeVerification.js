import React, { useState } from 'react';

function AgeVerification({ children }) {
  const [isVerified, setIsVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(100), (val, index) => currentYear - index);

  const handleVerification = (birthYear) => {
    const age = currentYear - birthYear;
    if (age >= 18) {
      setIsVerified(true);
    } else {
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5">
      {isVerified ? (
        children
      ) : (
        <div>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">本站文章內容需滿十八歲方可瀏覽</h1>
              <p className="card-text">
                依「兒童及少年福利與權益保障法」規定，因本站刊載含有不宜兒少瀏覽之內容，若您尚未年滿十八歲，請離開此網頁。
                若您已滿十八歲，亦不可將本站之內容派發、傳閱、出售、出租、交給或借予年齡未滿十八歲的人士瀏覽，
                或將本站內容向該人士出示、播放或放映。
              </p>
              <h2 className="card-subtitle mb-2">請選擇您的出生年份進行驗證</h2>
              <p className="card-text">Please select your birth year:</p>
              <div className="input-group mb-3">
                <select className="form-select" id="birthYear">
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <button className="btn btn-primary" onClick={() => handleVerification(document.getElementById("birthYear").value)}>
                  Verify
                </button>
              </div>
            </div>
          </div>

          {/* Bootstrap Modal */}
          <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">年齡驗證失敗</h5>
                  <button type="button" className="btn-close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                  <p>您必須年滿18歲以上才可以瀏覽文章</p>
                  <p>You must be at least 18 years old to view this content.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AgeVerification;