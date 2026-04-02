function optimal(pages, frames){

let frame = [];
let steps = [];
let faults = 0;

for(let i=0;i<pages.length;i++){

let page = pages[i];

if(!frame.includes(page)){

faults++;

if(frame.length < frames){
frame.push(page);
}
else{

let farthest = -1;
let index = -1;

for(let j=0;j<frame.length;j++){

let nextUse = -1;

for(let k=i+1;k<pages.length;k++){
if(pages[k] === frame[j]){
nextUse = k;
break;
}
}

if(nextUse === -1){
index = j;
break;
}

if(nextUse > farthest){
farthest = nextUse;
index = j;
}

}

frame[index] = page;

}

}

steps.push([...frame]);

}

return {
faults:faults,
steps:steps
};

}