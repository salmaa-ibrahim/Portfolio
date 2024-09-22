import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/layout';
import Home from './pages/home/home';
import About from './pages/about/about';
import { createContext, useState } from "react"
export const ThemeContext = createContext(null)
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
    <div className={theme +"App"}>
      <ThemeContext.Provider value={{theme , setTheme}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
      </ThemeContext.Provider>
    </div>
    </>
  )
}

export default App
