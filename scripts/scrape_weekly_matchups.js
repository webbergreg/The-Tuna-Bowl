'use strict';

const axios = require('axios');
const fs = require('fs');
const request = require('request');

const API_BASE_URL = 'https://api.sleeper.app/v1/';
const LEAGUE_ID = '718535437227999232';
const PLAYERS_IN_LEAGUE = 12;
const myArgs = process.argv.slice(2);
const YEAR = myArgs[0]
const WEEK = myArgs[1];

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
    const users = await getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/users`);
    console.log(`----- Got Users`);

    console.log(`----- Getting League ${LEAGUE_ID} Rosters`);
    const rosters = await getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/rosters`);
    console.log(`----- Got Rosters`);
    
    //go through each team in the weekly matchups and pair them into games

    console.log(`----- Get League ${LEAGUE_ID} Week ${week} Matchups`);
    const matchups = await getSleeperData(`${API_BASE_URL}/league/${LEAGUE_ID}/matchups/${week}`);
    console.log(`----- Got Matchups`);

    for(let t = 0; t<matchups.length; t++){

        const matchup = matchups[t];

        //splice in the correct roster & user
        const roster = rosters.find((r)=>{
            return r.roster_id === matchup.roster_id;
        })
        const user = users.find((u)=>{
            return u.user_id === roster.owner_id
        });

        //download the user avatar, at this point in time
        const userAvatarFilename = `${YEAR}-${WEEK}-${user.avatar}.png`;
        const avatarPath = `../public/avatars/${userAvatarFilename}`;
        const avatarUrl = `https://sleepercdn.com/avatars/thumbs/${user.avatar}`;

        try {
            if (fs.existsSync(avatarPath)) {

            }else{
                console.log(`Download user avatar: ${user.avatar}`);
                await download(avatarUrl, avatarPath);
                console.log(`Download complete`);
            }
        } catch(err) {
            
        }
        user.avatar = userAvatarFilename;

        //download the roster avatar, at this point in time
        const metaAvatarUrl = user?.metadata?.avatar;
        if(metaAvatarUrl){

            const urlPieces = metaAvatarUrl.split('/');
            const fileName = urlPieces[urlPieces.length-1];
            let file = fileName.split('.')[0];
            let ext = fileName.split('.')[1];
            if(!ext){
                ext = 'png';
            }
            
            const userMetaAvatarFilename = `${YEAR}-${WEEK}-${file}.${ext}`;
            const metaAvatarPath = `../public/avatars/${userMetaAvatarFilename}`;
            
            try {
                if (fs.existsSync(metaAvatarPath)) {
                    
                }else{
                    console.log(`Download user metadata avatar: ${metaAvatarUrl}`);
                    await download(metaAvatarUrl, metaAvatarPath);
                    console.log(`Download complete`);
                }
            } catch(err) {
                
            }
            user.metadata.avatar = userMetaAvatarFilename;
        }
        
        matchup.roster = roster;
        matchup.user = user;

        //put into the proper game
        games[matchup.matchup_id - 1].push(matchup);
    }

    //write the info to a file
    let data = JSON.stringify(games);

    const dataPath = `../public/data/week-${week}-matchups.json`;

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

scrapeSleeper(WEEK);