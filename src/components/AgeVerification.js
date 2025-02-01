// 創建一個年齡驗證組件
import React, { useState } from 'react';

function AgeVerification({ children }) {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (age) => {
    if (age >= 18) {
      setIsVerified(true);
    } else {
      alert("您必須年滿18歲以上才可以瀏覽文章\nYou must be at least 18 years old to view this content.");
    }
  };

  return (
    <div>
      {isVerified ? (
        children
      ) : (
        <div>
          <h1>本站內容需滿十八歲方可瀏覽。</h1>
          <p>依「兒童及少年福利與權益保障法」規定，因本站刊載含有不宜兒少瀏覽之內容，若您尚未年滿十八歲，請離開此網頁。
          若您已滿十八歲，亦不可將本站之內容派發、傳閱、出售、出租、交給或借予年齡未滿十八歲的人士瀏覽，或將本站內容向該人士出示、播放或放映。</p>
          <h2>請輸入您的年齡進行驗證。Age Verification.</h2>
          <p>Please enter your age:</p>
          <input type="number" id="age" name="age" min="1" max="120" />
          <button onClick={() => handleVerification(document.getElementById("age").value)}>
            Verify
          </button>
        </div>
      )}
    </div>
  );
}

export default AgeVerification;