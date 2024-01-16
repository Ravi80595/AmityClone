import logo from './logo.svg';
import './App.css';
import Dashborad from './Components/Dashborad';
import Profile from './Components/Profile';
import AllRoutes from './AllRoutes';

function App() {
  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px',
  };

  const articleStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className="App" style={containerStyle}>
      <article style={articleStyle}>
        <h1>We&rsquo;ll be back soon!</h1>
        <div>
          <p>
            Sorry for the inconvenience but we are currently enhancing our software services and preparing for the launch for our mobile application. If you need you can always{' '}
            <a href="mailto:dalbir@riskcare.ca">contact us</a>, otherwise we&rsquo;ll be back online shortly!
          </p>
          <p>+1 (905) 805-5712</p>
          <p>&mdash; The Team</p>
        </div>
      </article>
      {/* <Dashborad/> */}
      {/* <Profile/> */}
    </div>
  );
}

export default App;
