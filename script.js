const arr =[];
function addTrans(){
var text = document.getElementById('text').value;
var Amount = document.getElementById('amount').value;
var minus = Amount.charAt(0);
// document.getElementById('money-plus').innerHTML=20000;
var total = document.getElementById('money-plus').innerHTML;
if(minus=="-"){
    var minus = document.getElementById('money-minus').innerHTML;
    minus = total-Amount;
    document.getElementById('money-minus').innerHTML=minus;
}
if(minus =="+")
{
    var i = total.charAt(1,length);
    document.getElementById('money-plus').innerHTML= i+Amount;
}
var balance = document.getElementById('balance').innerHTML;
balance=total-Amount;
document.getElementById('balance').innerHTML=balance;
var newOb = {txt:text,amount:Amount};
arr.push(newOb);
populate();
}
function populate(){
    var newEntry ="";
for(i=0;i<arr.length;i++){
newEntry += "<li class='minus'>"+arr[i].txt+"<span>"+arr[i].amount+"</span><button class='delete-btn' onclick='deleteentry(this)'>x</button></li>" 
}
document.getElementById('list').innerHTML = newEntry;
}
function deleteentry(args){
    let li = args.closest('li');
    let nodes = Array.from(li.closest('ul').children);
    let index = nodes.indexOf(li);
    arr.splice(1,index);
    populate();
}