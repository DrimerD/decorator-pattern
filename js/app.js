class User {
    constructor(lastVisitDate, globalDiscount, nightDiscount, weekendDiscount, ordersCount, ordersTotalPrice, bonus) {
        this.lastVisitDate = lastVisitDate;
        this.globalDiscount = globalDiscount;
        this.nightDiscount = nightDiscount;
        this.weekendDiscount = weekendDiscount;
        this.ordersCount = ordersCount;
        this.ordersTotalPrice = ordersTotalPrice;
        this.bonus = bonus;
    }
}

const date = new Date();
const startNight = 23;
const endNight = 5;
const workDay = 5;

const getDiscountNight = user => {
    if (startNight >= date.getHours() && endNight <= date.getHours())
        user.bonus += user.nightDiscount;
};

const getDayDiscount = user => {
    if (workDay >= date.getDay())
        user.bonus += user.weekendDiscount;
};

const getDiscount = user => {
    getDiscountNight(user);
    getDayDiscount(user);
    user.bonus += user.globalDiscount;
};

const getBonus = user => {
    let getlastVisitDay = moment(user.lastVisitDate);
    let getDayVisit = getlastVisitDay.fromNow();
    if (getDayVisit.substr(0,2) <= 10)
        user.bonus += user.ordersCount + user.ordersTotalPrice;
};

const user = new User('2018-05-06', 100, 100, 50, 5, 100, 0);
getDiscount(user);
getBonus(user);
console.log(user);

