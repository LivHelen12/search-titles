import './style.css';

export const TextInput = ({searchValue, handleChange}) => {
  return (
    <input
    className="text-input" 
    type="search" 
    onChange={handleChange} 
    value={searchValue} 
    placeholder='Search a title'
    />
  );
};
