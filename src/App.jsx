import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.sampleapis.com/beers/ale")
      .then((response) => setBeers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>List</h1>
      <input
        type="text"
        placeholder="Search Here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid">
        {filteredBeers.map((beer) => (
          <div key={beer.id} className="card">
            <img src={beer.image} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
