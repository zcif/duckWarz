var SPEED = 50;
var INCR = 3;
var angle = 0;
for(var direction = INCR;;angle+=91+direction) {
  for(;scan(angle, INCR*INCR) <= 100;) {
        cannon(angle, scan(angle, INCR*INCR));
        swim(scan(angle, 10) <= 15 ? angle-180 : angle, SPEED);
        direction = direction == INCR ? 0-INCR : INCR;
  }
}