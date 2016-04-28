var sectionEl = document.getElementById('my-list');
var hours = ['10','11','12','1','2','3','4','5'];

var pikePlace = {
  storeName: 'pike',
  minNumCust: 17,
  maxNumCust: 88,
  avgPerCust: 5.2,
  hourlySales:[],
  totalSales: 0,
  randomCustomer: function(min, max) {
    return Math.random() * (max - min) + min;
    // console.log(this.randomCustomer);
  }
};

pikePlace.hourlyCookies = function(arrHours, random, avg, arrSales, totals) {
  for(var i = 0; i < arrHours.length; i++) {
    var ran = Math.floor(random(this.minNumCust, this.maxNumCust) * avg);
    arrSales.push(ran);
    totals += ran;
    // console.log(ran);
  }
  return totals;
};
  // render: function() {
  //     this.hourlyCookies();
  //
  //     var ulEl = document.createElement('ul');
  //     ulEl.appendChild(document.createTextNode(this.name));
  //     var sectionEl = document.getElementById('store_data').appendChild(ulEl);
  //
  //     for (var i = 0; i < hours.length; i++) {
  //       var liEl = document.createElement('li');
  //       liEl.textContent = hours[i] + ": " + this.hourlySales[i];
  //       ulEl.appendChild(liEl);
  //     }
  //
  //     var liEl_two = document.createElement('li');
  //     liEl_two.textContent = 'Total: ' + this.totalSales;
  //     ulEl.appendChild(liEl_two);
  //   }
