class Examiner {

    constructor(id, firstName, lastName, nationalProviderIdentifier) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._nationalProviderIdentifier = nationalProviderIdentifier;
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get nationalProviderIdentifier() {
        return this._nationalProviderIdentifier;
    }
}

export default Examiner;