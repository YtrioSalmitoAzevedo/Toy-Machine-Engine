var win = window; 
(function(w, a) {

			var rMouse, pMouse, listen;
			function Mouse() {};

			rMouse = new Mouse();
			pMouse = Mouse.prototype;
			listen = w.addEventListener;

			pMouse.mousemove=(function(e) {
				 a.mousemove(e);	
			});

			listen('mousemove',pMouse.mousemove);

}(win, army.instance));