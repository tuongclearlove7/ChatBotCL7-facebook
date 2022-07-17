let Getpos = (position) => {
    var pos = position.coords;
    console.log('vĩ độ : ',pos.latitude);
    console.log('kinh độ : ',pos.longitude);
    return 'vĩ độ : ',pos.latitude+'kinh độ : ',pos.longitude;
  }
  let pos_place = navigator.geolocation.getCurrentPosition(Getpos);




















  