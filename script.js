let data = 
[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
console.log(data);



function dailyPeriod(){
    if ((data[0].timeframes.daily.current) > 1){
        document.getElementById("box-1-time").textContent = (data[0].timeframes.daily.current)+"hrs";
        document.getElementById("box-2-time").textContent = (data[1].timeframes.daily.current)+"hrs";
        document.getElementById("box-3-time").textContent = (data[2].timeframes.daily.current)+"hrs";
        document.getElementById("box-4-time").textContent = (data[3].timeframes.daily.current)+"hrs";
        document.getElementById("box-5-time").textContent = (data[4].timeframes.daily.current)+"hrs";
        document.getElementById("box-6-time").textContent = (data[5].timeframes.daily.current)+"hrs";
    }
    else {
        document.getElementById("box-1-time").textContent = (data[0].timeframes.weekly.current)+"hr";
        document.getElementById("box-2-time").textContent = (data[1].timeframes.weekly.current)+"hr";
        document.getElementById("box-3-time").textContent = (data[2].timeframes.weekly.current)+"hr";
        document.getElementById("box-4-time").textContent = (data[3].timeframes.weekly.current)+"hr";
        document.getElementById("box-5-time").textContent = (data[4].timeframes.weekly.current)+"hr";
        document.getElementById("box-6-time").textContent = (data[5].timeframes.weekly.current)+"hr";
    }


        document.getElementById("box-1-time-previous").textContent = "Yesterday - "+(data[0].timeframes.daily.previous)+"hrs";
        document.getElementById("box-2-time-previous").textContent = "Yesterday - "+(data[1].timeframes.daily.previous)+"hrs";
        document.getElementById("box-3-time-previous").textContent = "Yesterday - "+(data[2].timeframes.daily.previous)+"hrs";
        document.getElementById("box-4-time-previous").textContent = "Yesterday - "+(data[3].timeframes.daily.previous)+"hrs";
        document.getElementById("box-5-time-previous").textContent = "Yesterday - "+(data[4].timeframes.daily.previous)+"hrs";
        document.getElementById("box-6-time-previous").textContent = "Yesterday - "+(data[5].timeframes.daily.previous)+"hrs";

    
};


function weeklyPeriod(){
    if ((data[0].timeframes.weekly.current) > 1){
        document.getElementById("box-1-time").textContent = (data[0].timeframes.weekly.current)+"hrs";
        document.getElementById("box-2-time").textContent = (data[1].timeframes.weekly.current)+"hrs";
        document.getElementById("box-3-time").textContent = (data[2].timeframes.weekly.current)+"hrs";
        document.getElementById("box-4-time").textContent = (data[3].timeframes.weekly.current)+"hrs";
        document.getElementById("box-5-time").textContent = (data[4].timeframes.weekly.current)+"hrs";
        document.getElementById("box-6-time").textContent = (data[5].timeframes.weekly.current)+"hrs";
    }
    else {
        document.getElementById("box-1-time").textContent = (data[0].timeframes.weekly.current)+"hr";
        document.getElementById("box-2-time").textContent = (data[1].timeframes.weekly.current)+"hr";
        document.getElementById("box-3-time").textContent = (data[2].timeframes.weekly.current)+"hr";
        document.getElementById("box-4-time").textContent = (data[3].timeframes.weekly.current)+"hr";
        document.getElementById("box-5-time").textContent = (data[4].timeframes.weekly.current)+"hr";
        document.getElementById("box-6-time").textContent = (data[5].timeframes.weekly.current)+"hr";
    }

    document.getElementById("box-1-time-previous").textContent = "Last week - "+(data[0].timeframes.weekly.previous)+"hrs";
    document.getElementById("box-2-time-previous").textContent = "Last week - "+(data[1].timeframes.weekly.previous)+"hrs";
    document.getElementById("box-3-time-previous").textContent = "Last week - "+(data[2].timeframes.weekly.previous)+"hrs";
    document.getElementById("box-4-time-previous").textContent = "Last week - "+(data[3].timeframes.weekly.previous)+"hrs";
    document.getElementById("box-5-time-previous").textContent = "Last week - "+(data[4].timeframes.weekly.previous)+"hrs";
    document.getElementById("box-6-time-previous").textContent = "Last week - "+(data[5].timeframes.weekly.previous)+"hrs";
};

function monthlyPeriod(){
    if ((data[0].timeframes.monthly.current) > 1){
        document.getElementById("box-1-time").textContent = (data[0].timeframes.monthly.current)+"hrs";
        document.getElementById("box-2-time").textContent = (data[1].timeframes.monthly.current)+"hrs";
        document.getElementById("box-2-time").textContent = (data[2].timeframes.monthly.current)+"hrs";
        document.getElementById("box-3-time").textContent = (data[3].timeframes.monthly.current)+"hrs";
        document.getElementById("box-4-time").textContent = (data[4].timeframes.monthly.current)+"hrs";
        document.getElementById("box-5-time").textContent = (data[5].timeframes.monthly.current)+"hrs";    }
    else {
        document.getElementById("box-1-time").textContent = (data[0].timeframes.monthly.current)+"hr";
        document.getElementById("box-2-time").textContent = (data[1].timeframes.monthly.current)+"hr";
        document.getElementById("box-3-time").textContent = (data[2].timeframes.monthly.current)+"hr";
        document.getElementById("box-4-time").textContent = (data[3].timeframes.monthly.current)+"hr";
        document.getElementById("box-5-time").textContent = (data[4].timeframes.monthly.current)+"hr";
        document.getElementById("box-6-time").textContent = (data[5].timeframes.monthly.current)+"hr";
    }

    document.getElementById("box-1-time-previous").textContent = "Last month - "+(data[0].timeframes.monthly.previous)+"hrs";
    document.getElementById("box-2-time-previous").textContent = "Last month - "+(data[1].timeframes.monthly.previous)+"hrs";
    document.getElementById("box-3-time-previous").textContent = "Last month - "+(data[2].timeframes.monthly.previous)+"hrs";
    document.getElementById("box-4-time-previous").textContent = "Last month - "+(data[3].timeframes.monthly.previous)+"hrs";
    document.getElementById("box-5-time-previous").textContent = "Last month - "+(data[4].timeframes.monthly.previous)+"hrs";
    document.getElementById("box-6-time-previous").textContent = "Last month - "+(data[5].timeframes.monthly.previous)+"hrs";

};

