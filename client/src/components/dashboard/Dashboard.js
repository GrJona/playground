import React from 'react';

const Dashboard = (props) => {
    return (
        <div>
           This is the Dashboard 
           <button onClick={props.handleLogout}>Logout</button> 
        </div>
    );
};

export default Dashboard;