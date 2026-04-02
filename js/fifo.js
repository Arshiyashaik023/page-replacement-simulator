 function fifo(pages,frames){

let frame=[];
let faults=0;
let steps=[];

for(let page of pages){

if(!frame.includes(page)){

faults++;

if(frame.length<frames){
frame.push(page);
}
else{
frame.shift();
frame.push(page);
}

}

steps.push([...frame]);

}

return {faults,steps};

}