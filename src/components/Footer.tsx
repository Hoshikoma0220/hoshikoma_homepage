import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ページロード後にアニメーションを開始
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);  // 1秒後にフッターを表示する
    }, 1000);
  }, []);

  return (
    <footer className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ padding: '20px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <p>&copy; 2024 星狛つらら. All rights reserved.</p>
      <p>Team-FanLabo</p> {/* 所属チームの部分 */}
    </footer>
  );
};

export default Footer;