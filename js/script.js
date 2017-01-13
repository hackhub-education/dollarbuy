var products = [

	{
		id: 0,
		name: '手提包',
		image_url: 'img/product1.jpg',
		time: 500
	},

	{
		id: 1,
		name: 'iPhone 7',
		image_url: 'img/product2.png',
		time: 500
	}

];


for (var i = 0; i < products.length; i++) {


	var productNode = $('<div>').addClass('item').attr('id','item-' + products[i].id).appendTo($('#products'));
	
	$(productNode).append('<h4>' + products[i].name + '</h4>');
	$(productNode).append('<img src="' + products[i].image_url + '">');

	$(productNode).append('<div class="panel" id="panel-' + products[i].id + '"> \
		<span class="bar" id="progress-' + products[i].id + '"></span> \
		<input type="text" name="name" id="username-' + products[i].id + '"> \
		<button class="donate" id="buy-'+ products[i].id + '">抢</button> \
		</div>');

	var perc = [0];
	perc[i] = 0;

	setInterval(function(i) {

		perc[i]++;
		if (perc[i] < 100) {
			$('#progress-' + products[i].id).css('width', perc[i] + '%');
		}

		if (perc[i] === 100 && buyerList[String(i)]) {
			var total = buyerList[String(i)].length;
			if (total > 0) {
				var randomIndex = Math.floor(Math.random() * total);
				$('#username-' + products[i].id + ', #buy-' + products[i].id).remove();
				$('#panel-' + products[i].id).append('<h1 class="winner">' + buyerList[String(i)][randomIndex] + '</h1>');
			}
		}
	}, products[i].time, i);

}

var buyerList = {};

$('.donate').click(function() {

	var productId = $(this).attr('id').split('-')[1];

	var username = $('#username-' + productId).val();

	if (typeof(buyerList[productId]) === 'undefined') {
		buyerList[productId] = [];
	}


	if (username != '' && buyerList[productId].indexOf(username) === -1) {
		buyerList[productId].push(username);
		console.log(buyerList);
		$('#username-' + productId).val('');
	}

});