import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/Contacts';
import Header from './components/Header';
import LoginPage from './pages/Account/Login';
import YourPlugins from './pages/YourPlugins';
import LogOut from './pages/Account/LogOut';
import PluginEditor from './pages/PluginEditor';
import Home from './pages/Home';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {/* <Route path="/" element={<HomePage/>} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<LogOut />} />
                {/* <Route path="/text-to-plugin" element={<TextToPlugin />} /> */}
                {/* <Route path="/build-plugin" element={<BuildPluginPage/>} />
                <Route path="/hire-dev" element={<HireDevPage/>} /> */} 
                {/* <Route path="/generating-plugin" element={<GeneratingPlugin />} />*/}
                <Route path="/your-plugins" element={<YourPlugins />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/plugin/:guid" element={<PluginEditor />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
