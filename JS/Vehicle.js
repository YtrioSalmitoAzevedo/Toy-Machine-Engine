var vehicle = (function(V, b, o) {

				var rCar, pCar, rC1, rC2, rRad , rRad2, r, bool, box, i;
				function Vehicle(x, y, w, h, c, b) {
						this.x = x;
						this.y = y;
						this.w = w;
						this.h = h;
						this.c = c;
						this.b = b; 
						this.m = 0;
				};

				function Circle(x, y, r, sA, eA, c) {
					   	 this.x  = x;
						 this.y  = y;
						 this.r  = r;
						 this.sA = sA;
						 this.eA = eA;
						 this.c  = c;
				};

				function Radius(u, v, c) {
						this.v  = v; 
						this.xo = u.x,
						this.yo = u.y,
						this.x  = v.x;
						this.y  = v.y;
						this.c  = c;
				};

				 rCar  = new Vehicle(52,620-12,100,30,"#FFD700","#000");
			     rC1   = new Circle(70, 650-12, 12, 0, 2*Math.PI, "#000");
			     rC2   = new Circle(135,650-12, 12, 0, 2*Math.PI, "#000");
			     rRad  = new Radius({x : 70 , y : 650-12 }, new V(0 , 24),"#0000FF");
			     rRad2 = new Radius({x : 135, y : 650-12 }, new V(0 , 24),"#0000FF");
				 pCar  = Vehicle.prototype;
				 box   = b.list; 

				 var k,c;
				 pCar.keypressed=(function(key,cost) {
				  	  		k=key; c=cost;
				 });

				pCar.draw=(function() {
					g.rect(rCar.x  + rCar.m,rCar.y , rCar.w,rCar.h, rCar.c, rCar.b,1);
					g.circle(rC1.x + rCar.m,rC1.y  , rC1.r, rC1.sA, rC1.eA, rC1.c);
					g.circle(rC2.x + rCar.m,rC2.y  , rC2.r, rC2.sA, rC2.eA, rC2.c);
					g.line(rCar.m+rRad.xo+rRad.r.u.x, 
						   rRad.yo+rRad.r.u.y,rCar.m+rRad.xo+rRad.r.v.x,rRad.yo+rRad.r.v.y, rRad.c);
					g.line(rCar.m+rRad2.xo+rRad2.r2.u.x, rRad2.yo+rRad2.r2.u.y,
						   rCar.m+rRad2.xo+rRad2.r2.v.x,rRad2.yo+rRad2.r2.v.y, rRad2.c);
					g.rect(rCar.m+99,560-13,15,60,"#9400D3","#0000FF",1);
				});

				var obj = {};
				pCar.update=(function() {
					rRad.r  = rRad.v.rot2dAbout({x : 0 ,y : 12 },rRad.v,rCar.m);
				  rRad2.r2  = rRad2.v.rot2dAbout({x : 0 ,y : 12 },rRad2.v,rCar.m);
				  if (k && c) {
				  		if (k.isDown(c.RIGHT) && (this.x  + this.m) < 1172-24) this.m+=4;
				  	  	if (k.isDown(c.LEFT)  && (this.x  + this.m) > 52  ) this.m-=4;
				 	 };
 				});

		return {
			instance : rCar
		};	

}(Vetor, box.instance, objects.instance));