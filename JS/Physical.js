var Physical=(function() {


		var rPhy,pPhy,rDate,gravity,now,dTimer=0;
		function Physical(g, i) {
				this.g = g; 
				this.i = i;
		};

		gravity = 9.80665;
		rDate   = new Date();
		rPhy    = new Physical(gravity,rDate.getTime());
		pPhy    = Physical.prototype;

		pPhy.timer = (function() {
		   var c = Date.now(),s = this,
		  	   d = ((c - s.l)/1000); 	
		  	 s.l = c;		
		   	return d;
		});

		return {
			instance : rPhy
		};


}());