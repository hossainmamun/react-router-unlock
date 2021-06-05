import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const AllLeagues = (props) => {
    const { strLeague, strSport, idLeague } = props.league

    return (
        <div className="allLeague">
            <h3>{strLeague}</h3>
            <p>sports type: {strSport}</p>
            <Link to={`/leagueDetail/${idLeague}`}>
                <button className="btn">
                    Explore <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </Link>
        </div>
    );
};

export default AllLeagues;