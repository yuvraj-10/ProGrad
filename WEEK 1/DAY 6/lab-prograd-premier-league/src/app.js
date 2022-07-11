//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

/*
  Create a Manager array and return it - createManager
  Defines createManager -createManager
  Defines createManager
  Add manager details and return it
  Add manager details in the order [managerName, managerAge, currentTeam, trophiesWon]
  Expects argument length: 4
*/
//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

/*
  Create a team formation object and return it - createFormation
  Defines createFormation
  Return the value as undefined for the elements missing in the array
  Return null when called with an empty array
  Return football team's formation [2, 3, 1]
  Return football team's formation [2, 4, 5]
*/
//write your function here
function createFormation(formation) {
  if (formation.length == 0) {
    return null;
  }
  return {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

/*
Filter player details based on the debut year -filterByDebut
Defines filterByDebut
Defines filterByDebut()
Return players details debuted in the year 2005
Return all players that debuted in same year
Return empty array if there no players debuted in the given year
*/
//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  return players.filter((player) => player.debut == year);
}

/*
Return empty array when no parameters are passed
Return empty array if specfied position is not defined
Return all players at the specified position
Validate the number of players with same position
*/
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  // Return empty array when no parameters are passed
  if (position == undefined) {
    return [];
  }
  return players.filter((player) => player.position == position);
}

/*
Filter players based on award - filterByAward
Defines filterByAward
Return empty array when no parameter is passed
Return empty array if no player has won the given award
Return players who have won FIFA FIFPro World XI award
Validate the number of players with same awards
*/
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  var array = [];
  for (const element of players) {
    for (let j = 0; j < element.awards.length; j++) {
      if (element.awards[j].name === awardName) {
        array.push(element);
      }
    }
  }
  return array;
}

/*
Filter players based on awards and number of times - filterByAwardxTimes
Defines filterByAwardxTimes
Return empty array when no parameter is passed
Return empty array if no player has won the given award
Return players who have won The Best FIFA Men's Player, 2 times
Return players than have won African Player of the Year, 2 times
Return players who have won PFA Premier League Team of the Year, 2 times
*/
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  var array = [];
  var count = 0;
  for (const element of players) {
    for (let j = 0; j < element.awards.length; j++) {
      if (element.awards[j].name === awardName) {
        count++;
      }
    }
    if (count === noOfTimes) {
      array.push(element);
    }
    count = 0;
  }
  return array;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var array = [];
  for (const element of players) {
    for (let j = 0; j < element.awards.length; j++) {
      if (
        element.awards[j].name === awardName &&
        element.country === country
      ) {
        array.push(element);
      }
    }
  }
  console.log(array);
  return array;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var array = [];
  for (const element of players) {
    if (
      element.awards.length >= noOfAwards &&
      element.team === team &&
      element.age < age
    ) {
      array.push(element);
    }
  }
  return array;
}

//Progression 9 - Sort players in descending order of their age
function sortByAge() {
  return players.sort(function (a, b) {
    return b.age - a.age;
  });
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function sortByTeamxAwards(team) {
  var array = players.sort(function (a, b) {
    return b.awards.length - a.awards.length;
  });
  return array.filter((player) => player.team === team);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortByAwardxTimesxCountry(awardName, noOfTimes, country) {
  var array = [];
  for (const element of players) {
    for (let j = 0; j < element.awards.length; j++) {
      if (
        element.awards[j].name === awardName &&
        element.country === country
      ) {
        array.push(element);
      }
    }
  }
  array.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return array.filter((player) => player.awards.length === noOfTimes);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortByAgexAwards(age) {
  var array = [];
  for (const element of players) {
    if (element.age > age) {
      array.push(element);
    }
  }
  array.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return array;
}