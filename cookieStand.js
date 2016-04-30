var hours = ['10am','11am','12p','1p','2p','3p','4p','5p'];

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
  hourlyCookies: function() {
    for(var i = 0; i < hours.length; i++) {
      var ran = Math.floor(this.randomCustomer(this.minNumCust, this.maxNumCust) * this.avgPerCust);
      this.hourlySales.push(ran);
      this.totalSales = this.totalSales + ran;

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
var seaTac = {
  storeName: 'SeaTac',
  minNumCust: 6,
  maxNumCust: 24,
  avgPerCust: 1.2,
  hourlySales:[],
  totalSales: 0,
  randomCustomer: function(max,min) {
    return Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust;

  },
  hourlyCookies: function() {
    for(var i = 0; i < hours.length; i++) {
      var ran = Math.floor(this.randomCustomer(this.minNumCust, this.maxNumCust) * this.avgPerCust);
      // console.log(hourlyCookies);
      this.hourlySales.push(ran);
      this.totalSales = this.totalSales + ran;

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
var southCenter = {
  storeName: 'Southcenter',
  minNumCust: 11,
  maxNumCust: 38,
  avgPerCust: 1.9,
  hourlySales:[],
  totalSales: 0,
  randomCustomer: function(max,min) {
    return Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust;

  },
  hourlyCookies: function() {
    for(var i = 0; i < hours.length; i++) {
      var ran = Math.floor(this.randomCustomer(this.minNumCust, this.maxNumCust) * this.avgPerCust);
      // console.log(hourlyCookies);
      this.hourlySales.push(ran);
      this.totalSales = this.totalSales + ran;

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
var bellSquare = {
  storeName: 'Bellevue Square',
  minNumCust: 20,
  maxNumCust: 48,
  avgPerCust: 3.3,
  hourlySales:[],
  totalSales: 0,
  randomCustomer: function(max,min) {
    return Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust;

  },
  hourlyCookies: function() {
    for(var i = 0; i < hours.length; i++) {
      var ran = Math.floor(this.randomCustomer(this.minNumCust, this.maxNumCust) * this.avgPerCust);
      // console.log(hourlyCookies);
      this.hourlySales.push(ran);
      this.totalSales = this.totalSales + ran;

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
var alki = {
  storeName: 'Alki',
  minNumCust: 3,
  maxNumCust: 24,
  avgPerCust: 2.6,
  hourlySales:[],
  totalSales: 0,
  randomCustomer: function(max,min) {
    return Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust;

  },
  hourlyCookies: function() {
    for(var i = 0; i < hours.length; i++) {
      var ran = Math.floor(this.randomCustomer(this.minNumCust, this.maxNumCust) * this.avgPerCust);
      // console.log(hourlyCookies);
      this.hourlySales.push(ran);
      this.totalSales = this.totalSales + ran;

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

pikePlace.render();
seaTac.render();
southCenter.render();
bellSquare.render();
alki.render();
