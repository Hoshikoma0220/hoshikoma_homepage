import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;  // 読み込み完了時に呼び出す関数
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);  // 読み込みの進捗度（0~100）
  const [isComplete, setIsComplete] = useState(false);  // 読み込みが完了したかどうか

  // 読み込み進行をシミュレーション
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500); // 読み込み完了後に0.5秒の遅延を入れる
          return 100;
        }
        return prevProgress + 5;  // 5%ずつ増やしていく
      });
    }, 200);  // 200msごとに進行
    return () => clearInterval(interval);  // コンポーネントがアンマウントされるときにクリア
  }, []);

  // 読み込み完了時にページ遷移や他の処理を実行
  useEffect(() => {
    if (isComplete) {
      setTimeout(() => {
        onComplete();  // 1秒後に読み込みが完了したときに次の処理を行う
      }, 1000);  // 1秒後に完了を通知
    }
  }, [isComplete, onComplete]);

  return (
    <div className={`flex flex-col justify-center items-center h-screen bg-white transition-opacity duration-1000 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      {/* ロゴを大きく表示し、モノクロからカラーへ */}
      <div className="relative w-[300px] h-[150px]">
        <Image
          src="/images/name_logo.png"  // ロゴ画像
          alt="ロゴ"
          layout="fill"
          objectFit="contain"
          className="transition-all duration-500 ease-in-out"
          style={{
            filter: `grayscale(${100 - progress}%)`,  // 進行に応じてモノクロ→カラーに変わる
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;