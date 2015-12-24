angular.module("MealPlannerApp", ['ngTouch'])
	.controller('CalendarCtrl', function(){
		var calendar = this;
		calendar.cal = {
			sunday: {
				breakfast: "Green Eggs",
				lunch: null,
				dinner: null
			},
			monday: {
				breakfast: null,
				lunch: null,
				dinner: null
			},
			tuesday: {
				breakfast: null,
				lunch: "Ham",
				dinner: null
			},
			wednesday: {
				breakfast: null,
				lunch: null,
				dinner: null
			},
			thursday: {
				breakfast: null,
				lunch: "Christmas Risengrod",
				dinner: null
			},
			friday: {
				breakfast: null,
				lunch: null,
				dinner: null
			},
			saturday: {
				breakfast: null,
				lunch: null,
				dinner: null
			},
		};
		calendar.cal.sunday = {}
	})

	.controller('SimpleRandomCtrl', function(){
		var simpleRandom = this;
		simpleRandom.dinnerIdeaList = [];
		var backupList = [];
		var mainList = [
			"Hawaiian Haystacks",
			"Meatball and Pineapples",
			"Fajita Quesadillas",
			"Spaghetti",
			"White Chili",
			"Chili with Quinoa and Chia (corn bread)",
			"Hamburger Pie",
			"Turkey dinner",
			"Calzones (pepperoni, pineapple, peppers, or just cheese)",
			"Tuna Nuna",
			"Curry (with bamboo)",
			"Taco Salad",
			"Apricot Chicken (with baked sweet potatoes)",
			"Lasagna/Baked Shells",
			"Eggs and toast (with fruit)",
			"Grilled Cheese and soup",
			"Homemade Mac & Cheese",
			"Fettuccini Alfredo (kiefer)",
			"Black bean quinoa enchilada casserole"];
		this.generateList = function(){
			shuffle(mainList);
			simpleRandom.dinnerIdeaList = mainList.slice();
		}
		this.remove = function(index) {
			backupList.push(
				{
					index: index, 
					value: simpleRandom.dinnerIdeaList[index]
				});
			simpleRandom.dinnerIdeaList.splice(index,1);
		}
		this.canUndo = function(){
			return backupList.length > 0;
		}
		this.undo = function(){
			lastItem = backupList.pop();
			simpleRandom.dinnerIdeaList.splice(lastItem.index, 0, lastItem.value);
		}
		this.generateList();
	});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
