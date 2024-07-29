//your JS code here. If required.

let output=document.getElementById('output');

function getNumber(){
	return new Promise(res=>{
		setTimeout(()=>{
			let number=Number(document.getElementById('ip').value);
			output.textContent=`Result:${number}`;
			res(number);
		},2000);
	})
}

function mulNumber(num){
	return new Promise(res=>{
		setTimeout(()=>{
			let ans=num*2;
			output.textContent=`Result:${ans}`;
			res(ans);
		},1000);
	})
}
function subNumber(num){
	return new Promise(res=>{
		setTimeout(()=>{
			let ans=num-3;
			output.textContent=`Result:${ans}`;
			res(ans);
		},1000);
	})
}
function divNumber(num){
	return new Promise(res=>{
		setTimeout(()=>{
			let ans=(num/2);
			output.textContent=`Result:${ans}`;
			res(ans);
		},1000);
	})
}
function addNumber(num){
	return new Promise(res=>{
		setTimeout(()=>{
			let ans=num+10;
			output.textContent=`Final Result:${ans}`;
			res(ans);
		},1000);
	})
}

function errorMsg(err){
			output.textContent=`Error: ${error.message}`;
}
document.getElementById('btn').addEventListener('click', () => {
getNumber()
.then(mulNumber)
.then(subNumber)
.then(divNumber)	
.then(addNumber)
.catch(errorMsg)
})