var b=box.instance,s=scene.instance,o=objects.instance;
  map=(function(b, s, o) {

		 var rMap, pMap, rImg, n, image;
		 function Map(a, b, w, h, d) {
		 	 this.a = a;
		 	 this.b = b;
		 	 this.w = w;
		 	 this.h = h;
		 	 this.d = d;
		 };

		rMap    = new Map(1300, 700, 50, 50, 50);
		rMap.lb = new Array();
		rMap.rl = new Array();
		pMap    = Map.prototype;

		pMap.init=(function() {
				var k=0;image={img : g.img("Map2"),x:50,y:50};
				image.img.addEventListener('load',rMap.draw);	  	
				for (; k < rMap.b/rMap.h;  k++)
				for (var v = 0; v < rMap.a/rMap.w;  v++) {	
					 if ( s.map[k][v] === 1 ) { 
						  rImg={img : g.img("IceBox"),x:(v*rMap.d),y:(k*rMap.d)};
						  rImg.img.addEventListener('load',rMap.draw);
						  rMap.lb.push(rImg);
					  };
					 if ( s.map[k][v] === 3 ) { 
						  rImg={img : g.img("IceBox"),x:(v*rMap.d),y:(k*rMap.d)};
						  rImg.img.addEventListener('load',rMap.draw);
						  rMap.rl.push(rImg);
					 }; 
				};	  
		});

		rMap.init();

		pMap.draw=(function() { 
			  var h, f;
			  for ( f in rMap.lb )  g.drawImg(rMap.lb[f].img,{x:rMap.lb[f].x,y:rMap.lb[f].y});
			  				   g.drawImg(image.img,{x:image.x,y:image.y});	
			  for ( h in rMap.rl )  g.drawImg(rMap.rl[h].img,{x:rMap.rl[h].x,y:rMap.rl[h].y});
			  b.draw();
		});

		pMap.update=(function() {
			  b.update();
		});

	return {
		instance : rMap
	};	

}(b, s, o));