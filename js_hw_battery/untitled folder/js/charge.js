class Charge (

              constructor(pEmpty,pLow,pFull){
                            this.pEmpty= 0;
                            this.pLow=20;
                            this.pFull=100;
              }

              getCharge(x) {
                            let charge =x*100/ batteryWidth
                            charge = Math.min(charge,100);
                            charge = Math .max(charge,0);

                            return charge;

              };

              displayCharge (charge)(
                            $(.battery .total).html(Math.round(charge))+ "%");

              );


)