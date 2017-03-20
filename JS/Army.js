var army=(function(v,car) {

			 var rArmy, pArmy;
			 function Army(o, e, s, m, w) {
			 	this.u  = new v(o.x, o.y);
			 	this.e  = new v(e.x, e.y);
			 	this.s  = new v(s.x, s.y);
			 	this.z  = new v(m.x, m.y);
			 	this.a  = [0, 90, 180, 270];
			 	this.n  = 0;
			 };

			 rArmy = new Army({x:0, y:50}, {x:25, y:25}, {x:215-91+5-2-22, y:488+121-100+60-17}, {x:60 , y:0});
			 pArmy = Army.prototype;

				 var k,c;
				 pArmy.keypressed=(function(key,cost) {
				  	 		k=key; c=cost;
			     });

			pArmy.draw=(function() {
				 var i=0,l=this.a.length,sh=null,q=0,xo=0,yo=0;this.color="#FF0000";
				 for (; i<l; i++) {
				 	  if ( i === 1 ) this.color="#000";
				  	  	   this.r=this.u.rot2dAbout(this.e, this.u, this.a[i]+this.n);
				  	  	   this.z.direcion(this.z,this.n);
				  	  	   g.line(car.m+this.s.x,this.s.y,car.m+this.s.x+this.z.x,this.s.y+this.z.y,"#000");
				  	  	   g.line(car.m+this.s.x+this.r.u.x,this.s.y+this.r.u.y,
				  	  	     	  car.m+this.s.x+this.r.v.x,this.s.y+this.r.v.y, this.color);
				 };

				 if(this.n > 360 || this.n < -360 ) this.n=0;
			});

			pArmy.update=(function() {
				  if (k && c) {
					  if ( k.isDown(c.UP)   ) this.n-=2;
					  if ( k.isDown(c.DOWN) ) this.n+=2;
				  };
			});

		return {
			instance : rArmy
		};	

}(Vetor,vehicle.instance));