import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div>
            <div className='flex ml-50 pt-4'>
                <div className="bg-[#242424] rounded-full p-3 flex items-center justify-center w-15 h-15
             hover:bg-[#333333] transition-colors duration-350  cursor-pointer hover:scale-105">
                    <img className="w-7 h-7" src={assets.home_icon} alt="" />
                </div>
                <div className="flex items-center ml-4 bg-[#262626] hover:bg-[#333333] transition-colors duration-400 border border-transparent hover:border-white focus-within:border-2 focus-within:border-white rounded-full px-4 py-2 ease-in-out w-135 h-15">
                    <img className="w-6 h-6 mr-2" src={assets.search_icon} alt="" />
                    <input
                        type="text"
                        placeholder="What do you want to play?"
                        className="bg-transparent focus:outline-none placeholder-[#7c7c7c] text-white font-sans font-semibold text-[22px] w-full"
                    />
                </div>
                <div className='flex ml-93'>
                <button className='px-4 py-1.5 bg-white text-[18px] text-black rounded-full mt-4 mb-2 font-bold
                 w-45 cursor-pointer transition-transform duration-300 hover:scale-105'>Explore premium</button>
                  <img className='w-11 h-11 mt-2.5 ml-14 transition-transform duration-300 hover:scale-105 cursor-pointer' src={assets.profile_icon} />
                </div>
               
            </div>
        </div>
    )
}
export default Header