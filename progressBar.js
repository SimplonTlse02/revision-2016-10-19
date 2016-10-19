(function(){
  'use strict';
  console.log("Start");

  var app = {
    defaultTimeSeconds: 100,
    tempsTotalSeconds: null,

    init: function(){
      // $("#progress").css("width", "0%");
      this.tempsTotalSeconds = this.defaultTimeSeconds;

      setInterval(function(){
        this.tempsTotalSeconds --;
        console.log(this.tempsTotalSeconds);
        $("#progressHtml").attr("value", this.tempsTotalSeconds);
        /*
          temps s |  5 = this.defaultTimeSeconds  |   this.tempsTotalSeconds
            %     |  100%                    |      ?????

          resultat = this.tempsTotalSeconds * 100 / this.defaultTimeSeconds

        */
        var percentage = this.tempsTotalSeconds * 100 / this.defaultTimeSeconds;
        percentage = parseInt(percentage, 10);
        console.log(percentage);
        $("#progress").css("width", percentage+"%");


        var rgbPercent = 'rgb('+ parseInt((100-percentage) * 255/100)+', ' + parseInt(percentage * 255/100)+', 0)';
        console.log(rgbPercent);
        $(".progress").css("background-color",rgbPercent);
        $("#percent").text(percentage+"%");


        //



      }.bind(this), 1000);
    }
  };
  app.init();

})();
