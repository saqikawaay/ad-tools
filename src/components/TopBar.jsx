import React, { useEffect, useState } from 'react';
import './TopBar.css'; // Import the CSS file


export default function TopBar() {
    const [accounts, setAccounts] = useState([]);


  

    return (
        <div className="topbar">
            <div className="logo">My Logo</div>
            <select className="dropdown">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <div className="account-circle">Account Circle</div>
        </div>
    );
}
