"use client"

// EpisodeList.js
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getAnimeResponse } from '@/app/libs/api-libs';
import VideoPlayer from '../Utils/VideoPlayer';

const EpisodeList = ({ animeId }) => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await getAnimeResponse(`anime/${animeId}/episodes`);
        setEpisodes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching episodes:', error);
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, [animeId]);

  const episodeOptions = episodes.map((episode) => ({
    value: episode.otakudesu_url,
    label: `Episode ${episode.episode}`,
  }));

  const handleEpisodeChange = (selectedOption) => {
    const selectedEpisodeData = episodes.find((episode) => episode.otakudesu_url === selectedOption.value);

    setSelectedEpisode(selectedOption);

    if (selectedEpisodeData) {
      setVideoSrc(selectedEpisodeData.video_url);
    }
  };

  console.log('selectedEpisode:', selectedEpisode);

  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-4">Episode List</h2>
      {loading ? (
        <p className="text-white">Loading episodes...</p>
      ) : (
        <div>
          <Select
            options={episodeOptions}
            value={selectedEpisode}
            onChange={handleEpisodeChange}
            placeholder="Select an episode"
          />
          {selectedEpisode && videoSrc ? (
            <div>
              <p>
                {selectedEpisode.label}:{' '}
                <a
                  href={episodes.find((episode) => episode.otakudesu_url === selectedEpisode.value)?.otakudesu_url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tonton
                </a>
              </p>
              <VideoPlayer videoUrl={videoSrc} />
            </div>
          ) : (
            <p className="text-white">Select an episode to view details.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EpisodeList;
