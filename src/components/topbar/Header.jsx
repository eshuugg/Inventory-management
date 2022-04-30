import React, { useEffect, useState } from 'react';
function Header() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        setUserInfo();
    }, [])
    return (
        <header className="header" id="header">
            <div className="d-flex flex-row align-items-center">
                <h2 style={{ color: '#1766F3',cursor:"pointer" }}> Admin </h2>
            </div>
            <div className="header_right_box">
                <span style={{ fontSize: '14px' }}>{userInfo?.displayName}</span>
                <span style={{ fontSize: '12px' }}>{userInfo?.email}</span>
            </div>
        </header>
    )
}

export default Header;
