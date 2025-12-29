import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Importe aqui
import './index.css'
import App from './App.tsx'
import TutorialPreparation from './TutorialPreparation';
import AmazonianSpecies from './AmazonianSpecies.tsx'
import OurHistory from './OurHistory.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tutorial" element={<TutorialPreparation />} />
         <Route path="/species" element={<AmazonianSpecies />} />
         <Route path="/ourHistory" element={<OurHistory />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)