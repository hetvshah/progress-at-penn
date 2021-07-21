import { Link } from 'react-router-dom';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import './HomeStyles.css';

const today = new Date();
const graduation = new Date(2024, 4, 20);
const started = new Date(2020, 8, 1);

const days = Math.ceil(
  (graduation.getTime() - today.getTime()) / (1000 * 3600 * 24)
);

const completed = Math.ceil(
  (today.getTime() - started.getTime()) / (1000 * 3600 * 24)
);

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <h1>Progress@Penn</h1>
          <p>
            <Link className="link" to="/info">
              info
            </Link>
          </p>
        </div>
        <p
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            paddingTop: '1rem',
          }}
        >
          {days} days till graduation!
        </p>

        <ProgressBar
          key={1}
          bgcolor={'red'}
          completed={Math.floor((completed / days) * 100)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
