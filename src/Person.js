class Person {
	constructor(name) {
		this._name = name;
		this._company = "";
		this._email = "";
		this._phone = "";
		this._address = "";
		this._website = "";
	}

	get name() {
		return this._name;
	}

	get company() {
		return this._company;
	}

	set company(x) {
		this._company = x;
	}

	get email() {
		return this._email;
	}

	set email(x) {
		this._email = x;
	}

	get phone() {
		return this._phone;
	}

	set phone(x) {
		this._phone = x;
	}

	get address() {
		return this._address;
	}

	set address(x) {
		this._address = x;
	}

	get website() {
		return this._website;
	}

	set website(x) {
		this._website = x;
	}
}

export default Person;