var myList = document.getElementById('my-list');
var hoursOpen = ['10','11','12','1','2','3','4','5'];
var ulEl = document.createElement('ul');

var pikePlace = {
  name: 'pike',
  min: 17,
  max: 88,
  avgSales: 5.2,
  hourlySales:[],
  totalSales: 0,

  randomCustomer: function(rand_min, rand_max) {
    return Math.floor(Math.random() * (rand_max - rand_min)) + rand_min;
  },
  
  hourlyCookies: function(){
    for(var i = 0; i < hoursOpen.length; i++) {
      this.hourlySales.push(Math.floor)(this.avgSales * this.randomCustomer(this.min,this.max);
      // this.totalSales[i] += this.hourlySales[i];
      this.totalSales = this.totalSales + this.hourlySales[i];
      }
    }
  }
  totalSales: function(){
    for(var j = 0; i < hoursOpen.length; )

  }
// Here's an example of rendering to the DOM using nested for loops
// You will want to consider the structure and apply this to your render method for each object literal today.
//
// // This is a more advanced for loop inside for loop for nested lists
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// var weeks = [1, 2, 3, 4];
// var sectionEl = document.getElementById('myList');
for(hour in hours) {
  var liEl = document.createElement('my-list');
  liEl.textContent = hoursOpen[hoursOpen];
  var nestedUlEl = document.createElement('my-list');

  // for(week in weeks) {
  //   var nestedLiEl = document.createElement('li');
  //   nestedLiEl.textContent = weeks[week];
  //   nestedUlEl.appendChild(nestedLiEl);
  // }

  liEl.appendChild(nestedUlEl);
  ulEl.appendChild(liEl);
}

sectionEl.appendChild(ulEl);
