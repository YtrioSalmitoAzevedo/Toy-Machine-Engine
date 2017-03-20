var s = scene.instance,esc=score.instance;
   box=(function(s,e) {

		var rBox, pBox, total;
		function Box(x, y, w, h, c) {
				this.x  = x;  
				this.y  = y;
				this.w  = w;
				this.h  = h;
				this.c  = c;
		};

	    rBox   = new Box();
		pBox   = Box.prototype;
		Box.I  = 13;
		Box.J  = 25;
		Box.W  = 50;
		Box.H  = 50;
		Box.D  = 50;

		pBox.enemies=(function() {
			var i=1,item=0,rImg=null;
			rBox.l=new Array();rBox.rl=new Array();
			for (; i < Box.I; i++) {
			  	  for (var j = 1; j < Box.J; j++) {	
			  	  	   item=s.nextMap[s.next][i-1][j-1]; 
			  	  	   if ( item ) {
				  	  	    if ( item === 1  ) {
				  	  	   		 rImg={img : g.img("IceBox"),x:(Box.D*j),y:(Box.D*i)};
				  	  	   		 rImg.img.addEventListener('load',rBox.draw); 
				  	  	   		 rBox.rl.push(rImg);
				  	  	    };
				  	  	    if ( item === 2  ) {
				  	 	   		 rImg={img : g.img("Box"),x:(Box.D*j),y:(Box.D*i)};
				  	  	   		 rImg.img.addEventListener('load',rBox.draw); 
				  	  	   		 rBox.l.push(rImg);
				  	 	    };
			  	  		};
			  	  };
			 };
			 total=(rBox.l.length*100);
		});

		rBox.enemies();

		pBox.draw=(function() {
			var f,h;
			for ( f in rBox.rl ) g.drawImg(rBox.rl[f].img,{x:rBox.rl[f].x,y:rBox.rl[f].y});
			for ( h in rBox.l  ) g.drawImg(rBox.l[h].img, {x:rBox.l[h].x,y:rBox.l[h].y});
		});

		pBox.update=(function() {
				if ( e.rSc1.p === total ) {
					 s.next+=1;
					 e.rSc1.p=0;
				 	 e.rSc1.t="Score: "+e.rSc1.p; 
					 e.rSc2.p+=1;
				 	 e.rSc2.t="Level: "+e.rSc2.p;
				 	 rBox.enemies(); 
				};
		});
		
		return {
			instance : rBox
		};

}(s,esc));