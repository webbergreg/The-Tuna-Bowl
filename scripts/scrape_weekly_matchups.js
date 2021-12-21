'use strict';

const fs = require('fs');
const util = require('./util');

const API_BASE_URL = 'https://api.sleeper.app/v1/';
const LEAGUE_ID = '718535437227999232';
const PLAYERS_IN_LEAGUE = 12;
const myArgs = process.argv.slice(2);
const YEAR = myArgs[0]
const WEEK = myArgs[1];

async function scrapeSleeper(week){

    let games = [
        [],
        [],
        [],
        [],
        [],
        []
    ];

    console.log(`----- Get League ${LEAGUE_ID} Users`);
    const users = await util.getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/users`);
    console.log(`----- Got Users`);

    console.log(`----- Getting League ${LEAGUE_ID} Rosters`);
    const rosters = await util.getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/rosters`);
    console.log(`----- Got Rosters`);
    
    //go through each team in the weekly matchups and pair them into games

    console.log(`----- Get League ${LEAGUE_ID} Week ${week} Matchups`);
    const matchups = await util.getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/matchups/${week}`);
    console.log(`----- Got Matchups`);

    for(let t = 0; t<matchups.length; t++){

        const matchup = matchups[t];

        //splice in the correct roster & user
        const roster = rosters.find((r)=>{
            return r.roster_id === matchup.roster_id;
        })
        let user = users.find((u)=>{
            return u.user_id === roster.owner_id
        });

        user = await util.transformUserAvatar(user);

        matchup.roster = roster;
        matchup.user = user;

        //put into the proper game
        games[matchup.matchup_id - 1].push(matchup);
    }

    //write the info to a file
    let data = JSON.stringify(games);

    const dataPath = `../public/data/${YEAR}-${week}-matchups.json`;

    console.log(`----- Writing data file: ${dataPath}`);
    fs.writeFileSync(dataPath, data);
    console.log('----- Write Complete');
}

scrapeSleeper(WEEK);