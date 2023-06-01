import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/Contacts';
import Header from './components/Header';
import YourPlugins from './pages/YourPlugins';
// import LoginPage from './pages/Account/Login';
// import LogOut from './pages/Account/LogOut';
import PluginEditor from './pages/PluginEditor';
import Home from './pages/Home';
import { Container } from '@mui/material';

const AppRouter: React.FC = () => {

    const someBasicStyle: any = {
        backgroundColor: (theme: any) => theme.palette.background.paper,
    };
    return (
        <Router>
            <Header />
            <Routes>
                {/* <Route path="/" element={<HomePage/>} /> */}
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<LogOut />} /> */}
                {/* <Route path="/text-to-plugin" element={<TextToPlugin />} /> */}
                {/* <Route path="/build-plugin" element={<BuildPluginPage/>} />
                <Route path="/hire-dev" element={<HireDevPage/>} /> */}
                {/* <Route path="/generating-plugin" element={<GeneratingPlugin />} />*/}
                <Route path="/your-plugins" element={<Container maxWidth="md" sx={someBasicStyle} ><YourPlugins /></Container>} />
                <Route path="/contacts" element={<Container maxWidth="md"><ContactsPage /></Container>} />
                <Route path="/plugin/:guid" element={<Container maxWidth="md"><PluginEditor /></Container>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
