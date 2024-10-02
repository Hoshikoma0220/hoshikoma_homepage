"use client";  // クライアントサイドで動作させる指示

import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  // 画像リスト
  const images = [
    '/images/home_image1.png',
    '/images/home_image2.png',
    '/images/home_image3.png',
    '/images/home_image4.png',
    '/images/home_image5.png'
  ];

  const [selectedImage, setSelectedImage] = useState('');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // 要素が表示されたか

  const heroRef = useRef(null); // Heroセクションを参照

  // ランダムに画像を選択し、フェードインを実行
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);

    // Intersection Observerでスクロールアニメーションをトリガー
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // 要素が10%表示された時点でアニメーションを開始
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // ロゴと画像が完全にロードされたときに呼び出される
  const handleImageLoad = () => {
    setIsImageLoaded(true); // 画像ロード完了後に表示
  };

  const handleLogoLoad = () => {
    setIsLogoLoaded(true); // ロゴロード完了後に表示
  };

  return (
    <div
      ref={heroRef} // Heroセクションを参照
      className={`relative w-full h-screen overflow-hidden bg-transparent transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {/* ロゴを左半分の中央に配置し、右端を中央線に合わせる */}
      <div
        className={`absolute z-20 w-1/2 h-full flex justify-end items-center transition-opacity duration-1000 ease-in-out ${
          isLogoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translateY(0px)' }} // 上に250pxシフト
      >
        <img
          src="/images/name_logo.png" // ロゴ画像のパス
          alt="名前ロゴ"
          width={600} // ロゴを大きく表示
          height={600}
          onLoad={handleLogoLoad}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      {/* 右半分の中央にランダム画像を大きく表示 */}
      <div className="absolute top-0 right-0 w-1/2 h-full flex justify-center items-start overflow-hidden">
        <img
          src={selectedImage}
          alt="ランダム画像"
          onLoad={handleImageLoad}
          className={`transition-opacity duration-1000 ease-in-out ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: 'auto', // 幅は自動調整
            height: '180%', // 高さを180%に設定
            objectFit: 'cover', // アスペクト比を維持しつつカバー
            objectPosition: 'center', // 左右の中央に配置
            transform: 'translateY(-25px)', // 上に寄せる
          }}
        />
      </div>
    </div>
  );
};

export default Hero;