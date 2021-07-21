import './Info.css';
import './HomeStyles.css';
import Footer from './Footer';

const Info = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Information</h1>
        <p className="info">
          I am a rising sophomore at the University of Pennsylvania. I thought
          it would be cool to create a visual representation of how much
          progress I've made, counting down the days till graduation. This is
          built on the following facts:
          <ul>
            <li>start day: Septemeber 1st, 2020</li>
            <li>grad day: May 20th, 2024</li>
          </ul>
          Source code can be found{' '}
          <a
            style={{ color: '#ad0000' }}
            href="https://github.com/hetvshah/progress-at-penn"
            target="__blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
        <button
          onClick={() => (window.location.href = '/')}
          className="back-btn"
        >
          back
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
