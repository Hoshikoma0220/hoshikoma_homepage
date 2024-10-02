"use client";  // クライアントサイドで動作させる指示

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/hero';  // ランダム画像のHeroセクションをインポート
import Hero2 from '../components/hero2';  // お知らせ・ニュースのHero2セクションをインポート
import LoadingScreen from '../components/LoadingScreen';  // 読み込み画面のインポート

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);  // 読み込み進捗
  const [isHero2Visible, setIsHero2Visible] = useState(false);  // Hero2セクションの可視状態

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

  // スクロールイベントを監視してHero2を表示
  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置が100px以上でHero2を表示（早めに動き出すように変更）
      if (window.scrollY > 100) {
        setIsHero2Visible(true);
      } else if (window.scrollY < 50) {
        // スクロール位置が50px以下になった時にHero2を非表示
        setIsHero2Visible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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

          {/* Heroセクションは常に表示 */}
          <div style={{ marginTop: '80px' }}>
            <Hero />
          </div>

          {/* Hero2セクションをスクロールで表示 */}
          <div
            className={`transition-transform duration-[1200ms] opacity-0 ${
              isHero2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ marginTop: '-180px', minHeight: '300px', transition: 'transform 1.2s ease, opacity 1.2s ease' }}
          >
            <Hero2 />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;