"use client";  // クライアントサイドで動作させる指示

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/hero';  // ランダム画像のHeroセクションをインポート
import LoadingScreen from '../components/LoadingScreen';  // 読み込み画面のインポート

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);  // 読み込み進捗

  useEffect(() => {
    let progress = 0;
    const smoothProgressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        progress = prev + 0.1;  // 0.1%ずつ進行させる（さらにゆっくり）
        if (progress >= 100) {
          clearInterval(smoothProgressInterval);
          return 100;  // 読み込みが完了したら100%にする
        }
        return progress;  // スムーズに進行
      });
    }, 300);  // 300msごとに更新（さらに遅く進行）

    // 実際の読み込み完了後に100%に設定
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/your-api-or-file-url", true);  // 実際のファイルやAPIのURL
    xhr.onload = () => {
      setLoadingProgress(100);  // 読み込みが完了したら100%に設定
    };
    xhr.onerror = () => {
      console.error("Failed to load resource");
    };
    xhr.send();

    return () => {
      clearInterval(smoothProgressInterval);  // クリーンアップ時にインターバルをクリア
      xhr.abort();  // クリーンアップ時にリクエストを中止
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);  // 読み込み完了時にメインコンテンツを表示
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen loadingProgress={loadingProgress} onComplete={handleLoadingComplete} />
      ) : (
        <div className="animate-openCurtain" style={{ background: 'var(--background-gradient)' }}>
          <div className="sticky top-0 z-50">
            <Header />
          </div>

          {/* ヘッダー部の高さを考慮してマージンを追加 */}
          <div style={{ marginTop: '80px' }}>
            <Hero />
          </div>

          {/* メインコンテンツ */}
          <main style={{ padding: '20px', transition: 'opacity 2s ease, transform 1s ease' }}>
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
