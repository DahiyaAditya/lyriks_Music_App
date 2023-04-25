import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {DetailsHeader , Error, Loader, RelatedSongs} from '../components'
import { setActiveSong, playPause} from '../redux/features/playerSlice'
import {useGetSongDetailsQuery} from '../redux/services/shazamCore'
const SongDetails = () => {
    const {songid} = useParams();
    const {activeSong , isPlaying} = useSelector((state) => state.player);
    const {data: songData , isFetching : isFetchingSongDetails} = useGetSongDetailsQuery({songid});
    console.log(songid);
  return (
    <>
    <div className='flex flex-col'>
        {/* <DetailsHeader artistId ={artistId} songData={songData}></DetailsHeader> */}
        <div className='mb-10'>
            <h2 className='text-white text-3xl font-bold'>Lyrics:</h2>
            <div className='mt-5'>
                {
                    songData?.section[1].type === 'LYRICS' 
                     ?songData?.section[1].text.map((Line,i)=>(
                      <p className='text-gray-400 text-base my-1'></p>
                    )): <p className='text-gray-400 text-base my-1' >Sorry, no Lyrics found!</p>
                }
                
            </div>
        </div>
    </div>
    </>
  )
}

export default SongDetails