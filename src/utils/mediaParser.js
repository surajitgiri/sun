export const parseMediaUrl = (url) => {
    if (!url) return null;

    let embedUrl = '';
    let platform = '';

    try {
        const urlObj = new URL(url);

        // Handle YouTube (Standard, Short, or youtu.be)
        if (urlObj.hostname.includes('youtube.com') || urlObj.hostname.includes('youtu.be')) {
            platform = 'youtube';
            if (url.includes('/shorts/')) {
                const videoId = url.split('/shorts/')[1].split('?')[0];
                embedUrl = `https://www.youtube.com/embed/${videoId}`;
            } else if (urlObj.hostname.includes('youtu.be')) {
                const videoId = urlObj.pathname.slice(1);
                embedUrl = `https://www.youtube.com/embed/${videoId}`;
            } else {
                const videoId = urlObj.searchParams.get('v');
                embedUrl = `https://www.youtube.com/embed/${videoId}`;
            }
        }
        // Handle Instagram (Reel or Post)
        else if (urlObj.hostname.includes('instagram.com')) {
            platform = 'instagram';
            // Strip trailing slashes and query parameters for a clean embed
            const cleanPath = urlObj.pathname.replace(/\/$/, '');
            embedUrl = `https://www.instagram.com${cleanPath}/embed`;
        }
        else {
            return { valid: false, original: url, platform: 'unknown' };
        }

        return { valid: true, original: url, embed: embedUrl, platform };
    } catch (error) {
        return { valid: false, original: url, platform: 'error' };
    }
};