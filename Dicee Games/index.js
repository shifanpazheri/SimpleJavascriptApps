var n1=Math.floor(Math.random()*6);
var images1=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.querySelector(".dice .img1").setAttribute("src",images1[n1]);
var n2=Math.floor(Math.random()*6);
var images2=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.querySelector(".dice .img2").setAttribute("src",images2[n2]);
if(n1>n2)
{
  document.querySelector(".container h1").innerHTML="Player1 Wins!!!"
}
else if(n1<n2)
{
  document.querySelector(".container h1").innerHTML="Player2 Wins!!!"
}
else
{
  document.querySelector(".container h1").innerHTML="DRAW!!!"
}
