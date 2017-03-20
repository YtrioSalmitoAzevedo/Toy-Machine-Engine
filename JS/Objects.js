var objects = (function(vetor) {


		var rObj, pObj, v;
		function Objects(){};

		rObj = new Objects();
		v    = new vetor(0, 0);
		pObj = Objects.prototype;
		
		pObj.boundingBox=(function(rP, rQ) {
			  
			  var b1, b2;
			  b1=(rP.x >= rQ.x) && (rP.x <= rQ.x + rQ.w );
			  b2=(rP.y >= rQ.y) && (rP.y <= rQ.y + rQ.h );

			  return (b1 && b2);
		
		});	

		pObj.colAboutCircles=(function(rC1, rC2) {
		 	
		 	var hip=v.distanceBetween(rC1, rC2),
		 		r1 = rC1.r,
		 		r2 = rC2.r;

		 	return ( hip < (r1+r2) );	 	
		
		});	

		pObj.pixelPerfect=(function(){});	

		pObj.colAboutPolygons=(function(){});	


		return {
			instance : rObj
		}; 

}(Vetor));