var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/gsClasses';
MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");

/*	db.collection("products").find().toArray(function(err, docs){
		if (err) {
			return console.log('Error', err);
		}
		console.log(docs);
		db.close();
	});
*/

/*	db.collection("products")
		.find()
		.limit(5)
		.toArray(function(err, docs){
			if (err) {
				return console.log('Error', err);
			}
			console.log(docs);
			db.close();
	});*/



/*	db.collection("products")
		.find()
		.limit(5)
		.skip(5)
		.toArray(function(err, docs){
			if (err) {
				return console.log('Error', err);
			}
			console.log(docs);
			db.close();
	});*/


/*	db.collection("products")
		.find()
		.limit(20)
		.sort({id: -1})
		.toArray(function(err, docs){
			if (err) {
				return console.log('Error', err);
			}
			console.log(docs);
			db.close();
	});*/


/*	db.collection("products")
		.find()
		.limit(15)
		.sort({bonus: -1})
		.toArray(function(err, docs){
			if (err) {
				return console.log('Error', err);
			}
			console.log(docs);
			db.close();
	});*/

/*		db.collection("products")
		.find()
		.limit(15)
		.sort({discount: -1})
		.toArray(function(err, docs){
			if (err) {
				return console.log('Error', err);
			}
			console.log(docs);
			db.close();
	});*/


/*		db.collection("products")
		.find()
		.limit(3)
		.sort({position: -1})
		.project({name: true})
		.toArray(function(err, docs){
			if (err) {
				return console.log('Error', err);
			}
			console.log(docs);
			db.close();
	});*/


/*		db.collection("products")
		.find()
		.limit(3)
		.sort({price: -1})
		.project({name: true, price: true})
		.toArray(function(err, docs){
			if (err) {
				return console.log('Error', err);
			}
			console.log(docs);
			db.close();
	});*/


/*		db.collection("products")
		.find()
		.limit(1)
		.sort({position: -1})
		.project({position: true})
		.toArray(function(err, docs){
			if (err) {
				return console.log('Error', err);
			}
			db.collection("products").insertOne({
			    available: false,
			    position: ++docs[0].position,
			    name: 'New Something',
			    short: 'Aliqua ex quis veniam voluptate veniam velit sint non sunt eiusmod consequat. Anim Lorem id sit duis sint voluptate quis elit ex laboris incididunt reprehenderit. Irure cillum ad est proident aute magna officia magna elit ut do aliqua quis id. Non est consectetur sunt pariatur nostrud nulla tempor minim in ad. Officia laboris voluptate esse nisi non officia excepteur.',
			    description: 'Ipsum laboris ex commodo enim dolor exercitation. Magna culpa est enim voluptate ea. Ad proident ad est laboris nostrud esse dolor reprehenderit incididunt eu. Do elit consectetur excepteur eu ut excepteur culpa. Est aute mollit sunt ad exercitation elit. Labore labore in minim non tempor ut minim id voluptate pariatur culpa. Proident dolor Lorem consequat excepteur cillum ullamco anim mollit officia veniam commodo quis excepteur occaecat.\r\nIncididunt occaecat sunt sint voluptate excepteur voluptate Lorem proident nisi. Qui deserunt dolor elit ut cupidatat quis pariatur Lorem excepteur irure. Commodo do cupidatat sint qui excepteur fugiat nulla cillum commodo labore laboris excepteur do. Anim do anim reprehenderit ut nulla minim anim culpa non cupidatat labore commodo aliquip labore. Pariatur quis nulla excepteur aute voluptate eu.\r\nNostrud fugiat laboris Lorem pariatur in consequat. Amet mollit amet ipsum aliqua incididunt occaecat non quis. Et et occaecat nisi irure ad est et tempor ad eiusmod incididunt. In anim eiusmod mollit adipisicing officia. Dolor id cillum ad nostrud amet nostrud laborum dolor pariatur ut mollit nostrud nulla incididunt. Incididunt aute in veniam sunt. Minim occaecat deserunt ex et aliqua.\r\nSit non minim sit enim magna. Adipisicing excepteur pariatur consequat non tempor irure aute dolore. Exercitation cupidatat proident officia nostrud sunt ea elit. Sint ullamco quis quis cillum excepteur ut fugiat. Consectetur officia deserunt officia laborum Lorem aute nisi commodo nulla voluptate voluptate ea consequat minim. In enim incididunt elit qui. Eu enim occaecat voluptate esse nostrud.\r\nCulpa proident incididunt sit laborum eu incididunt Lorem nostrud cupidatat et ullamco officia reprehenderit. Proident Lorem deserunt Lorem ea fugiat exercitation ipsum officia esse irure consequat occaecat velit. Do id tempor proident exercitation. Officia aliqua non pariatur laboris sint tempor do reprehenderit eiusmod. Irure exercitation tempor officia aliquip cillum enim nisi in magna eu ad cillum exercitation.\r\n',
			    price: 1024,
			    discount: 13,
			    category: 'new',
			    date: '2014-06-14T10:04:30 +05:00',
			    tags: [ 'color', 'dolore', 'exit' ]
			}, function(err){
				db.close();
				});
			
	});*/

