import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import { Activity, Leaderboard, Team, User, Workout } from '../models/octofit.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      { name: 'Alicia', email: 'alicia@example.com', team: 'Trailblazers' },
      { name: 'Mateo', email: 'mateo@example.com', team: 'Summit Squad' },
      { name: 'Sofia', email: 'sofia@example.com', team: 'Trailblazers' },
    ]);
    await Team.insertMany([
      { name: 'Trailblazers', members: 2, ranking: 1 },
      { name: 'Summit Squad', members: 1, ranking: 2 },
    ]);
    await Activity.insertMany([
      { userId: 1, type: 'Run', duration: 30, calories: 280 },
      { userId: 2, type: 'Cycling', duration: 45, calories: 340 },
      { userId: 3, type: 'Strength', duration: 35, calories: 220 },
    ]);
    await Leaderboard.insertMany([
      { rank: 1, user: 'Alicia', points: 950 },
      { rank: 2, user: 'Mateo', points: 870 },
      { rank: 3, user: 'Sofia', points: 760 },
    ]);
    await Workout.insertMany([
      { name: 'HIIT Blast', difficulty: 'Intermediate', duration: 25 },
      { name: 'Mobility Flow', difficulty: 'Beginner', duration: 15 },
      { name: 'Power Circuit', difficulty: 'Advanced', duration: 40 },
    ]);

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
