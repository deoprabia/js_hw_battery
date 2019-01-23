
let batteryWidth = $( '.battery' ).width();

$('.battery').onclick(function(event){}
);




displayCharge = (charge) => {
              $('.battery .total') .html(Math.round(charge) + "%");
};


setChargeWidth = (charge) => {
              $('.battery .charge').width(charge + '%')
}



setBattery = (charge) => {
              displayCharge(charge);
              setColor(charge);
              setChargeWidth(charge);
};

let chage = 1;
setInterval(function() {
setBattery(charge);
charge++;
if (charge == 101) charge = 1
}, 60);