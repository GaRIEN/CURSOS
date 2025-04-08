class MyDate {
  constructor(
    public year: number = 1984,
    public _month: number = 6,
    private _day: number = 26
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${this.year}/${month}/${day}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  public add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this._day += amount;
    }
    if (type === "months") {
      this._month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear() {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(value: number) {
    try {
      if (value > 1 && value <= 12) {
        this._month = value;
      } else {
        throw new Error("month out of range");
      }
    } catch (e) {
      const error = (e as Error).message;
      console.log(error);
    }
  }
}

const newDate = new MyDate(2004, 3, 9);
console.log(newDate.month);

const newDate2 = new MyDate(2004, 3, 9);
newDate2.month = 11;
console.log("(11)=>", newDate2.month);

const newDate3 = new MyDate(2004, 3, 9);
newDate3.month = 25;
console.log("(error", newDate3.month);

console.log("With error handling");
