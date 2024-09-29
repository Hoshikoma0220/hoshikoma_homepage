import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>ホームページへようこそ</h1>
        <p>ここにホームページの内容を記述してください。</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
