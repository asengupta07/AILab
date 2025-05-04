import mongoose, { Document, Model, Schema } from 'mongoose';

// Define the interface for the Leaderboard document
export interface ILeaderboard extends Document {
    playerType: 'user' | 'ai';
    wins: number;
    totalGames: number;
}

// Define the Leaderboard schema
const LeaderboardSchema: Schema<ILeaderboard> = new Schema(
    {
        playerType: {
            type: String,
            required: true,
            enum: ['user', 'ai'],
            unique: true, // Ensure only one entry per player type
        },
        wins: {
            type: Number,
            required: true,
            default: 0,
        },
        totalGames: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true } // Adds createdAt and updatedAt timestamps
);

// Create and export the Leaderboard model
// Check if the model already exists before defining it
const Leaderboard: Model<ILeaderboard> = mongoose.models.Leaderboard || mongoose.model<ILeaderboard>('Leaderboard', LeaderboardSchema);

export default Leaderboard; 