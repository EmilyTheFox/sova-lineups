import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/Home/Home';
import Maps from './pages/Maps/Maps';
import Faq from './pages/Faq/Faq';

import reportWebVitals from './reportWebVitals';
import Logs from './pages/Logs/Logs';
import ReconLineups from './pages/ReconLineups/ReconLineups';
import { ValorantMap } from './interfaces/ValorantMap';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/logs" element={<Logs />} />
                <Route path="/faq" element={<Faq />} />

                <Route path="/ascent" element={<ReconLineups map={ValorantMap.Ascent} />} />
                <Route path="/bind" element={<ReconLineups map={ValorantMap.Bind} />} />
                <Route path="/breeze" element={<ReconLineups map={ValorantMap.Breeze} />} />
                <Route path="/fracture" element={<ReconLineups map={ValorantMap.Fracture} />} />
                <Route path="/haven" element={<ReconLineups map={ValorantMap.Haven} />} />
                <Route path="/icebox" element={<ReconLineups map={ValorantMap.Icebox} />} />
                <Route path="/pearl" element={<ReconLineups map={ValorantMap.Pearl} />} />
                <Route path="/split" element={<ReconLineups map={ValorantMap.Split} />} />

                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
