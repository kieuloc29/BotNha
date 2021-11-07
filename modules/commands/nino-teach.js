module.exports.config = {
    name:"ninoteach",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "D?y nino cute :3",
    commandCategory: "General",
    usages: "câu mu?n h?i nino => câu mu?n nino tr? l?i",
    cooldowns: 5
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
    let { messageID, threadID } = event;
    let work = args.join(" ");
    let fw = work.indexOf(" => ");
    if (fw == -1) {
        api.sendMessage("sai format r nha ;-;",threadID,messageID);
    } else {
        let ask = work.slice(0, fw);
        let answer = work.slice(fw + 4, work.length);
        if (ask=="") {api.sendMessage("thi?u câu h?i kìa ;-;",threadID,messageID)} else {
            if (!answer) {api.sendMessage("thi?u câu tr? l?i kìa ;-;",threadID,messageID)} else {
                    axios.get(encodeURI(`https://adreno-api.rootandroid.repl.co/nino/add/${ask}&&${answer}`)).then(res => {
                        if (res.data.reply == "Key v?i value có h?t cmnr, thêm cái cc"){
                            api.sendMessage("câu h?i, câu tr? l?i dã t?n t?i r nha ;-;",threadID,messageID)} else {
                                if (res.data.reply == "B? l?i cc gì dó éo bi?t") {api.sendMessage('L?i không xác d?nh ;-;',threadID,messageID)} else {
                                    api.sendMessage("d?y thành công!",threadID,messageID);
                                }
                            }
                    })
            }
        }
    }
}