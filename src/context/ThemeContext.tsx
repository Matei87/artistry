import { useEffect, createContext, useState } from 'react';

const ThemeContext = createContext(null);

const getTheme = () => {
  const theme = localStorage.getItem('theme');
  if (!theme) {
    localStorage.setItem('theme', 'light');
    return 'light';
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem('theme', theme);
      document.querySelector('body')?.setAttribute('data-theme', theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
