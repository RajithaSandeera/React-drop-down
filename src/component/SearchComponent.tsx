import React, { useState } from 'react';

interface SearchableDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const SearchComponent: React.FC<SearchableDropdownProps> = ({ options, value, onChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setSearchValue('');
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="searchable-dropdown">
      <input type="text" value={searchValue} onChange={handleInputChange} placeholder="Search departments"/>
      <ul> {filteredOptions.map((option) => (
          <li key={option} onClick={() => handleOptionClick(option)}> {option} </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchComponent;