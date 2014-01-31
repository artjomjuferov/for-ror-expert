$(function() {
  $('#date_meet_date').datepicker({
    onSelect: function(dateText, inst) {
     $.each( js_dates, function( key, value ) {
        date = value["date"].split('T')[0];
        arr = date.split('-')
        dateLast = arr[2] + "/" + arr[1] + "/" + arr[0]
        if(dateText == dateLast && value['designer_id'] == designer_id){
          //alert(value['designer_id'] +' : '+ designer_id)
          //tmp = $('#date_meet_time_8').is(':checked');
          $('#date_meet_time_8').prop("checked", value['time_8']);
          $('#date_meet_time_9').prop("checked", value['time_9']);
          $('#date_meet_time_10').prop("checked", value['time_10']);
          $('#date_meet_time_11').prop("checked", value['time_11']);
          $('#date_meet_time_12').prop("checked", value['time_12']);
          $('#date_meet_time_13').prop("checked", value['time_13']);
          $('#date_meet_time_14').prop("checked", value['time_14']);
          $('#date_meet_time_15').prop("checked", value['time_15']);
          $('#date_meet_time_16').prop("checked", value['time_16']);
          $('#date_meet_time_17').prop("checked", value['time_17']);
          $('#date_meet_time_18').prop("checked", value['time_18']);
          $('#date_meet_time_19').prop("checked", value['time_19']);
          $('#date_meet_time_20').prop("checked", value['time_20']);
          $('#date_meet_time_21').prop("checked", value['time_21']);
          $('#date_meet_time_22').prop("checked", value['time_22']);
        }
      });
    }
  });
});