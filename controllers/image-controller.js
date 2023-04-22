const Axios = require('axios');

g_app.get('/', async (req, res) => {
    return res.json({
        success: true
    });
});

g_app.post('/api/image', async (req, res) => {
    try {        
        const prompt = req.body.prompt.trim();
        const steps = req.body.steps;
        const batchSize = req.body.batchSize;
        
        const res = await Axios.post('http://127.0.0.1:7861/sdapi/v1/txt2img', {
            prompt: prompt,
            steps: steps,
            batch_size: batchSize
        });

        return res.json(res.data);
    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            message: 'Something went wrong'
        });
    }
});