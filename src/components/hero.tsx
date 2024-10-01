"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
      {/* ロゴを左半分の中央に大きく配置 */}
      <div
        className={`absolute z-20 w-1/2 h-full flex justify-center items-center transition-transform duration-1000 ease-in-out ${
          isLogoLoaded ? 'transform-none opacity-100' : 'transform -translate-x-10 opacity-0'
        }`}
      >
        <Image
          src="/images/name_logo.png" // ロゴ画像のパス
          alt="名前ロゴ"
          width={450} // ロゴを大きく表示
          height={450}
          objectFit="contain"
          onLoadingComplete={handleLogoLoad}
        />
      </div>

      {/* 右半分の中央にランダム画像を大きく表示 */}
      <div
        className={`absolute z-10 w-1/2 h-full right-0 flex justify-center items-center transition-transform duration-1000 ease-in-out ${
          isImageLoaded ? 'transform-none opacity-100' : 'transform translate-x-10 opacity-0'
        }`}
        style={{ overflow: 'visible' }} // 上限をなくすためにoverflow: visible
      >
        {/* 画像サイズを固定して大きく表示 */}
        <Image
          src={selectedImage}
          alt="ランダム画像"
          width={1500} // 幅を手動で設定
          height={1500} // 高さも手動で設定
          objectFit="contain"
          quality={100}
          onLoadingComplete={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default Hero;