import { albumsData } from '../assets/assets'
import AlbumItem from '../Components/AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from '../Components/SongItem'

const Home = () => {
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
                <div className='flex'>
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
    )
}
export default Home