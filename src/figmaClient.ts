import axios from 'axios';

const FIGMA_API_URL = 'https://api.figma.com/v1';

const fetchFigmaDesignData = async (fileId, accessToken) => {
    try {
        const response = await axios.get(`${FIGMA_API_URL}/files/${fileId}`, {
            headers: {
                'X-Figma-Token': accessToken,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Figma design data:', error);
        throw error;
    }
};

export default fetchFigmaDesignData;
