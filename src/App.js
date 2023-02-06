import pic from './pic.png';
import logoo from './logoo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="App-pic" alt="pic" />
        <h1>
          Yamo Lee
        </h1>
        <p>
        My name is Yamo.<br/>I am a professional working in<br/> Supply Chain Consulting field who is interested in<br/> making career transition into<br/> Front-End Web Development.
        </p>

        <p className="link">
          Click <a
          className="App-link"
          href="https://www.linkedin.com/in/seungwoo-peter-lee-1775981a6/?originalSubdomain=ca"
          target="_blank"
          rel="noopener noreferrer"
        > <img src ={logoo} className="App-logoo" alt ="linkedin"></img>
          </a> to Connect<br/> 
        </p>
        <p>
          </p> 

        

        
      </header>
      
        <body>
          <form>
            <input type="text" placeholder="Search anything!" />
            <button type="submit">Search</button>
          </form>
        </body>

    </div>
  );
}

export default App;