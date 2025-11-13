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

  

  return (
    
  );
};

export default App
