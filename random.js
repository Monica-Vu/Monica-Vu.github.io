/* test case: McDonald's, Wendy's, Starbucks, 1000 Islands, 168 Sushi, Ten Sushi, Koreana, 88 Sushi, PrestoTea, Sugar Marmalade,
Chat Time, My Sweet Tea, Ginza Ramen, Sansotei Ramen, Broadway, Sushi Kan, The Fry */

function pickOne() {
    var list = document.getElementById("list").value.trim();
    var list = document.getElementById("list").value.split(",");
    
    var randomNum = Math.floor((Math.random() * list.length ) )
    console.log(list + randomNum);
    document.getElementById('returnedText').innerHTML = list[randomNum];
    }
    
function randomize() {
  var list = document.getElementById("list").value.trim();
  var list = document.getElementById("list").value.split(",");
    
  list.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById('returnedText').innerHTML = list;
}
    
function clearReturnedText() {
  document.getElementById("returnedText").innerHTML = "";
}