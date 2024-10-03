import React, { useState, useEffect } from 'react';
import instance from '../../service/AxiosOrder';
function VideoCard({id}){
    const [selectedCourse, setSelectedCourse] = useState(id || '');
    const [video, setVideo] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    // Fetch the video details when the component mounts

    console.log(selectedCourse);
    
    useEffect(() => {
        instance.get(`/video/${selectedCourse}`)
        .then((response) => {
        
            const videos=response.data
            console.log(videos);
           
        })
        .catch((error) => {
            console.error('Error fetching video:', error);
        });
    }, []);
    
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={thumbnail} alt={title} />
            <video controls>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
 
}

export default VideoCard;