import React from 'react'
import { useState } from 'react';
export default function RegisterGuide() {
    const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const languages = [
    { code: 'ar', name: 'Arabic' },
    { code: 'he', name: 'Hebrew' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
  ];

  const handleLanguageChange = (code) => {
    setSelectedLanguages((prevSelectedLanguages) => {
      if (prevSelectedLanguages.includes(code)) {
        return prevSelectedLanguages.filter((langCode) => langCode !== code);
      } else {
        return [...prevSelectedLanguages, code];
      }
    });
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Select Languages</button>
      {showDropdown && (
        <div className="dropdown-content">
          {languages.map((language) => (
            <label key={language.code}>
              <input
                type="checkbox"
                value={language.code}
                checked={selectedLanguages.includes(language.code)}
                onChange={() => handleLanguageChange(language.code)}
              />
              {language.name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
