import express from 'express';
import { connectDatabase } from './config/database.js';
import { Activity, Leaderboard, Team, User, Workout } from './models/octofit.js';

const app = express();
const PORT = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api', (_req, res) => {
  res.json({
    message: 'Octofit Tracker API',
    baseUrl: apiBaseUrl,
    endpoints: [
      '/api/users/',
      '/api/teams/',
      '/api/activities/',
      '/api/leaderboard/',
      '/api/workouts/',
    ],
  });
});

app.get('/api/users/', (_req, res) => {
  User.find().lean().then((users) => res.json(users)).catch(() => res.status(500).json({ message: 'Unable to load users' }));
});

app.get('/api/teams/', (_req, res) => {
  Team.find().lean().then((teams) => res.json(teams)).catch(() => res.status(500).json({ message: 'Unable to load teams' }));
});

app.get('/api/activities/', (_req, res) => {
  Activity.find().lean().then((activities) => res.json(activities)).catch(() => res.status(500).json({ message: 'Unable to load activities' }));
});

app.get('/api/leaderboard/', (_req, res) => {
  Leaderboard.find().sort({ rank: 1 }).lean().then((leaderboard) => res.json(leaderboard)).catch(() => res.status(500).json({ message: 'Unable to load leaderboard' }));
});

app.get('/api/workouts/', (_req, res) => {
  Workout.find().lean().then((workouts) => res.json(workouts)).catch(() => res.status(500).json({ message: 'Unable to load workouts' }));
});

connectDatabase()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Octofit Tracker API running on ${apiBaseUrl}`);
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to start API:', error);
    process.exit(1);
  });
