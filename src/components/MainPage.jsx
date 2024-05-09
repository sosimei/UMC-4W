import React, { useState } from 'react';

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // 검색 로직
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="page-container">
            <div className="welcome-section">
                <h1>환영합니다</h1>
            </div>
            <div className="search-section">
                <h2>Find your movies!</h2>
                <input
                    type="text"
                    placeholder="영화 찾기"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>🔍</button>
            </div>
        </div>
    );
};

export default MainPage;
