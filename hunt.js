var angle = 0;
var direction = 3;
var speed = 50;
for(;;angle+=direction) {
  for(;scan(angle, 3) <= 100;) {
        cannon(angle, scan(angle, 10));
        swim(scan(angle, 10) <= 15 ? angle-180 : angle, speed);
        direction = direction == 3 ? -3 : 3;
  }
}