var tanggalTujuan = new Date("apr 30, 2019 15:37:25").getTime();

// Update the count down every 1 second
setInterval(function() {

  // Get todays date and time
    var tanggalSekarang = new Date().getTime();

  // Find the distance between now an the count down date
    var jarak = tanggalTujuan - tanggalSekarang;

  // Time calculations for days, hours, minutes and seconds
    var hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
    var jam = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((jarak % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
    document.getElementById("getTime").innerHTML = hari + "d " + jam + "h "
  + menit + "m " + detik + "s ";

  // If the count down is finished, write some text
    if (jarak < 0) {
        document.getElementById("getTime").innerHTML = "EXPIRED";
    }
}, 1000); 

