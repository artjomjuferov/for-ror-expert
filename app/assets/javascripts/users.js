
$(function() {
  $('#new_user').submit(function()
  {
    v = $('input[name="user[time]"]').val().split("_");
    v0 = v[0]; 
    v1 = v[1]; 
    if ( v0 == 1){
      $('#user_date').val(date_now.replace(/-/g, '/'));
    } else {
      $('#user_date').val(date_next.replace(/-/g, '/'));
    }
    $('input[name="user[time]"]').val(v1);
    v2 = $('input[name="user[time]"]').val();
    alert(v2);
  });
});

$(function() {
  $('#user_designer_id').change(function () {
    designer_id = $(this).val();
    $("#date_time_1").empty();
    $("#date_time_2").empty();
    date_last = date_now.replace(/-/g, '/');

    $.each( js_dates, function( key, value ) {
      id_choosen = value["designer_id"];
      if(designer_id == id_choosen){
        if (value["time_8"] == true){
          if (value["date"] == date_last){
            $("#date_time_1").append('08.00 <input type="radio" name="user[time]" value=1_8 >');
          } else {
            $("#date_time_2").append('08.00 <input type="radio" name="user[time]" value=2_8 >');
          }
        }
        if (value["time_9"] == true){
          if (value["date"] == date_last){
            $("#date_time_1").append('09.00 <input type="radio" name="user[time]" value=1_9 >');
          } else {
            $("#date_time_2").append('09.00 <input type="radio" name="user[time]" value=2_9 >');
          }
        }
        if (value["time_10"] == true){
         if (value["date"] == date_last){
          $("#date_time_1").append('10.00 <input type="radio" name="user[time]" value=1_10 >');
        } else {
          $("#date_time_2").append('10.00 <input type="radio" name="user[time]" value=2_10 >');
        }
      }

      if (value["time_11"] == true){
        if (value["date"] == date_last){
          $("#date_time_1").append('11.00 <input type="radio" name="user[time]" value=1_11 >');
        } else {
          $("#date_time_2").append('11.00 <input type="radio" name="user[time]" value=2_11 >');
        }
      }
      if (value["time_12"] == true){
        if (value["date"] == date_last){
          $("#date_time_1").append('12.00 <input type="radio" name="user[time]" value=1_12 >');
        } else {
         $("#date_time_1").append('12.00 <input type="radio" name="user[time]" value=2_12 >');
       }
     }
     if (value["time_13"] == true){
      if (value["date"] == date_last){
        $("#date_time_1").append('13.00 <input type="radio" name="user[time]" value=1_13 >');
      } else {
        $("#date_time_2").append('13.00 <input type="radio" name="user[time]" value=2_13 >');
      }
    }
    if (value["time_14"] == true){
     if (value["date"] == date_last){
      $("#date_time_1").append('14.00 <input type="radio" name="user[time]" value=1_14 >');
    } else {
      $("#date_time_2").append('14.00 <input type="radio" name="user[time]" value=2_14 >');
    }
  }
  if (value["time_15"] == true){
    if (value["date"] == date_last){
      $("#date_time_1").append('15.00 <input type="radio" name="user[time]" value=1_15 >');
    } else {
      $("#date_time_2").append('15.00 <input type="radio" name="user[time]" value=2_15 >');

    }
  }
  if (value["time_16"] == true){
    if (value["date"] == date_last){
      $("#date_time_1").append('16.00 <input type="radio" name="user[time]" value=1_16 >');
    } else {
      $("#date_time_2").append('16.00 <input type="radio" name="user[time]" value=2_16 >');
    }
  }
  if (value["time_17"] == true){
    if (value["date"] == date_last){
      $("#date_time_1").append('17.00 <input type="radio" name="user[time]" value=1_17 >');
    } else {
      $("#date_time_2").append('17.00 <input type="radio" name="user[time]" value=2_17 >');
    }
  }

  if (value["time_18"] == true){
   if (value["date"] == date_last){
    $("#date_time_1").append('18.00 <input type="radio" name="user[time]" value=1_18 >');
  } else {
    $("#date_time_2").append('18.00 <input type="radio" name="user[time]" value=2_18 >');
  }
}

if (value["time_19"] == true){
 if (value["date"] == date_last){
  $("#date_time_1").append('19.00 <input type="radio" name="user[time]" value=1_19 >');
} else {
  $("#date_time_2").append('19.00 <input type="radio" name="user[time]" value=2_19 >');
}
}

if (value["time_20"] == true){
 if (value["date"] == date_last){
  $("#date_time_1").append('20.00 <input type="radio" name="user[time]" value=1_20 >');
} else {
  $("#date_time_2").append('20.00 <input type="radio" name="user[time]" value=2_20 >');
}
}

if (value["time_21"] == true){
 if (value["date"] == date_last){
  $("#date_time_1").append('21.00 <input type="radio" name="user[time]" value=1_21 >');
} else {
  $("#date_time_2").append('21.00 <input type="radio" name="user[time]" value=2_21 >');
}
}

if (value["time_22"] == true){
 if (value["date"] == date_last){
  $("#date_time_1").append('22.00 <input type="radio" name="user[time]" value=1_22 >');
} else{ 
  $("#date_time_2").append('22.00 <input type="radio" name="user[time]" value=2_22 >');
}
}
}
});
});
}).change();