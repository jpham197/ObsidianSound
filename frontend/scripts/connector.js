const url = "http://127.0.0.1:5000/load";
let p = document.getElementById('1');

function getData() {
	fetch(url)
	.then((resp) => resp.json()) // Transform the data into json
	.then(function(data) {
		for (a = 1; a < 11; a++) {
			document.getElementById('t' + a).innerHTML = data[a-1];
		}
	})
	.catch(function(error){
		console.log(error);
	});
}
