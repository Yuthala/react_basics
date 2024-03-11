
//useState
//использование предыдущего состояния - Правило 1
function App() {
	const [counter, useCounter] = React.useState(0);

	const increment = () => {
		setCounter((lastCounter) => {//в функцию изменения состояния передаем колбэк-функцию, изменяющую состояние на основании предыдущего состояния
			return lastCounter + 1
		});
	}

	const increment3 = () => { //при каждом вызове функции increment() мы передаем функцию setCounter с предыдущим состоянием счетчика в параметрах
		increment();
		increment();
		increment();
	}

	return (
		<div>
			<div>Счетчик: {counter}</div>
			<button onClick={increment}>+1</button>
			<button onClick={increment}>+3</button>
		</div>
	);
}

//useState не вызывает ререндер, если состояние не поменялось - Правило 2
function App() {
	const [counter, useCounter] = React.useState({counter: 0}); //передадим сам counter в начальное состояние

	const increment = () => {
		setCounter((lastCounter) => {
			lastCounter.counter++;
			return lastCounter
			//состояние не поменялось - взяли lastCounter и возвращаем lastCounter. У react нет доступа к тому, что внутри функции с lastCounter были произведены какие-то операции
			//следовательно ререндер не вызывается, и значение counter не поменяется

			//Верно (иммутабельное изменение):
			return {
				...lastCounter, //скопировать в новый массив lastCounter
				counter: lastCounter.counter + 1 //изменить значение счетчика
			};

		});
	}

	const increment3 = () => { 
		increment();
		increment();
		increment();
	}

	return (
		<div>
			<div>Счетчик: {counter.counter}</div>
			<button onClick={increment}>+1</button>
			<button onClick={increment}>+3</button>
		</div>
	);
}
