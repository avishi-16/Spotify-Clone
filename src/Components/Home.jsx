import { useLocation } from 'react-router-dom';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from '../Components/AlbumItem';
import SongItem from '../Components/SongItem';
import { useMemo } from 'react';

const Home = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';

  const filteredSongs = useMemo(() => {
    if (!query) return [];
    return songsData.filter(song =>
      song.name.toLowerCase().includes(query) ||
      song.desc.toLowerCase().includes(query)
    );
  }, [query]);

  if (query) {
    return (
      <div className="mt-10">
        <h2 className="text-white text-2xl font-bold mb-5">Search Results for “{query}”</h2>
        {filteredSongs.length === 0 ? (
          <p className="text-[#a7a7a7]">No songs found.</p>
        ) : (
          <div className="flex flex-wrap gap-4">
            {filteredSongs.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
  return (
    <>
      <div className="flex items-center gap-2.5 mt-11 ">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer font-semibold text-[18px]">All</p>
        <p className="bg-[#333333] text-white px-4 py-1 rounded-2xl cursor-pointer font-semibold text-[18px]">Music</p>
        <p className="bg-[#333333] text-white px-4 py-1 rounded-2xl cursor-pointer font-semibold text-[18px]">Podcasts</p>
      </div>

      <div className="mb-4">
        <h1 className='my-5 font-bold text-white text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className='my-5 font-bold text-white text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
