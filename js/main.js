function runSimulation(){

let frames = parseInt(document.getElementById("frames").value);
let pagesInput = document.getElementById("pages").value;
let pages = pagesInput.split(" ").map(Number);

let fifoResult = fifo(pages,frames);
let lruResult = lru(pages,frames);
let optimalResult = optimal(pages,frames);
document.getElementById("fifoFaults").innerText = fifoResult.faults;
document.getElementById("lruFaults").innerText = lruResult.faults;
document.getElementById("optimalFaults").innerText = optimalResult.faults;

drawChart(fifoResult.faults,lruResult.faults,optimalResult.faults);

let min = Math.min(fifoResult.faults,lruResult.faults,optimalResult.faults);

let best="";

if(min === fifoResult.faults) best="FIFO";
else if(min === lruResult.faults) best="LRU";
else best="Optimal";

document.getElementById("bestAlgo").innerText="Best Algorithm : "+best;

displayTable(fifoResult.steps,frames,pages,"fifoTable");
displayTable(lruResult.steps,frames,pages,"lruTable");
displayTable(optimalResult.steps,frames,pages,"optimalTable");

}

function displayTable(steps,frames,pages,tableId){

let body=document.getElementById(tableId);

body.innerHTML="";

for(let i=0;i<steps.length;i++){

let row="<tr>";

row+=`<td>${i+1}</td>`;
row+=`<td>${pages[i]}</td>`;

for(let j=0;j<frames;j++){

let value = steps[i][j] !== undefined ? steps[i][j] : "-";

if(value === "-"){
row+=`<td class="empty">-</td>`;
}
else{
row+=`<td class="frame">${value}</td>`;
}

}

row+="</tr>";

body.innerHTML+=row;

}

}

function drawChart(fifo,lru,optimal){

const ctx=document.getElementById('faultChart');

new Chart(ctx,{
type:'bar',

data:{
labels:['FIFO','LRU','Optimal'],
datasets:[{
label:'Page Faults',
data:[fifo,lru,optimal],
backgroundColor:[
'#1E3A8A',
'#3B82F6',
'#6fd2fa',
]
}]
},

options:{
responsive:true
}

});

}