import React, { useEffect, useState } from 'react';
import AllLeagues from '../AllLeagues/AllLeagues';
import Header from '../Header/Header';

const Home = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues.slice(0, 9)))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="home">
                {
                    leagues.map(league => <AllLeagues league={league} key={league.idLeague}></AllLeagues>)
                }
            </div>
        </div>
    );
};

export default Home;