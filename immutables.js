//Добавление/обновление поля объекта
	//изменить поле name, добавить поле status
	//user2 - initial object
	const user2 = {
		id: 1,
		name: 'John Doe'
	};
	//immutable update
	//запись через спред оператор
	const user3 = { //создаем новый объект
		...user2, //копируем старый объект с помощью спред-оператора
		name: 'Helen', //изменяем значение поля name
		status: 'super'//добавляем новое поле и его значение status
	}
	console.log(user3);
	//через функцию Object.assign
	const user4 = Object.assign({}, user2, {
		name: "evgeny bloger",
		status: "hero"
	});

//Многоуровневое изменение обёекта
	//меняем title поста
	const deepUser = { //initial object
		id: 1,
		name: "evgeny",
		post: {
			title: "hey"
		},
		photo: { //фото не поменялось, поэтому мы не будем создавать копию этого свойства
		url: "http//..."
		}
	};
	
	const deepUser2 = {//копия deepUser
		...deepUser,
		post: {
			...deepUser.post,
			title: "hoy"
		}
	};
	j(deepUser.photo === deepUser2.photo);//true

//Удаление поля объекта
