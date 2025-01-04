import { useState } from 'react';

interface SearchProps {
  inversed?: boolean;
}

const Search: React.FC<SearchProps> = ({ inversed = false }) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        {inversed ? (
          <span>inversed: {search.split('').reverse().join('')}</span>
        ) : (
          <span>{search}</span>
        )}
      </div>
    </>
  );
};

export default Search;
