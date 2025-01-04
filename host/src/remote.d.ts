declare module 'remote/Search' {
  import React from 'react';

  interface SearchProps {
    inversed?: boolean;
  }

  const Search: React.FC<SearchProps>;
  export default Search;
}
