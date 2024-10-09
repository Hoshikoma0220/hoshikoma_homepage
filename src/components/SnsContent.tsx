import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ダミーデータとしての登録者数など
const snsData = [
  {
    platform: 'X (旧Twitter)',
    url: 'https://x.com/Hoshikoma_0220',
    icon: '/images/x_logo.png',
    description: '最新情報をつぶやいてます📣',
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@Hoshikoma_0220',
    icon: '/images/youtube_logo.png',
    description: '配信や動画をアップロードしています🎥',
  },
  {
    platform: 'TikTok',
    url: 'https://www.tiktok.com/@hoshikoma_0220',
    icon: '/images/tiktok_logo.png',
    description: '短い動画を投稿中🎶',
  },
  {
    platform: 'Twitch',
    url: 'https://www.twitch.tv/hoshikoma_0220',
    icon: '/images/twitch_logo.png',
    description: 'ライブ配信を行っています🎮',
  },
  {
    platform: 'ニコニコ動画',
    url: 'https://www.nicovideo.jp/user/130093157',
    icon: '/images/niconico_logo.png',
    description: '動画配信しています📺',
  },
];

const SnsContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">リンク</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {snsData.map((sns, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            {/* SNSのアイコン */}
            <Image
              src={sns.icon}
              alt={`${sns.platform} icon`}
              width={120}
              height={120}
              className="mb-4"
            />
            {/* SNSのプラットフォーム名 */}
            <h3 className="text-xl font-semibold mb-2">{sns.platform}</h3>
            {/* 説明文 */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">{sns.description}</p>
            {/* SNSリンクボタン */}
            <Link href={sns.url} legacyBehavior>
              <a
                className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnsContent;