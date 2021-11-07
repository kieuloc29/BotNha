module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "taglientuc @mention",
    cooldowns: 90,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu gọi hồn!");
setTimeout(() => {a({body: "Alo con lợn" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "Có người cần gặp mày kìa đĩ ơi" + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "Dậy đi con lợn này" + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "Dậy thôi nào" + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "Địt mẹ mày bố nói tử tế mà đéo dậy à" + " " + name, mentions: arraytag})} , 6500);
setTimeout(() => {a({body: "Con mẹ mày tỉnh đi thằng lồn" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "Hiện hồn đi thằng mặt lồn" + " " + name, mentions: arraytag})} , 7500);
setTimeout(() => {a({body: "Địt con mẹ mày hiểu tiếng người không thằng lồn cút ra đây mau" + " " + name, mentions: arraytag})} , 8000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 8500);
setTimeout(() => {a({body: "Hiện ra bố mày xem nào" + " " + name, mentions: arraytag})} , 9000);
setTimeout(() => {a({body: "Địt Mẹ Cho Mày 3s Nữa Lộ Mặt" + " " + name, mentions: arraytag})} , 9500);
setTimeout(() => {a({body: "Cút bố đéo gọi nữa" + " " + name, mentions: arraytag})} , 10000);
 }