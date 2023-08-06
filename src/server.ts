import express from 'express';
import cors from 'cors';
import { initDB } from './initDB';
import { productRoutes } from './routes/product.routes';

const PORT = 5001;

const app = express();
app.use(cors());

initDB();

app.use(express.static('public'));

app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀🚀🚀`);
});
