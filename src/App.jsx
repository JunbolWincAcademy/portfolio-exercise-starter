import { useState } from 'react';
import './App.css';
import { PortfolioItemPage } from './pages/PortfolioItemPage'; // Make sure the path is correct based on your folder structure
import { PortfolioPage } from './pages/PortfolioPage';
import { portfolioItems } from './utils/data'; // I forgot to add this

export const App = () => {
  console.log(portfolioItems);
  const greeting = 'Welcome to Business Portfolio';

  //Create a new  selectedItem state
  const [selectedItem, setSelectedItem] = useState(null); // I had null before????
  // const [selectedItem, setSelectedItem] = useState(PortfolioPage);
  // const [selectedItem, setSelectedItem] = useState(portfolioItems[0]);

  //-----handleBusinessSelection function
  // const handleBusinessSelection = (business) => {
  //   console.log('Selected business:', business); // Add this line to debug
  //   selectedItem(business);
  // };

  //-----handleSearchSubmit function

  // const handleSearchSubmit = (searchQuery) => { // the parameter is expected to be the search term entered by the user in the search input field.
  //   // Since we are calling onSearchSubmit(searchField) in TextInput is like calling handleSearchSubmit from there and tell him here you go you
  //   //  can use tea as parameter
  //    if (searchQuery.toLowerCase() === 'tea') {
  //     setUserDrink(tea);
  //   } else if (searchQuery.toLowerCase() === 'coffee') {
  //     setUserDrink(coffee);
  //   } else {
  //     // Handle invalid input
  //     alert('Sorry, we only have tea and coffee.');
  //   }
  // };

  return (
    <div className="App">
      {selectedItem ? (
        <>
       
          {/*Only render Portfolio if the is a selectedItem */}
          <PortfolioItemPage item={selectedItem} />
        </>
      ) : (
        <>
        <PortfolioPage />
        </>
       
        // if not render the following:
        // 
      )}
    </div>
  );
};
