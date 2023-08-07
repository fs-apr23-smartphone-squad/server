import express from 'express';
import cors from 'cors';
import { initDB } from './initDB';
import { productRoutes } from './routes/product.routes';
import { phoneRoutes } from './routes/phone.routes';
import { tabletRoutes } from './routes/tablet.routes';
import { accessoryRoutes } from './routes/accessory.routes';

const PORT = 5000;

const app = express();
app.use(cors());

initDB();

app.use(express.static('public'));

app.use(productRoutes);
app.use(phoneRoutes);
app.use(tabletRoutes);
app.use(accessoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀🚀🚀`);
});
