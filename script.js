// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    var todayDate = dayjs();
    var currentDay = $('#currentDay');
    currentDay.text(todayDate.format('MMMM D, YYYY'));
  
    setInterval(()=>{
      var currentHourCall = dayjs().format('H:mm:ss');
      var displayCurrentHour = $('#currentHour');
      displayCurrentHour.text(currentHourCall);
    },1000);

    var currentHourCall = dayjs().format('H');
    var currentHourCallNum = parseInt(currentHourCall,10);
    var scheduleHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    function saveActivity(index){
      var textArea = $('<textarea>');
      textArea.addClass('col-8 col-md-10 description');
      textArea.attr('row', '3');
      if (localStorage.getItem(index) === null){
        textArea.text('');
      }
      else{
        textArea.text(localStorage.getItem(index));
      }

      addHourElement.append(textArea);

      var saveButton = $('<button>');
      saveButton.html('<i class="fas fa-save" aria-hidden="true"></i>💾');
      saveButton.addClass("btn saveBtn col-2 col-md-1");
      saveButton.attr('aria-label','save');
      addHourElement.append(saveButton);

      saveButton.click(() => {
        console.log(textArea.val());
        localStorage.setItem(index,textArea.val())
      });
    }

    for (var i=0; i<scheduleHours.length; i++){
      
      if ( scheduleHours[i] < currentHourCallNum){
        var displayTimeBlockPast = $('.pastSection');
        var addHourElement = $('<div>');
        addHourElement.html('<div class="col-2 col-md-1 hour text-center py-3">' + scheduleHours[i] + ' :00:00 Hrs</div>');
        addHourElement.addClass('row time-block past');
        displayTimeBlockPast.append(addHourElement);
        saveActivity(scheduleHours[i]);
      }


      if ( scheduleHours[i] == currentHourCallNum){
        var displayTimeBlockPresent = $('.presentSection');
        var addHourElement = $('<div>');
        addHourElement.html('<div class="col-2 col-md-1 hour text-center py-3">' + scheduleHours[i] + ' :00:00 Hrs</div>');
        addHourElement.addClass('row time-block present');
        displayTimeBlockPresent.append(addHourElement);
        saveActivity(scheduleHours[i]);
      }

      if ( scheduleHours[i] > currentHourCallNum){
        var displayTimeBlockFuture = $('.futureSection');
        var addHourElement = $('<div>');
        addHourElement.html('<div class="col-2 col-md-1 hour text-center py-3">' + scheduleHours[i] + ' :00:00 Hrs</div>');
        addHourElement.addClass('row time-block future');
        displayTimeBlockFuture.append(addHourElement);
        saveActivity(scheduleHours[i]);
      }
    }
});
