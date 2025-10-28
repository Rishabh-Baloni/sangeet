import cron from 'node-cron';
import fetch from 'node-fetch';

const RENDER_URL = process.env.RENDER_URL || 'https://sangeet-himk.onrender.com';

// Auto-wake function to prevent Render free tier from sleeping
const autoWake = () => {
    // Ping every 14 minutes to prevent sleep
    cron.schedule('*/14 * * * *', async () => {
        try {
            const response = await fetch(`${RENDER_URL}/health`, {
                method: 'GET',
                timeout: 10000
            });
            
            if (response.ok) {
                console.log(`Auto-wake ping successful at ${new Date().toISOString()}`);
            } else {
                console.log(`Auto-wake ping failed with status: ${response.status}`);
            }
        } catch (error) {
            console.error('Auto-wake ping error:', error.message);
        }
    });
    
    console.log('Auto-wake system initialized - pinging every 14 minutes');
};

export { autoWake };