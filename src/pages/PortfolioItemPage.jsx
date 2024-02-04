import { portfolioItems } from '../utils/data';
export const PortfolioItemPage = ({ item }) => {
  return (
    <>
      <p>{item.id}</p> {/* Displaying the drink's id */}
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.summary}</p>
      <img src={item.imageUrl} alt="Project image" style={{ width: '500px', height: '300px' }}/>
      {/* <img src={item.imgUrl} alt={item.alt} style={{ width: '200px', height: '100px' }} /> */}
      {/* a bit explanation about how style works in jsx: the style attribute in JSX expects a javascript object.
          and because in JSX you need curly brackets to embed a javascript expression which all the style statement
          that is the reason of the {{...}}    */}
      {/* Additional paragraph */}
      <ul>
        {item.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};
