import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    team: { type: String, required: true },
  },
  { timestamps: true },
);

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    members: { type: Number, required: true, min: 0 },
    ranking: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

const activitySchema = new Schema(
  {
    userId: { type: Number, required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true, min: 1 },
    calories: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

const leaderboardSchema = new Schema(
  {
    rank: { type: Number, required: true, min: 1 },
    user: { type: String, required: true },
    points: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

const workoutSchema = new Schema(
  {
    name: { type: String, required: true },
    difficulty: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
    duration: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
export const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);
export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);