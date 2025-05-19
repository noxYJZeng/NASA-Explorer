export function isYoutube(url) {
    return url?.includes('youtube.com') || url?.includes('youtu.be')
  }
  
  export function getEmbeddableUrl(url) {
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0]
      return `https://www.youtube.com/embed/${videoId}`
    } else if (url.includes('youtu.be')) {
      const videoId = url.split('youtu.be/')[1]
      return `https://www.youtube.com/embed/${videoId}`
    }
    return url
  }
  