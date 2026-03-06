import UrlForm from "./components/UrlForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">

      <div className="hero-section">
        <h1>
          Transform Your Links <br />
          <span>in a Click</span>
        </h1>

        <p>
          Effortlessly shorten, secure, and optimize your links with
          modern performance and powerful tools.
        </p>

        <UrlForm />
      </div>

    </div>
  );
}

export default App;