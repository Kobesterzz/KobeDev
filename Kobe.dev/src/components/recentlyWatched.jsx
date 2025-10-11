import React, { useEffect, useState } from "react";
import '../css/Components.css'

export default function RecentlyWatched() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function fetchAniList() {
      const query = `
        query {
          MediaListCollection(userName: "Kobe5haw", type: ANIME, status: COMPLETED, sort: UPDATED_TIME_DESC) {
            lists {
              entries {
                media {
                  title { english romaji }
                  coverImage { large }
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
      <h2 className="section-title">My Recently Watched</h2>
      <div className="carousel">
        {animeList.map((item, index) => (
          <div key={index} className="anime-card">
            <a href={item.media.siteUrl} target="_blank" rel="noopener noreferrer">
              <img src={item.media.coverImage.large} alt={item.media.title.romaji} />
            </a>
            <p>{item.media.title.romaji}</p>
          </div>
        ))}
      </div>
    </section>
  
  );
}
