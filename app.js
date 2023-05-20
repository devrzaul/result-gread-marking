//Find GPA and Grade with respect to Marks in any subject

let name = prompt('Type Your Name');
let roll = prompt('Type Roll Number');
let bn = Number.parseInt(prompt('Type your Bangla Mark'));
let en = Number.parseInt(prompt('Type your English Mark'));
let mt = Number.parseInt(prompt('Type your Math Mark'));
let total_mark = bn+en+mt;
let bgread;
let egread;
let mgread;
let bpoint;
let epoint;
let mpoint;

//Bangla subject dynamic Gread Condition

if ( bn > 0 && bn < 33) {
    bgread = 'F';
} else if ( bn >= 33 && bn < 40){
    bgread = 'D';
} else if ( bn >= 40 && bn < 50){
    bgread = 'C';
} else if ( bn >= 50 && bn < 60){
    bgread = 'B';
} else if ( bn >= 60 && bn < 70){
    bgread = 'A-';
} else if ( bn >= 70 && bn < 80){
    bgread = 'A';
} else if ( bn >= 80 && bn < 100){
    bgread = 'A+';
} else{
    bgread = 'Invalid Gread'
}
//english subject dynamic Gread Condition

if ( en > 0 && en < 33) {
    egread = 'F';
} else if ( en >= 33 && en < 40){
    egread = 'D';
} else if ( en >= 40 && en < 50){
    egread = 'C';
} else if ( en >= 50 && en < 60){
    egread = 'B';
} else if ( en >= 60 && en < 70){
    egread = 'A-';
} else if ( en >= 70 && en < 80){
    egread = 'A';
} else if ( en >= 80 && en < 100){
    egread = 'A+';
} else{
    egread = 'Invalid Gread'
}

//Math subject dynamic Gread Condition

if ( mt > 0 && mt < 33) {
    mgread = 'F';
} else if ( mt >= 33 && mt < 40){
    mgread = 'D';
} else if ( mt >= 40 && mt < 50){
    mgread = 'C';
} else if ( mt >= 50 && mt < 60){
    mgread = 'B';
} else if ( mt >= 60 && mt < 70){
    mgread = 'A-';
} else if ( mt >= 70 && mt < 80){
    mgread = 'A';
} else if ( mt >= 80 && mt < 100){
    mgread = 'A+';
} else{
    mgread = 'Invalid Gread'
}

//Bangla subject dynamic point Condition

if ( bn > 0 && bn < 33) {
    bpoint = 0.00;
} else if ( bn >= 33 && bn < 40){
    bpoint = 1.00;
} else if ( bn >= 40 && bn < 50){
    bpoint = 2.00;
} else if ( bn >= 50 && bn < 60){
    bpoint = 3.00;
} else if ( bn >= 60 && bn < 70){
    bpoint = 3.50;
} else if ( bn >= 70 && bn < 80){
    bpoint = 4.00;
} else if ( bn >= 80 && bn < 100){
    bpoint = 5.00;
} else{
    bpoint = 'Invalid Gread'
}

//English subject dynamic point Condition

if ( en > 0 && en < 33) {
    epoint = 0.00;
} else if ( en >= 33 && en < 40){
    epoint = 1.00;
} else if ( en >= 40 && en < 50){
    epoint = 2.00;
} else if ( en >= 50 && en < 60){
    epoint = 3.00;
} else if ( en >= 60 && en < 70){
    epoint = 3.50;
} else if ( en >= 70 && en < 80){
    epoint = 4.00;
} else if ( en >= 80 && en < 100){
    epoint = 5.00;
} else{
    epoint = 'Invalid Gread'
}

//math subject dynamic point Condition

if ( mt > 0 && mt < 33) {
    mpoint = 0.00;
} else if ( mt >= 33 && mt < 40){
    mpoint = 1.00;
} else if ( mt >= 40 && mt < 50){
    mpoint = 2.00;
} else if ( mt >= 50 && mt < 60){
    mpoint = 3.00;
} else if ( mt >= 60 && mt < 70){
    mpoint = 3.50;
} else if ( mt >= 70 && mt < 80){
    mpoint = 4.00;
} else if ( mt >= 80 && mt < 100){
    mpoint = 5.00;
} else{
    mpoint = 'Invalid Gread'
}

let gpa = bpoint+epoint+mpoint;
let total_gpa = gpa /3;



console.log(`

Name : ${name}
Roll : ${roll}

Subject     Mark     Point     Gread
-------------------------------------
Bangla       ${bn}        ${bpoint}          ${bgread}
English      ${en}        ${epoint}          ${egread}
Math         ${mt}        ${mpoint}          ${mgread}
--------------------------------------
Total Mark : ${total_mark} GPA : ${total_gpa}
           
`);