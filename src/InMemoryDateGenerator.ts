import DateGenerator from "./domain/DateGenerator";

export default class InMemoryDateGenerator implements DateGenerator {
    private currentDate: string
    constructor() {
        this.currentDate = (new Date()).toDateString();
    }
    getDate(): Date {
        return new Date(this.currentDate);
    }   
    setDate(date: string) {
        this.currentDate = date;
    }
}