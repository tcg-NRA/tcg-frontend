import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CoverPage from './pages/CoverPage';          // ✅ New homepage
import CardPage from './pages/CardPage';            // Optional: keep at /cards
import CardDetailPage from './pages/CardDetailPage';
import DownloadPage from './pages/DownloadPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', backgroundColor: '#282c34' }}>
        <Link to="/" style={{ marginRight: '1rem', color: '#61dafb' }}>Home</Link>
        <Link to="/cards" style={{ marginRight: '1rem', color: '#61dafb' }}>Card List</Link>
        <Link to="/download" style={{ color: '#61dafb' }}>Download</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CoverPage />} />               {/* 👈 Now default homepage */}
        <Route path="/cards" element={<CardPage />} />           {/* 👈 Old page now at /cards */}
        <Route path="/cards/:id" element={<CardDetailPage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
