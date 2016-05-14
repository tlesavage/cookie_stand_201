var hours = ['10am','11am','12p','1p','2p','3p','4p','5p'];

function store(storeName,minCustomers,maxCustomers,avgPerCust) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgPerCust = avgPerCust;
  this.cookiesPerHour = [];
  this.totalSales = 0;
}
store.prototype.personPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
};

store.prototype.cookieSalePerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.floor(this.avgPerCust * this.personPerHour(this.minCustomers, this.maxCustomers)));
    this.totalSales += this.cookiesPerHour[i];
  }
};

store.prototype.render = function(){
  this.cookieSalePerHour();
  var tableEl = document.getElementById('stores');
  var headerEl = document.createElement('th');
  var newStore = document.createElement('tr');
  tableEl.appendChild(newStore);
  var rowEl = document.createElement('td');
  var elTableData = document.createElement('td');

  // elTableData.textContent = hours[hour]; + ' ' + this.cookiesPerHour[hour];
  // newStore.appendChild(elTableData);

  for (hour in hours) {
    headerEl.textContent = hours;
    tableEl.appendChild(headerEl);
  }

  // var totaLiEl = document.createElement('li');
  // totaLiEl.textContent = 'Total: ' + this.totalSales;
  // ulEl.appendChild(totaLiEl);
  // newStore.textContent = this.storeName;
  // newStore.appendChild(ulEl);
};

var pikeStore = new store('Pike Place',17,88,5.2);
var seaTac = new store('SeaTac',6,24,1.2);
var southCenter = new store('Southcenter',11,38,1.9);
var bellSquare = new store('Bellevue Square', 20,48,3.3);
var alki = new store('alki',3,24,2.6);

pikeStore.render();
seaTac.render();
southCenter.render();
bellSquare.render();
alki.render();
