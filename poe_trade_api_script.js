const Http = new XMLHttpRequest();
const url = "https://www.pathofexile.com/api/public-stash-tabs?id=377366795-391010395-368842572-423820491-399680758";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function(){
    if(this.readyState ==4 && this.status == 200){
        console.log(Http.responseText);
    }
}