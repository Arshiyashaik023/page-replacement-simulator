function lru(pages, frames) {

let frame = [];
let faults = 0;
let steps = [];

for (let i = 0; i < pages.length; i++) {

let page = pages[i];

if (!frame.includes(page)) {

faults++;

if (frame.length < frames) {
frame.push(page);
}
else {

let leastIndex = Infinity;
let replaceIndex = 0;

for (let j = 0; j < frame.length; j++) {

let lastUsed = -1;

for (let k = i - 1; k >= 0; k--) {
if (pages[k] === frame[j]) {
lastUsed = k;
break;
}
}

if (lastUsed < leastIndex) {
leastIndex = lastUsed;
replaceIndex = j;
}

}

frame[replaceIndex] = page;

}

}

steps.push([...frame]);

}

return { faults, steps };

}