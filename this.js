(function(){
  'use strict';
  console.log(this);

  console.log("Start");

  var app = {
    defaultTimeSeconds: 10,
    tempsTotalSeconds: null,

    init: function(){
      // this.tempsTotalSeconds = this.defaultTimeSeconds;
      // console.log(this);
      this.reset();

      this.show();// =this
      this.show.call(this);


      setInterval(this.decrement.bind(this), 1000);
    },
    decrement: function(){
      console.log("Decrement");
      console.log(this);
      this.tempsTotalSeconds --;
      console.log("tempsTotalSeconds: ", this.tempsTotalSeconds);

      if(this.tempsTotalSeconds <= 0){
        $("#progressBar").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/3qvlVaI4RwI" frameborder="0" allowfullscreen></iframe>');
      }
    },
    show: function(){
      console.log("Show", this.tempsTotalSeconds);
    },
    reset: function(){
      // this.tempsTotalSeconds = 10;
      this.tempsTotalSeconds = this.defaultTimeSeconds;
      // this.updateView();
      $('#progress').css("width", "100%");

    }
    /* reset :
      remettre la valeur initiale au chrono (ou valeur de l'input)
      valeur chrono = valeur initiale
      tempsTotalSeconds = 10
      tempsTotalSeconds = defaultTimeSeconds
    */
  };
  app.init();

})();
