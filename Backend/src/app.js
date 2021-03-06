import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import './database';
import path from 'path';
class App {
  constructor() {
    this.server = express();
    this.midlewares();
    this.routes();
  }

  midlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
