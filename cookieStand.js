var hours = ['10am','11am','12p','1p','2p','3p','4p','5p']

function store(storeName,minCustomers,maxCustomers,avgPerCust) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgPerCust = avgPerCust;
  this.cookiesPerHour = [];
  this.totalSales = 0;
}
  store.prototype.personPerHour = function(min,max) {
  return Math.random() * (max - min) + min;
  };

  store.prototype.cookieSalePerHour = function() {
  	for(var i=0; i< hours.length; i++) {
  		var cookies = Math.floor(this.avgPerCust * this.minCustomers
  		this.personPerHour(this.minCustomers, this.maxCustomers);
  		this.cookiesPerHour.push(cookies);
  		this.totalSales += cookies;

  }
  };
  Store.prototype.render = function(storeName,minCustomers,maxCustomers,avgPerCust) {
  	this.cookiesSalePerHour();
  	var ulEl = document.createElement();
  	ulEl.appendChild(document.createTextNode(this.storeName));
  	document.getElementById(‘store_data’).appendChild(ulEl);

  for(var j=0; j < hours.length;j++) {
  	var liEl = document.createElement(‘liEl’);
  	liEl.textContent = ‘Hourly Sales ‘+’ hours{j}
  	this.cookiesPerHour[j];
  	ulEl.appendChild(liEl);
  }

  var totalEl = document.createElement(‘li’)
  totalEl.textContent = ‘Total Daily Sales: ‘ + this.totalSales;
  ulEl.appendChild(totalEl);
  };

  var pikeStore = new Store(‘Pike Place’,17,88,5.2);
  var seaTac = new Store(‘SeaTac’,6,24,1.2);
  var southCenter = new Store(‘Southcenter’,11,38,1.9);
  var bellSquare = new Store(‘Bellevue Square’, 20,48,3.3);
  var alki = new Store('alki',3,24,2.6);

  pikeStore.render();
  seaTac.render();
  southCenter.render();
  bellSquare.render();
  alki.render();
