"use client";

import React, { useState, useEffect } from 'react';

const Hero = () => {
  // 画像リスト
  const images = [
    '/images/home_image1.png',
    '/images/home_image2.png',
    '/images/home_image3.png',
    '/images/home_image4.png',
    '/images/home_image5.png'
  ];

  // 選ばれた画像を保持するstate
  const [selectedImage, setSelectedImage] = useState('');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  // ランダムに画像を選択し、フェードインを実行
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);
  }, []);

  // ロゴと画像が完全にロードされたときに呼び出される
  const handleImageLoad = () => {
    setIsImageLoaded(true); // 画像ロード完了後に表示
  };

  const handleLogoLoad = () => {
    setIsLogoLoaded(true); // ロゴロード完了後に表示
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-transparent">
      {/* ロゴを左半分の中央に配置し、右端を中央線に合わせる */}
      <div
        className={`absolute z-20 w-1/2 h-full flex justify-end items-center transition-opacity duration-1000 ease-in-out ${
          isLogoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translateY(-200px)' }} // 上に200pxシフト
      >
        <img
          src="/images/name_logo.png" // ロゴ画像のパス
          alt="名前ロゴ"
          width={500} // ロゴを大きく表示
          height={500}
          onLoad={handleLogoLoad}
          style={{
            objectFit: 'contain',
            transform: 'translateX(0%)' // 右端を中央線に合わせる
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
            height: '180%', // 高さを180%に設定（少し縮小）
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
