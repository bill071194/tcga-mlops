import { ThemeProvider } from "next-themes";
import { useState, createContext } from "react";
import "../css/tailwind.css";

export const DataContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([]);
  return (
    <DataContext.Provider value={{data, setData}}>
      <ThemeProvider attribute="className" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default MyApp;
