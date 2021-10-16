import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Dashboard() {
    const [books, setBooks] = useState(0);
    const [users, setUsers] = useState(0);
    useEffect(async () => {
        const result = await axios.get('/dash');
        setBooks(result.data.books);
        setUsers((result.data.users - 1));
    }, [])
    return (
        <div className="main">
            <div className="boxes">
                <span>Number of Books:</span>
                <span>{books}</span>
            </div>
            <div className="boxes">
                <span>Number of User:</span>
                <span>{users}</span>
            </div>
        </div>
    )
}

export default Dashboard
