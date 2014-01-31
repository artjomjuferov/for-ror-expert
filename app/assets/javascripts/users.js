$(function() {
  $('#user_designer_id').change(function () {
    designer_id = $(this).val();
    arr = date_now.split('-');
    date_last = arr[2] + "/" + arr[1] + "/" + arr[0] 
    alert(date_last);

    $.each( js_dates, function( key, value ) {
      id_choosen = value["designer_id"];
      alert(id_choosen + ' ' + designer_id);
      if(designer_id == id_choosen){
        if (value["time_8"] == true){
          if (value["date"] == date_last){
            $("#date_time_1").append('08.00 <input type="radio" name="user[time]" value=8 >');
          } else {
            $("#date_time_2").append('08.00 <input type="radio" name="user[time]" value=8 >');
          }
        }
        if (value["time_9"] == true){
          if (value["date"] == date_last){
            $("#date_time_1").append('09.00 <input type="radio" name="user[time]" value=9 >');
          } else {
            $("#date_time_2").append('09.00 <input type="radio" name="user[time]" value=9 >');
          }
        }
        if (value["time_10"] == true){
         if (value["date"] == date_last){
          $("#date_time_1").append('10.00 <input type="radio" name="user[time]" value=10 >');
        } else {
          $("#date_time_2").append('10.00 <input type="radio" name="user[time]" value=10 >');
        }
      }

      if (value["time_11"] == true){
        if (value["date"] == date_last){
          $("#date_time_1").append('11.00 <input type="radio" name="user[time]" value=11 >');
        } else {
          $("#date_time_2").append('11.00 <input type="radio" name="user[time]" value=11 >');
        }
      }
      if (value["time_12"] == true){
        if (value["date"] == date_last){
          $("#date_time_1").append('12.00 <input type="radio" name="user[time]" value=12 >');
        } else {
         $("#date_time_1").append('12.00 <input type="radio" name="user[time]" value=12 >');
       }
     }
     if (value["time_13"] == true){
      if (value["date"] == date_last){
        $("#date_time_1").append('13.00 <input type="radio" name="user[time]" value=13 >');
      } else {
        $("#date_time_2").append('13.00 <input type="radio" name="user[time]" value=13 >');
      }
    }
    if (value["time_14"] == true){
     if (value["date"] == date_last){
      $("#date_time_1").append('14.00 <input type="radio" name="user[time]" value=14 >');
    } else {
      $("#date_time_2").append('14.00 <input type="radio" name="user[time]" value=14 >');
    }
  }
  if (value["time_15"] == true){
    if (value["date"] == date_last){
      $("#date_time_1").append('15.00 <input type="radio" name="user[time]" value=15 >');
    } else {
      $("#date_time_2").append('15.00 <input type="radio" name="user[time]" value=15 >');

    }
  }
  if (value["time_16"] == true){
    if (value["date"] == date_last){
      $("#date_time_1").append('16.00 <input type="radio" name="user[time]" value=16 >');
    } else {
      $("#date_time_2").append('16.00 <input type="radio" name="user[time]" value=16 >');
    }
  }
  if (value["time_17"] == true){
    if (value["date"] == date_last){
      $("#date_time_1").append('17.00 <input type="radio" name="user[time]" value=17 >');
    } else {
      $("#date_time_2").append('17.00 <input type="radio" name="user[time]" value=17 >');
    }
  }

  if (value["time_18"] == true){
   if (value["date"] == date_last){
    $("#date_time_1").append('18.00 <input type="radio" name="user[time]" value=18 >');
  } else {
    $("#date_time_2").append('18.00 <input type="radio" name="user[time]" value=18 >');
  }
}

if (value["time_19"] == true){
 if (value["date"] == date_last){
  $("#date_time_1").append('19.00 <input type="radio" name="user[time]" value=19 >');
} else {
  $("#date_time_2").append('19.00 <input type="radio" name="user[time]" value=19 >');
}
}

if (value["time_20"] == true){
 if (value["date"] == date_last){
  $("#date_time_1").append('20.00 <input type="radio" name="user[time]" value=20 >');
} else {
  $("#date_time_2").append('20.00 <input type="radio" name="user[time]" value=20 >');
}
}

if (value["time_21"] == true){
 if (value["date"] == date_last){
  $("#date_time_1").append('21.00 <input type="radio" name="user[time]" value=21 >');
} else {
  $("#date_time_2").append('21.00 <input type="radio" name="user[time]" value=21 >');
}
}

if (value["time_22"] == true){
 if (value["date"] == date_last){
  $("#date_time_1").append('22.00 <input type="radio" name="user[time]" value=22 >');
} else{ 
  $("#date_time_2").append('22.00 <input type="radio" name="user[time]" value=22 >');
}
}
}
});
});
}).change();