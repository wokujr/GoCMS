
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UserPage from "../pages/UserPage.tsx";

const Dashboard: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>("Home");

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
    };

    const renderContent = () => {
        switch (selectedItem) {
            case "Home":
                return <div>Home Content</div>;
            case "Analytics":
                return <div>Analytics Content</div>;
            case "Setting":
                return <div>Settings Content</div>;
            case "User":
                return <UserPage />
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen">
            <Sidebar onItemClick={handleItemClick} />
            <div className="flex-grow p-4">
                <h1 className="text-4xl text-center font-bold mt-2 mb-4">Welcome to the Dashboard</h1>
                {renderContent()}
            </div>
        </div>
    );
};

export default Dashboard;
