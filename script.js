function Hamburger (size) {
      this.allCalories=size.callories;
      this.totalPrice=size.price;
  
}
Hamburger.prototype.addTopping=function (topping) {
      this.allCalories+=topping.callories;
      this.totalPrice+=topping.price;
    }

Hamburger.prototype.getCallories=function () {
  return  this.allCalories;
  }

  Hamburger.prototype.getPrice=function () {
    return this.totalPrice;
  }

  Hamburger.SIZE_BIG = { price: 100, callories: 40 };
  Hamburger.SIZE_MEDIUM={price: 75, callories: 30};
  Hamburger.SIZE_SMALL = { price: 50, callories: 20 };

  Hamburger.TOPPING_MAYO = { price: 20, callories: 5 };
  Hamburger.TOPPING_POTATO = { price: 15, callories: 10 };
  Hamburger.TOPPING_CHEESE = { price: 10, callories: 20 };
  Hamburger.TOPPING_SALAD = { price: 20, callories: 5 };
  Hamburger.TOPPING_SPICES = { price: 15, callories: 0 };

