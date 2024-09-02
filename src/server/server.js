import express from "express";
import morgan from "morgan";

const app = express();

// use morgan
app.use(morgan('dev'))

app.use('/', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.send({
        'node-version': process.version,
        cpu: process.cpuUsage(),
        memory: process.memoryUsage(),
        pid: process.pid,
        uptime: process.uptime(),
    })

    console.log('hello')
})

export default app