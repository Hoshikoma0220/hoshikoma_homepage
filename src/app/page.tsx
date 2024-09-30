"use client";  // クライアントサイドで動作させる指示

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen'; // 読み込み画面のインポート

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <div className="animate-fadeIn"> {/* アニメーションでページ遷移 */}
          <Header />
          <main style={{ padding: '20px' }}>
            <h1>ホームページへようこそ</h1>
            <p>ここにホームページの内容を記述してください。</p>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;