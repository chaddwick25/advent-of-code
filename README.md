# adventofcode 

## Getting started
 npm install 
 cd src 
 ts-node day1.ts 

### Self-invoking function to pull puzzle input arry from https://adventofcode.com/2021/day/1/input
(function(){
    let depths = document.getElementsByTagName('pre')[0].innerHTML;
    console.log(depths.split(/\n/).map(Number));
}());