import app from './app';
import * as http from 'http';

const PORT = process.env.PORT || 8081;
http.createServer(app).listen(PORT);