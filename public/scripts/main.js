
offerExpire = new Date('October 27, 2021 07:59:59')
jeffs = 100

function congrats(){
	let timeText = document.getElementById("timeText");
	timeText.innerHTML = "Congratulations ADIII!!!!🥳🥳🥳🥳🥳";
	
	for(let i = 0; i < jeffs; i++){
		let jeff = document.createElement("img");
		jeff.src = "https://c.tenor.com/pSz2fFgH6bUAAAAM/jeff-bezos-laugh.gif";
		document.getElementById('jeffHome').appendChild(jeff);

	}
	

}























function main(){

	currentDate = Date.now()

	if(currentDate < offerExpire){
		let counter = document.getElementById("counter");
		let diff = new Date(offerExpire - currentDate);
		let out = "Days: " + (diff.getDate() - 1) + " Hours: " + diff.getHours() + " Minutes " + diff.getMinutes() + " Seconds: " + diff.getSeconds();

		counter.innerHTML = out;
		setTimeout( function(){ main() }, 10);
	}
	else{
		congrats();
	}

}

main();
