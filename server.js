const express = require('express');
const ping = require('ping');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const ips = [
    'foxic.ir',
    'bruh.ir',
    'm1ch.ir'
];

const responseTimes = {};

async function getStatuses() {
    const statuses = await Promise.all(ips.map(async (ip) => {
        const res = await ping.promise.probe(ip);
        const responseTime = res.time;
        
        if (!responseTimes[ip]) {
            responseTimes[ip] = [];
        }
        responseTimes[ip].push(responseTime);
        
        const avgResponseTime = responseTimes[ip].reduce((a, b) => a + b, 0) / responseTimes[ip].length;

        const uptime = res.alive ? 100 : 0;
        
        return {
            ip,
            status: res.alive ? 'up' : 'down',
            response_time: responseTime,
            avg_response_time: avgResponseTime.toFixed(2),
            uptime: uptime
        };
    }));
    return statuses;
}

app.get('/api/status', async (req, res) => {
    const statuses = await getStatuses();
    res.json(statuses);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
