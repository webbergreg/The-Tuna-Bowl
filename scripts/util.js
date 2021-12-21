const fs = require('fs');
const request = require('request');
const axios = require('axios');

const transformUserAvatar =(user)=>{

    return new Promise(async (resolve, reject)=>{
        
        const avatarUrl = user?.metadata?.avatar || `https://sleepercdn.com/avatars/thumbs/${user.avatar}`;
        const urlPieces = avatarUrl.split('/');
        const fileName = urlPieces[urlPieces.length-1];
        let file = fileName.split('.')[0];
        let ext = fileName.split('.')[1];
        if(!ext){
            ext = 'png';
        }

        const avatarFilename = `${file}.${ext}`;
        user.avatar = avatarFilename;

        //download the file if we don't already have it
        const avatarPath = `../public/avatars/${avatarFilename}`;
        try {
            if (fs.existsSync(avatarPath)) {
                resolve(user);
            }else{
                console.log(`Download user avatar: ${avatarUrl}`);
                await downloadFileToPath(avatarUrl, avatarPath);
                resolve(user);
                console.log(`Download complete`);
            }
        } catch(err) {
            reject();
        }
    });
}

const downloadFileToPath = function(uri, filename){

    return new Promise((resolve, reject)=>{
        
        request.head(uri, function(err, res, body){
            request(uri).pipe(fs.createWriteStream(filename)).on('close', ()=>{
                resolve();
            });
        });
    });
};

const getSleeperData = (url)=>{

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

module.exports = { transformUserAvatar, getSleeperData, downloadFileToPath };