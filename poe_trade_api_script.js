// const Http = new XMLHttpRequest();
// const url = "https://www.pathofexile.com/api/public-stash-tabs?id=377366795-391010395-368842572-423820491-399680758";
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = function(){
//     // if(this.readyState ==4 && this.status == 200){
//         console.log(Http.responseText);
//     // }
// }

const request = require('request');
let found = false;
let updateId = "377548245-391202895-368999580-424015464-399865160";
function getInfo(){
    request(`https://www.pathofexile.com/api/public-stash-tabs?id=${updateId}`, function(error, response, body){
        console.log('pulling information for id:', updateId+"...");
        // console.log('error:', error);
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
        var data = JSON.parse(body);
        updateId = data.next_change_id;
        var stashes = data.stashes;
        // console.log(stashes);
        for(var i=0; i<data.stashes.length; i++){
            if(data.stashes[i].lastCharacterName == "UnfocusedWitch"){
                console.log('found a stash that belongs to you!');
                if(data.stashes[i].stash=="Test"){
                    console.log("Found your id:");
                    console.log(body.stashes[i].id);
                    found = true;
                }
            }
        }
    })
}
getInfo();
setInterval(getInfo, 30000);
// 