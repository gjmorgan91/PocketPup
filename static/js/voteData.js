
exports.view = function(req, res){
  res.render('index', {
	'votePosts': [
		{ 	'ownName': 'Gregory Morgan',
			'dogName': 'Swarley',
			'topicName': 'Being Kewl',
			'image': 'vote_placeholder.JPG',
			'likes': '0',
			'dislikes': '0',
			'totalCount': '0',
			'commentCount': '0',
			'comment0': 'null'
		},
		{ 	'ownName': 'Jacob Aguirre',
			'dogName': 'Korra',
			'topicName': 'Punk Ass Bitch',
			'image': 'vote_dog2.jpg',
			'likes': '0',
			'dislikes': '0',
			'totalCount': '0',
			'commentCount': '0',
			'comment0': 'null'
		},    	
	]
  });
};