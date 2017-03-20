var projectile = (function(army, phy, m, car, song, obj, b, score,map) {

			 var rProje, pProje,list=new Array(),go = false, ball = null;
			 function Projectile(x, y, t) {
					 	this.x  = x;  
					 	this.y  = y;
					 	this.t  = t;  
					 	this.s  = 0;
					 	this.e  = 2*m.PI
					 	this.r  = 5; 
			 };

			 rProje = new Projectile();
			 pProje = Projectile.prototype;
			 i 	    = null;

			 pProje.keypressed=(function(key,cost) {
			 	 if ( key.isDown(cost.Z) ) {
			 	 	  this.go=true;
			 	 	  this.ref=new Projectile(0, 0, 0); 
			 	 	  this.ref.xo = army.s.x+army.z.x+car.m;
			 		  this.ref.yo = army.s.y+army.z.y; 
			 		  this.ref.z  = army.n;
			 		  this.ref.v  = this.ref.z * m.PI/180;
			 		  this.ref.vx = 107 * m.cos(this.ref.v);
			 		  this.ref.vy = 107 * m.sin(this.ref.v);
			 	 	  list.push(this.ref);
			 	 	  song.playAudio();
				 };
			 });	

			 pProje.shoot=(function(xo, yo, d, c) {
			 	 	 c.x  = (xo + c.vx * c.t);
			 	 	 c.y  = (yo + c.vy * c.t) + (phy.g*m.pow(c.t,2)/2.0);
			 	 	 c.t += d; 
			 });

			 pProje.draw=(function() {
			 	if ( this.go  ) 
			 		 for (var i in list) { 
			 		 	  ball=list[i];
			 		 	  this.shoot(ball.xo, ball.yo, 0.12, ball);
			 	    	  g.circle(ball.x, ball.y, ball.r, ball.s, ball.e, false);
			 	    	  this.collision(ball);  
			 	     };
			 });
			 
			 pProje.update=(function() {});

			 pProje.collision=(function(k) {
			 	
			 	 var i=0, j=0, h=0, f=0, n=0, bool=0;
			 	 for (i in b.l) {
				 	 	 n=b.l.indexOf(b.l[i]);
				 	 	 b.l[i].w=b.l[i].h=b.l[i].img.width;
				 	 	 bool=obj.boundingBox(k,b.l[i]);
				 	 	 if ( bool ) {
				 	 	 	  	b.l.splice(n,1);
				 			  	list.splice(list.indexOf(k),1);
				 			  	score.rSc1.p+=100;
				 			  	score.rSc1.t="Score: "+score.rSc1.p; 
				 			  	song.destroySong();
				 			  	return;
				 	 	 };
			 	 	};

			 	 	for (j in b.rl) {
				 	  	 	n=b.rl.indexOf(b.rl[j]);
				 	 	 	b.rl[j].w=b.rl[j].h=b.rl[j].img.width;
				 	 	 	bool=obj.boundingBox(k,b.rl[j]);
				 	 	 	if ( bool ) { 
				 	 	 		 list.splice(list.indexOf(k),1);
				 	 			 return;
				 	 		};
				 	};

							 	 	
					if (k.x < 50) { 
				         k.yo = k.y; 
				 	     k.xo = 50;
				 	     k.vx = -k.vx;
				 	     k.t  = 0.12; 	
				    } else if ((k.x) > 1250) { 
				         k.yo = k.y; 
				 	     k.xo = k.x;
				 	     k.vx = -k.vx;
				 	     k.t  = 0.12; 	
				    }
				     
				    if (k.y < 50) { 
				        k.yo = 50; 
				 	    k.xo = k.x;
				 	    k.vy = -k.vy;
				 	    k.t  = 0.12;
				    } else if (((k.y) > 650)) { 
				        k.yo = 650; 
				 	    k.xo = k.x;
				 	    k.vy = -k.vy;
				 	    k.t  = 0.12;
				    }
			 
			 });
			 
			 


		return {
			instance : rProje
		};	 

}(army.instance,
  Physical.instance,Math,
  vehicle.instance,
  song.instance,objects.instance,box.instance,score.instance,map.instance));