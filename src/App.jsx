
import './App.css';
import discordLogo from "./assets/discord-logo-white.png"
import discordBackground from "./assets/discord-background.png"
import menuIcon from "./assets/menu-icon.png"

function App() {
  return (
    <div className="App">
      <nav>
        <img src={discordLogo} className='logo' alt="logo" />
        <img src={menuIcon} className="menu" alt="menu" />
      </nav>

      <div id="intro">
       <h1>IMAGINE A PLACE...</h1>
        <p>... where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk ever day and hang out more often.</p>
      </div>

      <div id="button">
        <button className="download" >Download for Mac</button>
        <button className="browser">Open Discord in your browser</button>
      </div>

      <div>
        <img id="background-img" src={discordBackground} alt="bg" />
      </div>
    </div>
  );
}

export default App;