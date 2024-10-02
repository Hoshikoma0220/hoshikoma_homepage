import React, { useState } from 'react';
import Link from 'next/link';

// ニュース項目の型定義
interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
}

const Hero2: React.FC = () => {
  // ニュースデータの配列
  const newsData: NewsItem[] = [
    { id: 1, title: '新機能のお知らせ', date: '2024-10-01', content: '新機能が追加されました。詳細はこちら...' },
    { id: 2, title: 'システムメンテナンス予定', date: '2024-09-25', content: 'システムメンテナンスを実施します...' },
    { id: 3, title: 'キャンペーン開始', date: '2024-09-20', content: 'キャンペーンが始まります！参加方法はこちら...' },
    { id: 4, title: 'サービス改善のお知らせ', date: '2024-09-10', content: 'サービス改善を行いました。詳細はこちら...' },
    { id: 5, title: 'セキュリティアップデート', date: '2024-09-05', content: 'セキュリティアップデートを行いました。' },
    { id: 6, title: '夏季休業のお知らせ', date: '2024-08-15', content: '夏季休業の日程は以下の通りです...' },
  ];

  // ニュース詳細を表示するためのステート
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // ニュース項目をクリックしたときの処理
  const handleNewsClick = (news: NewsItem) => {
    setSelectedNews(news);
  };

  return (
    <div
      className="py-8 px-4 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative"
      style={{ marginTop: '-50px', zIndex: 10 }}
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-300">
        お知らせ・ニュース
      </h2>

      {/* 最新5件のニュースを表示 */}
      <ul className="max-w-4xl mx-auto space-y-4">
        {newsData.slice(0, 5).map((news) => (
          <li key={news.id} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{news.date}</p>
                <Link href={`/news/${news.id}`} legacyBehavior>
                  <a className="text-xl font-semibold text-blue-600 cursor-pointer hover:underline dark:text-blue-300">
                    {news.title}
                  </a>
                </Link>
              </div>
              <Link href={`/news/${news.id}`} legacyBehavior>
                <a className="text-blue-500 hover:text-blue-700 transition-colors dark:text-blue-300 dark:hover:text-blue-500">
                  &rarr;
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {/* 「すべてのお知らせを見る」ボタン */}
      <div className="text-center mt-8">
        <Link href="/news" legacyBehavior>
          <a className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-500 dark:hover:bg-blue-600 dark:shadow-md">
            すべてのお知らせを見る
          </a>
        </Link>
      </div>

      {/* 選択されたニュースの詳細を表示 */}
      {selectedNews && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto dark:bg-gray-800 dark:text-gray-200">
          <h3 className="text-2xl font-bold mb-2">{selectedNews.title}</h3>
          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">{selectedNews.date}</p>
          <p className="text-gray-700 dark:text-gray-200">{selectedNews.content}</p>
          <button
            onClick={() => setSelectedNews(null)}
            className="mt-4 text-blue-600 hover:underline dark:text-blue-300"
          >
            戻る
          </button>
        </div>
      )}
    </div>
  );
};

export default Hero2;