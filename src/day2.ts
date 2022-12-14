/* 
--- Day 2: Dive! ---
Now, you need to figure out how to pilot this thing.

It seems like the submarine can take a series of commands like forward 1, down 2, or up 3:

forward X increases the horizontal position by X units.
down X increases the depth by X units.
up X decreases the depth by X units.
Note that since you're on a submarine, down and up affect your depth, and so they have the opposite result of what you might expect.

The submarine seems to already have a planned course (your puzzle input). You should probably figure out where it's going. For example:

forward 5
down 5
forward 8
up 3
down 8
forward 2
Your horizontal position and depth both start at 0. The steps above would then modify them as follows:

forward 5 adds 5 to your horizontal position, a total of 5.
down 5 adds 5 to your depth, resulting in a value of 5.
forward 8 adds 8 to your horizontal position, a total of 13.
up 3 decreases your depth by 3, resulting in a value of 2.
down 8 adds 8 to your depth, resulting in a value of 10.
forward 2 adds 2 to your horizontal position, a total of 15.
After following these instructions, you would have a horizontal position of 15 and a depth of 10. (Multiplying these together produces 150.)
*/


// imports puzzle input data(coords) from constant
import { coords } from "./constants/coords";

let horizontal = 0;
let depth = 0;

for(let index = 0; index < coords.length; index++){
    let values = coords[index].split(" ");
    // matches the first character of the word "up"
    if(values[0].charAt(0) === 'u'){
        depth -= Number(values[1])
    // matches the first character of the word "down"
    }else if(values[0].charAt(0) === 'd'){
        depth += Number(values[1])
    // forward
    }else{
        horizontal += Number(values[1])
    }
}

console.log(`After following these instructions, you would have a horizontal position of ${horizontal} and a depth of ${depth}. (Multiplying these together produces ${depth * horizontal})`);


