import React, { useEffect, useState } from "react";
import '../css/ComponentsCss/RecentlyWatched.css'

export default function RecentlyWatched() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function fetchAniList() {
      const query = `
        query {
          MediaListCollection(userName: "Kobe5haw", type: ANIME, status: COMPLETED, sort: UPDATED_TIME_DESC) {
            lists {
              entries {
              score
                media {
                  title { english romaji }
                  coverImage { extraLarge large }
                  siteUrl
                }
              }
            }
          }
        }
      `;

      const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      const entries = data.data.MediaListCollection.lists[0].entries;
      setAnimeList(entries);
    }

    fetchAniList();

    // Optional: auto-refresh every 5 minutes
    const interval = setInterval(fetchAniList, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
   <section className="anime-section">
      <div className="recentlytitleSection">
        <h2 className="section-title">My Recently Watched </h2>
        <div className="countBox">
          
            <h1 className="count">({animeList.length})</h1>
          
        </div>
      </div>
      <div className="carousel">
        {animeList.map((item, index) => (
          <div key={index} className="anime-card">
            <a href={item.media.siteUrl} target="_blank" rel="noopener noreferrer">
              <div 
                  className="anime-image-container"
                  style={{backgroundImage: `url(${item.media.coverImage.extraLarge})`}}
                >
                <div className="anime-overlay">
                  <div className="cardText">
                    <p className="anime-title">{item.media.title.english || item.media.title.romaji}</p>
                    <p className="rating">{item.score || "N/A"}/10 <span style={{ color: 'gold', fontSize: '0.9rem' }}>★</span></p>
                  </div>
                </div>
                </div>
                
            </a>
            
          </div>
        ))}
      </div>
    </section>
  
  );
}