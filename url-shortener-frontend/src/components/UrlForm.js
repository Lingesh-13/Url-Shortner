import { useState } from "react";
import axios from "axios";

function UrlForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/shorten",
        { url },
        {
          auth: {
            username: "lingesh",
            password: "1234",
          },
        }
      );

      setShortUrl(response.data);
    } catch (error) {
      alert("Error shortening URL");
    }
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form-row">
        <input
          type="text"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>

      {shortUrl && (
        <div className="result">
          <p>Short URL</p>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default UrlForm;