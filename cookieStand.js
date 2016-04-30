// var sectionEl = document.getElementById('pike');
var hours = ['10am','11am','12p','1p','2p','3p','4p','5p'];
// var stores = [pikePlace];

var pikePlace = {
  storeName: 'Pike Place',
  minNumCust: 17,
  maxNumCust: 88,
  avgPerCust: 5.2,
  hourlySales:[],
  totalSales: 0,
  randomCustomer: function(max,min) {
    return Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust;

  },
  hourlyCookies: function(hours, ran, avg, array, total) {
    for(var i = 0; i < hours.length; i++) {
      var ran = Math.floor(this.randomCustomer(this.minNumCust, this.maxNumCust) * avg);
      console.log(hourlyCookies);
      array.push(ran);
      this.totalSales += ran;

    }
  },

  render: function() {
    this.hourlyCookies(this.hourlySales, this.totalSales, this.avgPerCust, this.randomCustomer, hours);
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.storeName));
    var sectionEl = document.getElementById('my-list').appendChild(ulEl);
    
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ':' + this.hourlySales[i];
      ulEl.appendChild(liEl);
    }
    var liEl_two = document.createElement('li');
    liEl_two.textContent = 'Total: ' + this.totalSales;
    ulEl.appendChild(liEl_two);
  }
};
var stores = [
  pikePlace,
];
for (var k = 0; k < stores.length; k++) {
  pikePlace.render();

};
