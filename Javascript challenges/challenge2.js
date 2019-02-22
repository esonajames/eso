var sideX = 7;
var sideY = 8;
var sideK = 9;
var s = (sideX + sideY + sideK)/2;
var area = Math.sqrt(s*((s-sideX)*(s-sideY)*(s-sideK)));
console.log(area);