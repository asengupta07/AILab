import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Leaderboard, { ILeaderboard } from '@/models/Leaderboard';

export async function POST(request: NextRequest) {
    try {
        await dbConnect(); // Ensure database connection

        const body = await request.json();
        const { playerType, correct } = body;

        if (!playerType || typeof correct !== 'boolean') {
            return NextResponse.json({ error: 'Invalid request body. Required fields: playerType ("user" or "ai"), correct (boolean).' }, { status: 400 });
        }

        if (playerType !== 'user' && playerType !== 'ai') {
            return NextResponse.json({ error: 'Invalid playerType. Must be "user" or "ai".' }, { status: 400 });
        }

        // Find the document for the player type or create it if it doesn't exist
        const update: {
            $inc: { totalGames: number; wins?: number }; // Explicitly type $inc
        } = {
            $inc: { totalGames: 1 } // Always increment total games
        };

        if (correct) {
            update.$inc.wins = 1; // Increment wins only if correct (Type is now correct)
        }

        const options = {
            upsert: true, // Create the document if it doesn't exist
            new: true, // Return the modified document rather than the original
            setDefaultsOnInsert: true // Apply default values (0 for wins/totalGames) on creation
        };

        const updatedEntry = await Leaderboard.findOneAndUpdate(
            { playerType: playerType },
            update,
            options
        );

        return NextResponse.json({ message: 'Leaderboard updated successfully', data: updatedEntry }, { status: 200 });

    } catch (error) {
        console.error('Error updating leaderboard:', error);
        // Provide more specific error messages if possible
        let errorMessage = 'Failed to update leaderboard';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

// Optional: Add a GET handler to retrieve leaderboard stats if needed later
export async function GET(request: NextRequest) {
    try {
        await dbConnect();

        const leaderboardStats = await Leaderboard.find({});

        // Maybe calculate overall percentages here if needed
        let userWins = 0;
        let aiWins = 0;
        let totalGames = 0;

        const stats = leaderboardStats.reduce((acc, curr) => {
            acc[curr.playerType] = { wins: curr.wins, totalGames: curr.totalGames };
            if (curr.playerType === 'user') {
                userWins = curr.wins;
                totalGames = curr.totalGames; // Assume total games are the same for user/ai for simplicity
            } else if (curr.playerType === 'ai') {
                aiWins = curr.wins;
            }
            return acc;
        }, {} as Record<string, { wins: number; totalGames: number }>);

        return NextResponse.json({ 
            message: 'Leaderboard stats fetched successfully', 
            data: stats, 
            summary: { 
                userWinRate: totalGames > 0 ? (userWins / totalGames) : 0,
                aiWinRate: totalGames > 0 ? (aiWins / totalGames) : 0,
                totalGamesPlayed: totalGames
            }
         }, { status: 200 });

    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        let errorMessage = 'Failed to fetch leaderboard';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
} 