/*		db.collection("products")
		.find({category: 'magna'})
		//.project({category: true})
		//.toArray(function(err, docs){
		.count(function(err, count){
			if (err) {
				return console.log('Error', err);
			}
			console.log(count);
			db.close();
		});*/


/*		db.collection("products")
		.deleteMany({category: 'magna'},function(err){
			if (err) {
				return console.log('Error', err);
			}
			console.log("Done")
			db.close();
		});*/



/*		db.collection('products')
		.updateMany({available: true}, {$set:{sold: true}}, function(err){
			if (err) {
				return console.log("Error", err);
			}
			db.collection('products')
			.find({available: true})
			.project({name: true, available: true, sold: true})
			.toArray(function(err, docs){
				if (err) {
					return console.log("Error", err);
				}
				console.log(docs);
				db.close();
			});
		});*/


/*		db.collection("products")
		.find({available: true})
		.count(function(err, count){
			if (err) {
				return console.log('Error', err);
			}
			console.log(count);
			db.close();
		});*/



/*			db.collection('products')
			.find()
			.limit(1)
			.sort({'position': -1})
			.project({position: true})
			.toArray(function(err, docs){
			if (err) {
				return console.log('Error', err);
			}
			//console.log(docs)
			db.collection("products").insertMany([{
			    available: false,
			    position: ++docs[0].position,
			    name: 'New Something'+ docs[0].position,
			    short: 'np',
			    description: 'new product',
			    price: 1024,
			    discount: 1,
			    category: 'new',
			    date: '2014-06-14T10:04:30 +05:00',
			    tags: [ 'ccc', 'dddd', 'exit' ]
			},{
			    available: true,
			    position: ++docs[0].position,
			    name: 'New Something'+ docs[0].position,
			    short: 'np',
			    description: 'new product',
			    price: 1024,
			    discount: 1,
			    category: 'new',
			    date: '2014-06-14T10:04:30 +05:00',
			    tags: [ 'ccc', 'dddd', 'exit' ]
			},{
			    available: false,
			    position: ++docs[0].position,
			    name: 'New Something'+ docs[0].position,
			    short: 'np',
			    description: 'new product',
			    price: 1024,
			    discount: 1,
			    category: 'new',
			    date: '2014-06-14T10:04:30 +05:00',
			    tags: [ 'ccc', 'dddd', 'exit' ]
			},{
			    available: true,
			    position: ++docs[0].position,
			    name: 'New Something'+ docs[0].position,
			    short: 'np',
			    description: 'new product',
			    price: 1024,
			    discount: 1,
			    category: 'new',
			    date: '2014-06-14T10:04:30 +05:00',
			    tags: [ 'ccc', 'dddd', 'exit' ]
			},{
			    available: false,
			    position: ++docs[0].position,
			    name: 'New Something'+ docs[0].position,
			    short: 'np',
			    description: 'new product',
			    price: 1024,
			    discount: 1,
			    category: 'new',
			    date: '2014-06-14T10:04:30 +05:00',
			    tags: [ 'ccc', 'dddd', 'exit' ]
			}], function(err){
				db.close();
				});
		});*/



			//double search - useless

/*		db.collection('products').
		.find()
		.sort({position: 1})
		.project({position: true})
		.toArray(function(err, docs){
			if (err) {
				console.log('Error', err)
			}
			db.collection('products')
			.find()
			.sort({price: 1})
			.project({price: true})
			.toArray(function(err, price){
				db.collection('products')
				.updateMany({

				});
			});
		});
*/

		
								//#18*--------\/------------#18*


	/*		db.collection('products').updateMany({}, {$inc: {price: 1}}, function(err){
			if (err) {
				console.log('Error', err);
			}
			db.collection('products')
			.find()
			.sort({position: -1})
			.limit(5)
			.toArray(function(err, docs){
				if (err) {
					return console.log("Error", err);
				}
				console.log(docs);
				db.close();
			});
		});
	*/



//------------------------------------через простой перебор(не работает)----------------------------\\

/*	db.collection('products')
	.find()
	.sort({position: 1})
	.project({position: true})
	.toArray(function(err, docs){
		for(var i=0; i<=docs.length; i++){
			if(docs[i]%2==0){
				db.collection('products').updateOne({}, {$set:{edited: ""}}, function(err){
					if (err) {console.log('Error', err)}
					else {
						console.log('Added');
						db.close();
					}
				});
			}
		}
	});*/

//});


//------------------------------------через перебор по position(не работает)----------------------------\\



/*	db.collection('products')
	.find()
	.sort({position: 1})
	.project({position: true})
	.toArray(function(err, docs){
			if(docs.position%2==0){
				//db.collection('products').updateOne({}, {$set:{edited: ""}});
				console.log(docs);
				db.close()
			}
			else {
				console.log('err');
				db.close();
			}
	});*/




//        #19 рабочий вариант)))
//---------------------------------!!!!!!!!!!через for-in работает!!!!!!!!------------------------\\



	db.collection('products')
		.find()
		.sort({position: 1})
		.project({position: true})
		.toArray(function(err, docs){
			for(var key in docs){
				if (docs[key].position%2==0) {
					db.collection('products').update({position: docs[key].position}, {$set:{edited: ""}}, function(err){
						if(err){
							console.log("Error");
						}
						else{
							db.close();
							console.log("added");
						}
					});
				}
			}
		});
});