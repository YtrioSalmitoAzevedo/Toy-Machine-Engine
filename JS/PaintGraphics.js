var Graphic = (function(d) {

			var canvas   = d.createElement("canvas"),
			ctx2D	     = canvas.getContext('2d'),
			PaintMethods = null;

			function Screen(w, h, corB, corBG, s) {
					canvas.width  = w;
					canvas.height = h;	
					canvas.style.border = s+"px solid "+corB;
					canvas.style.background = corBG;	
					d.body.appendChild(canvas);

				return PaintMethods;	
			};

		  PaintMethods={

		  		  width  : function() {
		  		  	   return canvas.width;	
		  		  },
		  		  
		  		  height : function() {
		  		  	   return canvas.height;
		  		  },

			  	  rect : function(x, y, w, h, bg, c, l) {
				  			ctx2D.beginPath();
					  		ctx2D.strokeStyle=(!c) ? 'transparent' : c;
					  		ctx2D.lineWidth= (!l) ? 0 : l;
					  		ctx2D.strokeRect(x,y,w,h);
					  		ctx2D.fillStyle=(!bg) ? 'transparent' : bg;
					  		ctx2D.fillRect(x,y,w,h);
				  			ctx2D.stroke();
				  },
				  
				  text : function(n, f, t, x, y, c) {
						  	ctx2D.beginPath();
							ctx2D.fillStyle=(!c) ? '#000' : c;
							ctx2D.font=n+"px "+f;
							ctx2D.fillText(t,x,y);
						  	ctx2D.stroke();
				  },
				 
				 clear : function(x, y, w, h) {
	  	    			ctx2D.clearRect(x,y,w,h);
	  			 },

	  			 circle : function(x, y, r, s, e, c, l, bg) {
				  	 	ctx2D.beginPath();
				  	 	ctx2D.strokeStyle=(!c) ? '#000' : c;
				  	 	ctx2D.lineWidth=l;
				  	 	ctx2D.arc(x,y,r,s,e);
					  	ctx2D.fillStyle=(!bg) ? '#000' : bg;
					  	ctx2D.fill();
				  	 	ctx2D.stroke();
				 },

				 line : function(x1, y1, x2, y2, c) {
				  		ctx2D.beginPath();
					  	ctx2D.strokeStyle=(!c) ? '#000' : c;
					  	ctx2D.moveTo(x1,y1);
					  	ctx2D.lineTo(x2,y2);
				  		ctx2D.stroke();
				 },

				img : function(s) {
				 		var i     = new Image();
				  	 		i.src = "../Images/"+s+".png"; 
		  	 		    	return i;	
	  			 },

	  			 drawImg : function(i, o) {
					  ctx2D.drawImage(i,o.x, o.y,i.naturalWidth,i.naturalHeight);
	  			 }

			};	

	return Screen;		

}(document));