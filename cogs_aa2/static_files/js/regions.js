


let timerG = false;
let time = 0;
let prevP = '';
 
  // function call within hindbrain from midbrain would look like
  // handleTime(timerG, time, prevP, 'hindbrain');

  /*
  function handletime(timerG, time, prevP, currentP){
    // currTime = get the current time
    if(timerG){
      let totaltime =  0;
      // total time = current time - time
      // add total time to prevP position in database
      
    }else {
      timerG = true;

    }
    // POST call
    // time = currTime;
    // prevP = currentP

 };
*/

$(document).ready(() => {

  /*click request for Alzheimers*/
  $("#Alzheimers").click((req, res) => {
    const requestURL = 'conditions/Alzheimers';
    $.ajax({
      url: requestURL,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('received data: ', data);

        if (data.title) {
          console.log('show this as title: '+ data.title);
          $('#conditionName').html(data.title);
          $('#subtitle-content').html(data.subtitle);
          $('#description-content').html(data.description);
          $('#symptoms-content').html(data.symptom);
          $('#treatment-content').html(data.treatment);
          $('#compare-img').attr('src', data.image);
        } else {
          $('#conditionName').html('Condition not available.');
        }
      },
    });
  });
  /*end of alzheimers ajax code*/

  /*click request for Parkinsons*/
  $("#Parkinsons").click((req, res) => {
    const requestURL = 'conditions/Parkinsons';
    $.ajax({
      url: requestURL,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('received data: ', data);

        if (data.title) {
          console.log('show this as title: '+ data.title);
          $('#conditionName').html(data.title);
          $('#subtitle-content').html(data.subtitle);
          $('#description-content').html(data.description);
          $('#symptoms-content').html(data.symptom);
          $('#treatment-content').html(data.treatment);
          $('#compare-img').attr('src' + data.image);
        } else {
          $('#conditionName').html('Condition not available.');
        }
      },
    });
  });
  /*end of parkinsons ajax code*/

  /*click request for Seizure*/
  $("#Seizure").click((req, res) => {
    const requestURL = 'conditions/Seizure';
    $.ajax({
      url: requestURL,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('received data: ', data);

        if (data.title) {
          console.log('show this as title: '+ data.title);
          $('#conditionName').html(data.title);
          $('#subtitle-content').html(data.subtitle);
          $('#description-content').html(data.description);
          $('#symptoms-content').html(data.symptom);
          $('#treatment-content').html(data.treatment);
          $('#compare-img').attr('src', data.image);
        } else {
          $('#conditionName').html('Condition not available.');
        }
      },
    });
  });
  /*end of seizure ajax code*/

  /*click request for Stroke*/
  $("#Stroke").click((req, res) => {
    const requestURL = 'conditions/Stroke';
    $.ajax({
      url: requestURL,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('received data: ', data);

        if (data.title) {
          console.log('show this as title: '+ data.title);
          $('#conditionName').html(data.title);
          $('#subtitle-content').html(data.subtitle);
          $('#description-content').html(data.description);
          $('#symptoms-content').html(data.symptom);
          $('#treatment-content').html(data.treatment);
          $('#compare-img').attr('src', data.image);
        } else {
          $('#conditionName').html('Condition not available.');
        }
      },
    });
  });
  /*end of stroke ajax code*/

  /*click request for ALS*/
  $("#Als").click((req, res) => {
    const requestURL = 'conditions/ALS';
    $.ajax({
      url: requestURL,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('received data: ', data);

        if (data.title) {
          console.log('show this as title: '+ data.title);
          $('#conditionName').html(data.title);
          $('#subtitle-content').html(data.subtitle);
          $('#description-content').html(data.description);
          $('#symptoms-content').html(data.symptom);
          $('#treatment-content').html(data.treatment);
          $('#compare-img').attr('src', data.image);
        } else {
          $('#conditionName').html('Condition not available.');
        }
      },
    });
  });
  /*end of als ajax code*/

  /*click request for Alzheimers*/
  $("#Ms").click((req, res) => {
    const requestURL = 'conditions/MS';
    $.ajax({
      url: requestURL,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('received data: ', data);

        if (data.title) {
          console.log('show this as title: '+ data.title);
          $('#conditionName').html(data.title);
          $('#subtitle-content').html(data.subtitle);
          $('#description-content').html(data.description);
          $('#symptoms-content').html(data.symptom);
          $('#treatment-content').html(data.treatment);
          $('#compare-img').attr('src', data.image);
        } else {
          $('#conditionName').html('Condition not available.');
        }
      },
    });
  });
  /*end of ms ajax code*/
});