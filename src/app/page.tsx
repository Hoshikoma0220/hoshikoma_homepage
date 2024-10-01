"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';  // 読み込み画面のインポート

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);  // 読み込み進捗

  useEffect(() => {
    // 読み込み進行のシミュレーション
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;  // 進行状況をシミュレーション
      });
    }, 500);  // 500msごとに進行度を更新
    return () => clearInterval(interval);  // コンポーネントがアンマウントされる際にクリア
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);  // 読み込み完了時にメインコンテンツを表示
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen loadingProgress={loadingProgress} onComplete={handleLoadingComplete} />
      ) : (
        <div className="animate-fadeIn">
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
