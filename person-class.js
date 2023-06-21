class PersonClass {
	constructor(name) {
    // add code here
        this.name = name;

	}

	// add code here
    greet(params) {
        console.log('hello')
    }

}

const george = new PersonClass('George');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'
