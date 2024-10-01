import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;  // 読み込み完了時に呼び出す関数
  loadingProgress: number; // 実際の読み込み進行度 (0~100%)
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, loadingProgress }) => {
  const [isComplete, setIsComplete] = useState(false);  // 読み込みが完了したかどうか
  const [colorComplete, setColorComplete] = useState(false); // カラー化が完了したかどうか

  // 読み込み進行が100%に達した時の処理
  useEffect(() => {
    if (loadingProgress >= 100) {
      setColorComplete(true);
      setTimeout(() => {
        setIsComplete(true);  // フェードアウトを開始
        setTimeout(() => onComplete(), 1000);  // フェードアウト完了後にページ遷移
      }, 1000);  // カラー化完了後に1秒待機してからフェードアウト
    }
  }, [loadingProgress, onComplete]);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen transition-opacity duration-1000 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundColor: 'var(--background-color)', // 背景色をCSS変数に依存
        transition: 'opacity 1s ease-in-out', // フェードアウトのスムーズさを調整
      }}
    >
      {/* モノクロのロゴを常に背景として表示 */}
      <div
        className={`relative w-[500px] h-[250px] transition-opacity duration-1000 ease-out ${
          isComplete ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* モノクロのロゴ画像 */}
        <Image
          src="/images/name_logo_mono.png"  // モノクロ版のロゴ
          alt="モノクロロゴ"
          layout="fill"
          objectFit="contain"
        />

        {/* カラーのロゴを上に重ねる */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Image
            src="/images/name_logo.png"  // カラーのロゴ
            alt="カラーのロゴ"
            layout="fill"
            objectFit="contain"
            className="transition-all duration-1000 ease-in-out"
            style={{
              clipPath: `inset(0 ${100 - loadingProgress}% 0 0)`,  // 左から右にカラーが進む
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
