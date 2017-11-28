const url = "http://127.0.0.1:5000/load";

function getData() {
	fetch(url)
	.then((resp) => resp.json()) // Transform the data into json
	.then(function(data) {

		for (a = 1; a <= 25; a++) {
			document.getElementById('sound'+a).setAttribute("src", data[a-1]);
		}
	})
	.catch(function(error){
		console.log(error);
	});
}
