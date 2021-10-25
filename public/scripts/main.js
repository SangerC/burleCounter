
offerExpire = new Date('October 25, 2021 23:59:59')
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





function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

	return "Hours: " + hours + " Minutes: " + minutes + " Seconds: "+seconds + " MilliSeconds: " + milliseconds;
}



function main(){

	currentDate = Date.now()

	if(currentDate < offerExpire){
		let counter = document.getElementById("counter");
		let diff = (offerExpire - currentDate).toString()
		let out = msToTime(diff);

		counter.innerHTML = out;
		setTimeout( function(){ main() }, 10);
	}
	else{
		congrats();
	}

}

main();
