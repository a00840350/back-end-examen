import express from 'express';
import cors from 'cors';
import visitorsRoutes from './routes/visitors';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.use('/', visitorsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});