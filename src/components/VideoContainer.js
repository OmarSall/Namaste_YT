import {useEffect, useState} from "react";
import {YOUTUBE_VIDEO_API} from "../constants/constants";
import VideoCard from "./VideoCard";
import {Link} from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        if (!data.ok) {
            return;
        }
        const videos = await data.json();

        const cleanedVideos = videos.items.filter(video => (
            video?.id &&
                video?.snippet?.title &&
                video?.snippet?.thumbnails?.medium?.url &&
                video?.statistics?.viewCount
        ));

        setVideos(cleanedVideos)
    }

    return (
        <div className="flex flex-wrap">
            {
                videos.length > 0 && (
                    videos.map(video => (
                        <Link to={"/watch?v=" + video.id}>
                            <VideoCard key={video.id} info={video}/>
                        </Link>
                    ))

                )
            }
        </div>
    )
}

export default VideoContainer;