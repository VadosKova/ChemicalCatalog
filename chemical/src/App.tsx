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

function App() {

  return (
    <>
      
    </>
  )
}

export default App
