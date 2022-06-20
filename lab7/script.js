
let choice = prompt('Choose the variant: 1 = 1 : 2 = 2 : 3=3 : ');
choice = parseInt(choice);
if(choice === 1){

function chech (num){
if(isNaN(num) === false){
    if(num%2 == 0) {
        console.log('Num is even')
	document.write('Num is even')
    }
    else{
        console.log('Num is odd')
	document.write('Num is odd')
    }
}
else{
    console.log('NaN')
    document.write('NaN')
}
}
num = prompt("Enter number: ")
chech(num)
}

else if(choice===2){
let arr = [];
let sch = 0;
let flag = true;
let summ = 0;
function weird(){
for(let b = 1;b < 20; b++){
if(b===1){
	console.log("??")
}
else{
for (let i = 2; i < b; i++) {
	if (b % i == 0) {
		flag = false;
		break;
	}
	else{
		flag = true;
	}
}

if(flag == true){
	arr.push(b);
	sch++;
}
if(sch === 5){
	break;
}
}
}
console.log(arr);
for(let z = 0 ;z<5;z++){
	summ += arr[z];
}
}
console.log(summ);
document.write('Check console log')
weird();
}

else if(choice===3){
let to = prompt('Enter number: ');
function easy(to){
let go = 0;
let fa = '0';
let c;
for(let y = 0 ; y<to;y++){
	 fa = fa + "1";
	 c = parseInt(fa);
	 go = go + c;
}
console.log(go)
document.write(go)
}
easy(to);
}

else{
	console.log('Try again')
	document.write('Try again')
}
