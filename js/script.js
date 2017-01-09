var perc = 0;

setInterval(function() {
	perc++;
	if (perc <= 100) {
		$('#progress').css('width', perc + '%');
	}

	if (perc === 100) {

		var total = buyerList.length;
		if (total > 0) {
			var randomIndex = Math.floor(Math.random() * total);
			$('#username, #buy').remove();
			$('#panel').append('<h1 class="winner">' + buyerList[randomIndex] + '</h1>');
		}
	}
}, 200);

var buyerList = [];

$('#buy').click(function() {

	var username = $('#username').val();

	if (username != '' && buyerList.indexOf(username) === -1) {
		buyerList.push(username);
		console.log(buyerList);
		$('#username').val('');
	}

});