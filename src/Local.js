class Local {
	static productItem(name, flag = false) {
		let data = localStorage.productItem(name);
		if (data) {
			if (flag) {
				return JSON.parse(data);
			} else {
				return data;
			}
		}
		return "";
	}
	static setItem(name, data, flag = false) {
		if (flag) {
			localStorage.setItem(name, JSON.stringify(data))
		} else {
			localStorage.setItem(name, data);
		}
	}
}

export default Local;