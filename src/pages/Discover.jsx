import {Error , Loader, SongCard} from '../components'
import {genres} from '../assets/constants'
import {useGetTopChartsQuery} from '../redux/services/shazamCore'
import React from 'react'
import Track from '../components/MusicPlayer/Track'
import { useDispatch, useSelector } from 'react-redux'

const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong , isPlaying} = useSelector((state)=> state.player);
    const {data, isFetching, error} = useGetTopChartsQuery();
    const genereTitle = "Pop";
    if(isFetching) return <Loader title="Loding songs..."></Loader>;
    if(error) return <Error></Error>
    
  return (
    <>
    <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
             <h2 className='font-bold text-3xl text-white text-left '>Discover {genereTitle}</h2>
             <select onChange={()=>{}} value=" " className='bg-black text-purple-800 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
             {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title}</option>)}
             </select>
        </div>
        {/* here we start making song card */}
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
              {data?.tracks.map((song,i)=>(
                <SongCard 
                  key={song.key}
                  song={song}
                  i={i}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  data={data}
                >
                </SongCard>
              ))}
        </div>
    </div>
    </>
  )
}

export default Discover;
