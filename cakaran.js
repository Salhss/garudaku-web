function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 0) return "data tidak valid";

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " tahun yang lalu";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " bulan yang lalu";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " hari yang lalu";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " jam yang lalu";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " menit yang lalu";
  }
  return Math.floor(seconds) + " detik yang lalu";
}
console.log(timeSince(new Date("2023-07-31T11:57:09.243Z")));

("2023-07-31T12:01:30.400Z");
("2023-07-31T05:55:11.770Z");
("2023-07-31T03:14:25.543Z");
("2023-07-31T10:05:37.777Z");
("2023-07-31T06:44:12.610Z");
("2023-07-31T04:30:51.152Z");
("2023-07-31T02:08:47.333Z");
("2023-07-31T04:30:51.152Z");
("2023-07-31T02:08:47.333Z");
