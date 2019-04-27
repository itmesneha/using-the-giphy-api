//var url = "https://api.giphy.com/v1/gifs/translate?s=ryan_gosling&api_key=2w9epykrMcbgL01YjNWLrNB2hz9uBKYO";

var api = "https://api.giphy.com/v1/gifs/search?q=";
var query = "ryan_gosling";
var api_key = "&api_key=2w9epykrMcbgL01YjNWLrNB2hz9uBKYO&limit=10";

function setup() {
  noCanvas();
  var url = api + query + api_key;
  loadJSON(url,gotData);
}

function gotData(giphy)
{
  createImg(giphy.data[0].images.original.url);
}

function draw()
{

}
