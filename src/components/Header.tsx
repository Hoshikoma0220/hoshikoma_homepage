import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // ページロード後にアニメーションを開始
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);  // 0.5秒後にヘッダーを表示する
    }, 500);

    // スクロール時の背景色変更処理
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`py-4 fixed w-full top-0 left-0 z-50 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${hasScrolled ? 'bg-white shadow-lg dark:bg-gray-800' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex justify-between items-center">
        {/* ロゴ画像部分 */}
        <div className="px-4 py-2">
          <Link href="/">
            <Image
              src="/images/name_logo.png"
              alt="サイト名ロゴ"
              width={150}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* ナビゲーション部分 */}
        <ul className="flex space-x-8 text-lg">
          <li className="relative group">
            <Link href="/" className="block">
              <span className="japanese-text block group-hover:opacity-0 transition-opacity duration-300">ホーム</span>
              <span className="english-text absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/profile" className="block">
              <span className="japanese-text block group-hover:opacity-0 transition-opacity duration-300">プロフィール</span>
              <span className="english-text absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Profile</span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/news" className="block">
              <span className="japanese-text block group-hover:opacity-0 transition-opacity duration-300">お知らせ</span>
              <span className="english-text absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">News</span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/guideline" className="block">
              <span className="japanese-text block group-hover:opacity-0 transition-opacity duration-300">ガイドライン</span>
              <span className="english-text absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Guideline</span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/sns" className="block">
              <span className="japanese-text block group-hover:opacity-0 transition-opacity duration-300">SNS</span>
              <span className="english-text absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">SNS</span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/portfolio" className="block">
              <span className="japanese-text block group-hover:opacity-0 transition-opacity duration-300">ポートフォリオ</span>
              <span className="english-text absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Portfolio</span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/business" className="block">
              <span className="japanese-text block group-hover:opacity-0 transition-opacity duration-300">事業</span>
              <span className="english-text absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Business</span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/contact" className="block">
              <span className="japanese-text block group-hover:opacity-0 transition-opacity duration-300">問い合わせ</span>
              <span className="english-text absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;