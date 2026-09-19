// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from "./components/Menu.tsx"
import Home from "./pages/Home";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path = "/">
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
