import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Next.jsのImageコンポーネントをインポート

const Header = () => (
  <header style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {/* ロゴ画像をホームへのリンクにする */}
      <Link href="/">
        {/* name_logo.pngを表示 */}
        <Image
          src="/images/name_logo.png"
          alt="サイト名ロゴ"
          width={150} // ロゴ画像の幅
          height={50} // ロゴ画像の高さ
          style={{ cursor: 'pointer' }} // クリックできるようにポインタ表示に
        />
      </Link>
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around', width: '80%' }}>
        <li><Link href="/">ホーム</Link></li>
        <li><Link href="/profile">プロフィール</Link></li>
        <li><Link href="/news">お知らせ</Link></li>
        <li><Link href="/guideline">ガイドライン</Link></li>
        <li><Link href="/sns">SNS</Link></li>
        <li><Link href="/portfolio">ポートフォリオ</Link></li>
        <li><Link href="/business">事業</Link></li>
        <li><Link href="/contact">問い合わせ</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
