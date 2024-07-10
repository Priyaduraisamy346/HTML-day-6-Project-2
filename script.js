const button=document.querySelector("button");//entire body selection
const body=document.querySelector("body");
const color=["#6665ab","red","blue","yellow","white","#ff6155","pink","#e75fb1","darkblue","black","purple","green","lightgreen","darkgreen","skyblue","palyellow","pulm","navblue","orange","grey","darkpink","maron"];
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
})
