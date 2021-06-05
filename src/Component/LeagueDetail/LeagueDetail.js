import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import bannerImg from '../../image/banner.png'
import { FaFacebookF, FaYoutube, FaTwitter, FaFlag, FaTransgenderAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import Dynamic from '../DynamicHeader/Dynamic';


const LeagueDetail = () => {
    const { leagueId } = useParams()
    const [league, setLeague] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [leagueId])
    const { strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strDescriptionFR } = league;

    return (
        <div className="container">
            <Dynamic dynamicImg={league}></Dynamic>
            <div>
                <div className="league-card">
                    <div className="league-detail">
                        <h2>{strLeague}</h2>
                        <p><MdLocationOn /> founded: {intFormedYear}</p>
                        <p><FaFlag /> country: {strCountry}</p>
                        <p><IoIosFootball /> sports type: {strSport}</p>
                        <p><FaTransgenderAlt /> gender: {strGender}</p>
                    </div>
                    <div className="img-holder">
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
                <div className="description">
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionFR}</p>
                </div>
                <div className="social-icon">
                    <a href="https://www.facebook.com/" target="blank" style={{ backgroundColor: "blue" }}>
                        <FaFacebookF className="icon" />
                    </a>
                    <a href="https://twitter.com/" target="blank" style={{ backgroundColor: "skyblue" }}>
                        <FaTwitter className="icon" />
                    </a>
                    <a href="https://youtube.com/" target="blank" style={{ backgroundColor: "red" }}>
                        <FaYoutube className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetail;