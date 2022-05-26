import { FC, createContext, useContext, useState } from 'react';

const ThemeContext = createContext<{
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isDark: false,
  setIsDark: () => null
})

const ThemeContextProvider: FC = ({children}) => {
  const [isDark, setIsDark] = useState(false)
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export const useGetTheme = () => useContext(ThemeContext)