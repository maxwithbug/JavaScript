console.log('hello world'[1]);
console.log('hello world'.length);
console.log('hello'.at(1)); //it's need browser enviroment to run properly
console.log('hello'.at(-1)); //it's starts from back 
console.log("hello"+"  "+"world");  //it's for space
console.log(`${'hello'}    ${'world'}`);  //it's for space
console.log(`${10+20}`); //the out put iis in string
console.log("suaman".endsWith("man"));
console.log("suaman".endsWith("a"));
console.log("suman".includes("m"));

//cool 
console.log("max".padEnd(10, "!")); //10 mane new string banabe oo 10 length  r joto khon a hobe na oo "!" end a put korte thakbe
console.log("max".padStart(10, "@")); //start a add korbe oo

console.log("NNN".repeat(2));

//for replace
console.log("max max max suman".replace("max","pakiraa"));
console.log("max max max suman".replaceAll("max","pakiraa"));


//slicing 
console.log("mmmm nnnnn ffff ggg ".slice(7)); //7-End
console.log("mmmm nnnnn ffff ggg ".slice(7 , 11)); //7-11(but not including 11)
console.log("mmmm nnnnn ffff ggg".slice(-3)); //from last -3 and till last $
console.log("baby".substring(2)); //2-last
console.log("babyyyy".substring(1 ,3)); //not including 3 - till last

//split
console.log("hh , gg , ee , iii".split(""));
console.log("hh , gg , ee , iii".split(","));
console.log("hh , gg , ee , iii".split(""));

//lower & upper 

console.log("nnnn".toUpperCase());
console.log("MMM".toLowerCase());

//rremoving space from string

console.log("      hee kkr rr t t     ".trim());

//date

let datetime = new Date();
// console.log(datetime);


console.log(Date.now()) //todays date in miliseconds;

// for diret date 

console.log(datetime.getDate());
console.log(datetime.getFullYear());

// **for setting date
// EX1
console.log(datetime.setFullYear(2025));
            // for checking
console.log(datetime.toDateString());
//EX2
console.log(datetime.setMonth(4));
console.log(datetime.toDateString());
            // other formats
console.log(datetime.toISOString());
console.log(datetime.toJSON());
console.log(datetime.toUTCString());





