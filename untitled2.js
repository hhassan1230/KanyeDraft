function Kanye(){
  var actions = {
     award: {
       ego: 30,
       discipline: -10
     },
     tour: {
       creativity: 30,
       discipline: -10
     },
     studio: {
        creativity: 10
     },
     tweet: {
       ego: 10,
       discipline: -5
     }
  }; 
  var egoArray = ['tweet', 'award'];
  var creativityArray = ['studio', 'tour'];
  var disciplineArray = ['discipline'];
  var evolution = ["child", "teen", "adult", "god", "god", "god", "god", "god"]; 
   // this.generateFood = this.generateFood.bind(this);
  var state = {
     food: '',
     ego: 100,
     creativity: 100,
     discipline: 50,
     maxAge: 100,
     age: 0,
     evolution: 'child',
     ageDivider: 0,
     preEvo: 'child'
  };
   
 Kanye.prototype.init = function(){
  window.setInterval(function () {
    this.setTime();
  }.bind(this), 1000);
 };

  
  Kanye.prototype.timeManager = function(){
    var durationOfStage = state.maxAge / 4;  
  };

  Kanye.prototype.handleRandom = function (random){
    var randomElement = 'Oprah';
    if (random === 'ego') {
      var arraylength = egoArray.length;
      randomElement = egoArray[Math.floor((Math.random() * arraylength) + 0)];
    } else if (random === 'creativity') {
      var arraylength = creativityArray.length;
      randomElement = creativityArray[Math.floor((Math.random() * arraylength) + 0)];
    } 
    return randomElement;
  };
   
  Kanye.prototype.generateFood = function(type) {
     // $(".btn-actions").delay(3000).css("background-color","red");
      this.feedKanye(type, handleRandom(type));    
   };

    Kanye.prototype.feedKanye = function(feedType, food){
      if (typeof feedType == 'undefined'){
        return;
      };
     
     if (food === 'Oprah') {
      var currentDisciplinePoints = state.discipline + 25;
      state.discipline = currentDisciplinePoints;
     } else {
      state.food = food;

      var currentAction = actions[food];
      
      for (var action in currentAction) {   
        var currentActionPoint = state[action] + currentAction[action];
        state[action] = currentActionPoint;
      };
    }
   };
  
  Kanye.prototype.egoDecreaser = function(){
     var newEgo = state.ego -= 1;
     if (newEgo > 100) {
       // accend to stars
     };
     
     // if he's at 50 ego
     if (newEgo === 50) {
       // send text notifation message
     };
     if (newEgo <= 0) {
       // send angry message
       newEgo = 0;
     };
     state.ego = newEgo;
   };
   
   Kanye.prototype.updateCurrentAge = function(){
     var newAge = state.age += 1;
     this.setState.age = newAge;
   };
   
  Kanye.prototype.evole = function(evolutionState){
    var string = 'I have evoled into ' + evolutionState;
      swal({   
        title: string,   
        text: "Hi",   
        type: "success",   
        confirmButtonText: "^_^" 
      });
  };

  Kanye.prototype.evoChecker = function() {
    if (state.evolution !== state.preEvo) {
       this.evole(state.evolution);
       this.setState.preEvo = state.evolution;
    }
  };
   
  Kanye.prototype.setTime = function(){
    var newAgeDivider = state.age / state.maxAge;
    var wholeDivider = Math.round(parseFloat(newAgeDivider.toFixed(1)));
     // alert(state.maxDuration)
     
     
    var currentEvolution = state.evolution;
     
    if ((evolution.length >= wholeDivider) && (wholeDivider > 0) && (evolution[wholeDivider]) &&(isFinite(wholeDivider))) {
       currentEvolution = evolution[wholeDivider];
    }  
     this.currentTime = this.getCurrentTime();
     this.ageDivider = wholeDivider;
     this.evolution = currentEvolution;
     this.disciplineChecker();
     this.evoChecker();
     this.egoDecreaser();
     this.updateCurrentAge();
     this.maxAgeDecreaser();
    
   };
  
  Kanye.prototype.actOut = function(){
      swal({   
        title: "I'm acting out",   
        text: "Boo!",   
        type: "success",   
        confirmButtonText: "^_^" 
      });
  };
  
  Kanye.prototype.disciplineChecker = function() {
    var newDiscipline = state.discipline; 
    if (state.discipline === 30) {
     this.actOut(); 
     newDiscipline -= 10;
     this.discipline = newDiscipline
    };
    if (state.discipline === 35) {
     this.actOut(); 
     newDiscipline -= 10;
     this.discipline = newDiscipline
    };
    if (state.discipline === 25) {
     // act out function
    this.actOut();
     newDiscipline -= 5;
     this.discipline = newDiscipline
    };
  };
  
  Kanye.prototype.maxAgeDecreaser = function(){
    var newMaxAge = state.maxAge - 1;
    this.maxAge = newMaxAge;
  };
   
  Kanye.prototype.getCurrentTime = function(){
      var currentDate = new Date();

      var finalTime = currentDate;
      return (finalTime);
  }; 
};
