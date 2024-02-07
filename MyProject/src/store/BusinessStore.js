import { makeObservable, observable, action } from "mobx";
class BusinessStore {

    details = {
        name: "SHOSHI WIGS",
        address: "Rashi 60 Bnei Brak",
        phone: "03-7552512",
        owner: "Shoshi Katz",
        description: "Dream wig design",
    };

    constructor() {
        makeObservable(this, {
            details: observable,
            editDetails: action,
        });
    }

    editDetails(newDetails) {
        if (Object.keys(newDetails).length) {
            this.details = newDetails;
        }
    }

}

export default new BusinessStore();