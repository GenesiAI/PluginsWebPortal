import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import HomePage from './pages/Home';
// import PluginsPage from './pages/Plugins';
// import BuildPluginPage from './pages/BuildPlugin';
// import HireDevPage from './pages/HireDev';
import ContactsPage from './pages/Contacts';
import Header from './components/Header';
import TextToPlugin from './pages/TextToPlugin';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {/* <Route path="/" element={<HomePage/>} /> */}
                <Route path="/" element={<Navigate to="/text-to-plugin" />} />
                <Route path="/text-to-plugin" element={<TextToPlugin />} />
                {/* <Route path="/plugins" element={<PluginsPage/>} />
                <Route path="/build-plugin" element={<BuildPluginPage/>} />
                <Route path="/hire-dev" element={<HireDevPage/>} /> */}
                {/* <Route path="/generating-plugin" element={<GeneratingPlugin />} />
                <Route path="/your-plugins"  element={<YourPlugins {YourPluginsProps}/>} /> */}
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
