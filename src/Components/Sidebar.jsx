import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div>
      <div className="pl-6 pt-4 cursor-pointer">
        <img className="w-15" src={assets.SpotifyLogo} alt='' />
      </div>
      <div className='bg-[#121212] h-[85%] rounded w-110 mt-5'>
        <div className="flex justify-between items-center px-4 pt-4">
          <div className='flex items-center'>
            <img className='w-7' src={assets.stack_icon} alt='' />
            <p className='font-bold text-[20px] color text-white p-3'>Your Library</p>
          </div>
          <div className="relative group inline-block">
            <p className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#333333] text-white text-[16px] font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-400 whitespace-nowrap">
              Create a playlist
            </p>
            <button className='bg-[#262626]  hover:bg-[#333333] transition-colors duration-400 cursor-pointer text-white text-sm pt-2.5 pb-2.5 pl-4 pr-4 rounded-full flex items-center gap-2'>
              <img src={assets.plus_icon} alt="plus" className="w-5 h-5" />
              <span className='font-bold text-[17px] color text-white'>Create</span>
            </button>
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 mt-9 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='font-bold text-[20px] color text-white'>Create your first playlist</h1>
          <p className='font-semibold text-[17px] color text-white'>It's easy,we'll help you</p>
          <button className='px-4 py-1.5 bg-white text-[18px] text-black rounded-full mt-4 mb-2 font-semibold w-40 
          cursor-pointer transition-transform duration-300 hover:scale-105'>Create playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 mt-9 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 pr-6'>
          <h1 className='font-bold text-[20px] color text-white'>Let's find some podcasts to follow</h1>
          <p className='font-semibold text-[17px] color text-white'>We'll keep you updated on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[18px] text-black rounded-full mt-4 mb-2 font-semibold w-45 
          cursor-pointer transition-transform duration-300 hover:scale-105'>Browse podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar