
export class Post {

    private _id?: number;
    private readonly _name: string;
    private readonly _msg: string;

    constructor(_name: string, _msg: string) {
        this._name = _name;
        this._msg = _msg;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get msg() {
        return this._msg;
    }
}