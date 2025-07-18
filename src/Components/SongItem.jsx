const SongItem = ({name,image,desc,id}) => {
    return(
        <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
         <img className="rounded" src={image} alt="" />
         <p className="text-white font-bold mt-2 mb-1 text-2xl">{name}</p>
         <p className="text-slate-200 text-[16px]">{desc}</p>
        </div>
    )
}
export default SongItem