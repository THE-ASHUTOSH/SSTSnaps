import React, { createContext, useState } from "react";

export const SearchImageDataContext = createContext();

export const SearchImageDataProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const setSearchResultUrls = (urls) => {
    // Extract IDs from Google Drive URLs
    const processedUrls = urls
      .map((url) => {
        const match = url.match(/\/d\/([^/]+)/);
        return match ? match[1] : null;
      })
      .filter((id) => id);

    setSearchResults(processedUrls);
  };

  return (
    <SearchImageDataContext.Provider value={{ searchResults, setSearchResultUrls }}>
      {children}
    </SearchImageDataContext.Provider>
  );
};
