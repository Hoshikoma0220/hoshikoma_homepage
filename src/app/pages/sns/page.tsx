"use client";  // クライアントサイドで動作させる指示

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import LoadingScreen from '../../../components/LoadingScreen';
import SnsContent from '../../../components/SnsContent';

const SNSPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);  // 読み込み進捗
  const [isSnsVisible, setIsSnsVisible] = useState(true);  // SNSコンテンツの可視状態を最初からtrueに設定

  useEffect(() => {
    let progress = 0;
    const smoothProgressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        progress = prev + 0.1;  // 0.1%ずつ進行させる
        if (progress >= 100) {
          clearInterval(smoothProgressInterval);
          return 100;  // 読み込みが完了したら100%にする
        }
        return progress;  // スムーズに進行
      });
    }, 300);  // 300msごとに更新

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

          {/* SNSコンテンツを常に表示 */}
          <div
            className={`transition-transform duration-[1200ms] translate-y-0 opacity-100`}
            style={{ marginTop: '80px', minHeight: '300px', transition: 'transform 1.2s ease, opacity 1.2s ease' }}
          >
            <SnsContent />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default SNSPage;