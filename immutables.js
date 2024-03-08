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
	//удаляем поле name
	const userCopy = { //initial объект user
		...user //делаем копию
	};
	delete userCopy.name; //удаляем поле name

	//удаление через присвоение undefined (не работает с итерируемымт объектами)
	const user5 = {
		...user,
		name: undefined
	};

//Добавление элементов в массив
	const posts = [ //initial array
		{ id: 1, title: "React 1" },
		{ id: 2, title: "React 2" },
		{ id: 3, title: "React 3" },
		{ id: 4, title: "React 4" }
	];
  
	const posts2 = [{ id: 0, title: "React 0" }, ...posts]; //простое добавлене в начало массива
	const posts3 = [...posts, { id: 5, title: "React 5" }]; //простое добавление в конец массива
	const posts4 = [ //добавление в середину массива
		...posts.slice(0, 3), //копируем часть от индекса 0 до 3
		{ id: 5, title: "React 5" },//вставляем новый элемент
		...posts.slice(3)//копируем остаток массива
	];
	const posts6 = posts.slice();//копируем элементы массива в новый массив
	posts6.splice(2, 0, [{id: 5, title: "React 5" }]);//вставить элемент по индексу 2 с помощью метода splice
	//Первый аргумент - к какому элементу применить . Второй аргумент показывает сколько элементов надо удалить. Если 0, значит нужно добавить. Третий аргумент - что нужно добавить 

//Обновление элементов массива
	//поменяем title у элемента с id: 3
	const postsCopy = posts.slice(); //создаем копию массива posts с помощью метода slice без указания аргумента
	postsCopy[3] = { ...postsCopy[3], title: "React 4444" }; //по индексу 3 записываем копию старого объекта с индексом 3 и передаем новое значение поля title 

	//когда нужно просмотреть эелемнты массива и какой-то из элементов поменять
	const posts5 = posts.map((post) =>//вызов стрелочной функции на каждый элемент
	post.id === 3 ? { ...post, title: "React 3333" } : post //результат этой стрелочной функции записывает в новый массив
	//если id = 3, создать копию старого массива post с помощью спред-оператора ... и изменить значение свойства title. Иначе вернуть первоначальный массив post
	);

//Удаление элементов массива
	const posts8 = posts.slice();//копируем элементы массива в новый массив
	posts8.splice(2, 1);// методом splice удалить по индексу 2 один элемент

	const posts7 = posts.filter((post) => post.id !== 1);//метод filter вызывает стрелочную функцию для каждого элемента.
	//если функция возвращает true, до добавляет элемент в новый массив, а если false, то не добавляет