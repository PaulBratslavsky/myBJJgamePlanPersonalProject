export const processVideoUrl = (url) => {
  
  const getVideoId = (url) => {
    // Regular expresion gets URL video ID from URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return 'error';
    }
  }

  const videoId = getVideoId(url);
  const finalVideoUrl = `https://www.youtube.com/embed/${videoId}`;

  return finalVideoUrl;
}


    