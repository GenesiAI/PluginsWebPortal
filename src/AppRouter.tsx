import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import PluginsPage from './pages/Plugins';
import BuildPluginPage from './pages/BuildPlugin';
import HireDevPage from './pages/HireDev';
import ContactsPage from './pages/Contacts';
import Header from './components/Header';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/plugins" element={<PluginsPage/>} />
                <Route path="/build-plugin" element={<BuildPluginPage/>} />
                <Route path="/hire-dev" element={<HireDevPage/>} />
                <Route path="/contacts" element={<ContactsPage/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
