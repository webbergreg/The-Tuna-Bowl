'use strict';

const util = require("./util");
const fs = require('fs');
const request = require('request');

const myArgs = process.argv.slice(2);
const API_BASE_URL = 'https://api.sleeper.app/v1/';
const LEAGUE_ID = '718535437227999232';
const PLAYERS_IN_LEAGUE = 12;
const YEAR = myArgs[0];

async function scrapeSleeper(){

    console.log(`----- Get League ${LEAGUE_ID} Users`);
    const users = await util.getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/users`);
    console.log(`----- Got Users`);

    console.log(`----- Getting League ${LEAGUE_ID} Rosters`);
    const rosters = await util.getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/rosters`);
    console.log(`----- Got Rosters`);
    
    console.log(`----- Get League ${LEAGUE_ID} Playoff Bracket`);
    const bracket = await util.getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/winners_bracket`);
    console.log(`----- Got Playoff Bracket`);

    //go through each entry in the bracket, and splice in the user + roster information
    for(let matchup of bracket){

        //splice in the player 1 data
        const r1 = rosters.find((r)=>{
            return r.roster_id === matchup.t1;
        }) || null;

        let u1 = (r1 !== null) ? users.find((r)=>{
            return r.user_id === r1.owner_id;
        }) : null;

        if(u1){
            u1 = await util.transformUserAvatar(u1);
        }

        matchup.t1_owner = u1 || null;
        
        //splice in the player 2 data
        const r2 = rosters.find((r)=>{
            return r.roster_id === matchup.t2;
        }) || null;

        let u2 = (r2 !== null) ? users.find((r)=>{
            return r.user_id === r2.owner_id;
        }) : null;

        if(u2){
            u2 = await util.transformUserAvatar(u2);
        }

        matchup.t2_owner = u2 || null;
    }

    const dataPath = `../public/data/${YEAR}-playoffs.json`;
    let data = JSON.stringify(bracket);
    console.log(`----- Writing data file: ${dataPath}`);
    fs.writeFileSync(dataPath, data);
    console.log('----- Write Complete');
}

scrapeSleeper();