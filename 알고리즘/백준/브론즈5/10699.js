const date = new Date();
console.log(
	`${date.getFullYear()}-${date.getMonth() + 1}-${
		String(date.getDate()).length === 1 ? '0' + date.getDate() : date.getDate()
	}`,
);
