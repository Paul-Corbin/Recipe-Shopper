import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
    const isLoggedIn = true;
    return (
        <Routes>
            <Route exact path="/" element={<Layout/>} />
        </Routes>
    )
}