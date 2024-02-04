import React, { useState } from 'react';
import './App.css';
import { portfolioItems } from './utils/data';
import { PortfolioItemPage } from './pages/PortfolioItemPage'; // Make sure the path is correct based on your folder structure

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(portfolioItems[0]);
  
  // Properly return the JSX
  return (
     <div className="App"> {/* dont forget to wrap the fragment in a <div></div>*/}
     
      <PortfolioItemPage item={selectedItem} /> {/* Pass selectedItem as a prop to PortfolioItemPage */}
      
    </div>
  );
};

