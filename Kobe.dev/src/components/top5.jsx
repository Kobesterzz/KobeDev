import React, { useState, useEffect } from "react";
import "../css/ComponentsCss/Top5Section.css";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Fetch anime data from Jikan API
  const searchAnime = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setResults([]);
      return;
    }
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${query}&limit=25`
      );
      const data = await res.json();
      setResults(data.data || []);
    } catch (err) {
      console.error("Error fetching anime:", err);
    }
  };

  // Add anime to user's list
const addToList = (anime) => {
  if (recommendList.some((item) => item.mal_id === anime.mal_id)) {
    alert("That anime is already in your list!");
    return;
  }
  setRecommendList([...recommendList, anime]);
};


  //saves recommend list
  const [recommendList, setRecommendList] = useState(() => {
    const saved = localStorage.getItem("recommendList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect (() => {
    localStorage.setItem("recommendList", JSON.stringify(recommendList));
  }, [recommendList]);

  return (
    <section className="top-and-recommend">
      {/* LEFT — My Top 5 */}
      <div className="top-five-section">
        <div className="titleSection">
          <h2 className="section-title">My Top 5</h2>
        </div>
        <div className="top-five-container">
          {topFive.map((item, index) => (
            <div key={index} className="bubble">
              <span className="rank-number">{item.rank}</span>
              <img src={item.img} alt={item.title} className="bubble-img" />
              <h1 className="title">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Recommend Me Section */}
      <div className="recommend-section">
        <div className="titleSection">
          <h2 className="section-title">What Others Recommend</h2>
          <button
            className="recommend-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Add To The List
          </button>
        </div>


        {/* Display user's recommendation list */}
        <div className="recommend-list">
          {recommendList.length === 0 && <p>No anime added yet.</p>}
          {recommendList.map((anime) => (
            <div key={anime.mal_id} className="anime-result">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="anime-thumb"
              />
              <div className='cardContent'>
                <p>{anime.title}</p>
                <div className="anime-genres">
                  {anime.genres && anime.genres.length > 0 ? (
                    anime.genres.slice(0, 3).map((g) => (
                      <span key={g.mal_id} className="genre-tag">
                        {g.name}
                      </span>
                    ))
                  ) : (
                    <span className="no-genres">No genres available</span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent overlay click from closing modal
          >
            <div className="modal-header">
              <h2>Recommend an Anime</h2>
              <button
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <form className="search-box" onSubmit={searchAnime}>
              <input
                type="text"
                placeholder="Search anime..."
                value={query}
                onChange={(e) => {
                  const value = e.target.value;
                  setQuery(value);
                  if (value.trim() === "") setResults([]);
                }}
                className="search-bar"
              />
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>

            <div className="search-results">
              {results.map((anime) => (
                <div key={anime.mal_id} className="anime-result">
                  <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    className="anime-thumb"
                  />

                  <div>
                    <p>{anime.title_english || anime.title}</p>
                    <div className="anime-genres">
                      {anime.genres && anime.genres.length > 0 ? (
                        anime.genres.slice(0, 3).map((g) => (
                          <span key={g.mal_id} className="genre-tag">
                            {g.name}
                          </span>
                        ))
                      ) : (
                        <span className="no-genres">No genres available</span>
                      )}
                    </div>

                  </div>

                  <button
                    className="add-btn"
                    onClick={() => addToList(anime)}
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
