import React, { useEffect,useState } from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../Constants/Constants'
function RowPost(props) {
    const [post, setPost] = useState([])
    const [urlId,setUrlId]=useState()
    const randomIndex= Math.floor(Math.random() * Math.floor(20));
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            // console.log(response.data)
            
            setPost(response.data.results)
        }).catch((err)=>{
            // alert('Network error!')
        })
    },[])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    
    const handleMovieTrailer=(id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0])
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }
        })
        
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>  
                {
                    post.map((obj)=>
                        <img onClick={()=>handleMovieTrailer(obj.id)}
                         className={props.isSmall ? 'smallPosters':'poster'} alt='poster' src={`${imageUrl+(obj.backdrop_path)}`} />
                    )
                }
            </div>{
               urlId && <Youtube opts={opts} videoId={urlId.key}/>
            }
            
        </div>
    )
}

export default RowPost