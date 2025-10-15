import React from "react";
import '../css/Components.css';


export default function Top5() {

    const topFive = [
        {
        title: "Attack on Titan",
        img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide",
        rank: 1,
        },
        {
        title: "A Silent Voice",
        img: "https://d.player.one/en/full/173779/silent-voice.png?w=1600&h=900&q=88&f=2fcdb6bf13cf6304ce1327f52f32d58f",
        rank: 2,
        },
        {
        title: "CyberPunk EdgeRunners",
        img: "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/24017434/Cyberpunk_Edgerunners_Season1_Episode2_00_21_37_03.jpg?w=1600&h=900&fit=crop",
        rank: 3,
        },
        {
        title: "Solo Leveling",
        img: "https://images.immediate.co.uk/production/volatile/sites/3/2025/03/solo-levelling-season-2-finale-993c204.jpg",
        rank: 4,
        },
        {
        title: "Zom 100",
        img: "https://starcrossedanime.com/wp-content/uploads/2023/07/Zom-100-1.2.jpg",
        rank: 5,
        },
    ];


    const handleRecommend = () => {
        const random = topFive[Math.floor(Math.random() * topFive.length)];
        alert(`You should watch: ${random.title}`);
    };

    return(
        <section className="top-and-recommend">
            {/* Left Side — My Top 5 */}
            <div className="top-five-section">
                <h2 className="section-title">My Top 5</h2>
                <div className="top-five-container">
                {topFive.map((item, index) => (
                    <div key={index} className="bubble">
                        <span className="rank-number">{item.rank}</span>
                        <img src={item.img} alt={item.title} className="bubble-img" />
                    </div>
                ))}
                </div>
            </div>

            {/* Right Side — Recommend Me an Anime */}
            <div className="recommend-section">
                <h2 className="section-title">Recommend Me an Anime</h2>
                <div className="recommend-box">
                <p>Feeling undecided? Click below to get a random anime recommendation!</p>
                <button className="recommend-btn" onClick={handleRecommend}>
                    Recommend Me
                </button>
                </div>
            </div>
        </section>

    );
};

