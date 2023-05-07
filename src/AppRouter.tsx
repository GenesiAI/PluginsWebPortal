import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage2 from './pages/Home2';
// import PluginsPage from './pages/Plugins';
// import BuildPluginPage from './pages/BuildPlugin';
// import HireDevPage from './pages/HireDev';
import ContactsPage from './pages/Contacts';
import Header from './components/Header';
import LoginPage from './pages/Account/Login';
import YourPlugins from './pages/YourPlugins';
import LogOut from './pages/Account/LogOut';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {/* <Route path="/" element={<HomePage/>} /> */}
                <Route path="/" element={<HomePage2 />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<LogOut />} />
                {/* <Route path="/text-to-plugin" element={<TextToPlugin />} /> */}
                {/* <Route path="/builder" element={<Plu />} /> */}
                {/* <Route path="/plugins" element={<PluginsPage/>} />
                <Route path="/build-plugin" element={<BuildPluginPage/>} />
                <Route path="/hire-dev" element={<HireDevPage/>} /> */}
                {/* <Route path="/generating-plugin" element={<GeneratingPlugin />} />*/}
                <Route path="/your-plugins" element={<YourPlugins />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
