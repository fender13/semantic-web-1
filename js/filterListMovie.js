var tanggalTujuan = new Date("Jan 7, 2019 15:37:25").getTime();

// Update the count down every 1 second
setInterval(function() {

    var tanggalSekarang = new Date().getTime();

    var jarak = tanggalTujuan - tanggalSekarang;

    var hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
    var jam = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((jarak % (1000 * 60)) / 1000);

    document.getElementById("getTime").innerHTML = hari + "d " + jam + "h "
  + menit + "m " + detik + "s ";

    if (jarak < 0) {
        document.getElementById("getTime").innerHTML = "EXPIRED";
    }
}, 1000); 


