import React from 'react';
import Navbar from './Navbar';
import './Layout.css';

function Layout() {
  return (
    <div className="layout-container">
      <Navbar />
      <section className="content-section">
        <div className="content">
          {/* Your hero and other content here */}
        </div>
      </section>
      <footer>
        {/* Footer content here */}
      </footer>
    </div>
  );
}

export default Layout;
