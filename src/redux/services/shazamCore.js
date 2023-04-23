import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '368132f08emsh4f580753d17f979p16a40ejsnb4f14cc2462f',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track?id=4WNcduiCmDNfmTEz7JvmLv', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam.p.rapidapi.com/charts/track',
            prepareHeaders: (headers)=>{
                headers.set('X-RapidAPI-Key','368132f08emsh4f580753d17f979p16a40ejsnb4f14cc2462f');
                return headers
                
            },
        }),
        endpoints:(builder)=>({
            getTopCharts: builder.query({query:()=>''}),  //here if we have extra end point to add we add it here ' ' Ex: tracks/delhi
        })
    });
    export const{
        useGetTopChartsQuery,
    }= shazamCoreApi;















    // const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': '368132f08emsh4f580753d17f979p16a40ejsnb4f14cc2462f',
    //       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    //     }
    //   };
      
    //   fetch('https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));