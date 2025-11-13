import { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'
import './App.css'


interface Material {
  id: string;
  type: string;
  attributes: {
    chemical_formula_reduced: string;
    lattice_vectors?: number[][];
    symmetry?: {
      space_group_symbol?: string;
    };
  };
}

const API_URL = "https://optimade.materialsproject.org/v1/materials";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const findMaterials = useCallback(async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setMaterials([]);

    try {
      const { data } = await axios.get(API_URL, {
        params: { filter: `chemical_formula="${query}"` },
      });

      if (data.data.length === 0) {
        setError("Materials not found");
      } else {
        setMaterials(data.data);
      }
    } catch (err) {
      console.error(err);
      setError("Error");
    } finally {
      setLoading(false);
    }
  }, [query]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") findMaterials();
  };

  return (
    <div className="app">
      <h1>OPTIMADE Catalog</h1>

      <div className="search-box">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter chemical formula "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={findMaterials}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      
    </div>
  );
};

export default App
