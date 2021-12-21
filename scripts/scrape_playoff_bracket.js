'use strict';

const axios = require('axios');
const fs = require('fs');
const request = require('request');

const API_BASE_URL = 'https://api.sleeper.app/v1/';
const LEAGUE_ID = '718535437227999232';
const PLAYERS_IN_LEAGUE = 12;
const myArgs = process.argv.slice(2);
const YEAR = myArgs[0];

function getSleeperData(url){

    return new Promise((resolve, reject)=>{

        axios.get(url).then((res)=>{
            resolve(res.data);
        }).catch((e)=>{
            console.log('API ERROR');
            console.log(e);
            reject(e);
        })
    });
}

async function scrapeSleeper(){

    console.log(`----- Get League ${LEAGUE_ID} Users`);
    const users = await getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/users`);
    console.log(`----- Got Users`);

    console.log(`----- Getting League ${LEAGUE_ID} Rosters`);
    const rosters = await getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/rosters`);
    console.log(`----- Got Rosters`);
    
    console.log(`----- Get League ${LEAGUE_ID} Playoff Bracket`);
    const bracket = await getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/winners_bracket`);
    console.log(`----- Got Playoff Bracket`);

    //go through each entry in the bracket, and splice in the user + roster information
    for(let matchup of bracket){

        //splice in the player 1 data
        const r1 = rosters.find((r)=>{
            return r.roster_id === matchup.t1;
        }) || null;

        matchup.t1_roster = r1;

        const u1 = (r1 !== null) ? users.find((r)=>{
            return r.user_id === r1.owner_id;
        }) : null;

        matchup.t1_roster = r1 || null;
        matchup.t1_owner = u1 || null;
        
        //splice in the player 2 data
        const r2 = rosters.find((r)=>{
            return r.roster_id === matchup.t2;
        }) || null;

        matchup.t2_roster = r2;

        const u2 = (r2 !== null) ? users.find((r)=>{
            return r.user_id === r1.owner_id;
        }) : null;

        matchup.t2_roster = r2 || null;
        matchup.t2_owner = u2 || null;
    }

    const dataPath = `../public/data/${YEAR}-playoffs.json`;
    let data = JSON.stringify(bracket);
    console.log(`----- Writing data file: ${dataPath}`);
    fs.writeFileSync(dataPath, data);
    console.log('----- Write Complete');
}

const download = function(uri, filename){

    return new Promise((resolve, reject)=>{
        
        request.head(uri, function(err, res, body){
            request(uri).pipe(fs.createWriteStream(filename)).on('close', ()=>{
                resolve();
            });
        });
    });
};

scrapeSleeper();