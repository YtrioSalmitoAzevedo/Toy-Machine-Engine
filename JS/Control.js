var win=window;
(function(w) {

		function Keyboard() {};

		var keyProto = Keyboard.prototype,
            addEvent = w.addEventListener; 
    
			// Constantes
			Keyboard.SELF    = new Keyboard();
			Keyboard.WIN     = w.addEventListener;
			Keyboard.SPACE   = 32;
			Keyboard.LEFT    = 37;
			Keyboard.UP      = 38;
			Keyboard.RIGHT   = 39;
			Keyboard.DOWN    = 40;
			Keyboard.Z       = 90;
			Keyboard.J       = 74;
			Keyboard.X       = 120;
			Keyboard.W       = 87;
			Keyboard.S       = 83;
			Keyboard.A       = 65;
			Keyboard.D       = 68;
			Keyboard.PRESSED = {};
			Keyboard.LASTKEY = null;
    
			keyProto.dispathEvents = function() {
				for ( var prop in Entitys ) 
					  if ( "keypressed"  in Entitys[prop] ) 
					  	Entitys[prop].keypressed(this,Keyboard);
			};
    
			keyProto.isDown = function(keyCode) {
				return Keyboard.PRESSED[keyCode];
			};

			keyProto.onKeydown = function(event) {
				Keyboard.PRESSED[event.keyCode] = true;
			};

			keyProto.onKeyup = function(event) {
				delete Keyboard.PRESSED[event.keyCode];
			};
    
           addEvent('keydown',function(event) {
	             Keyboard.SELF.onKeydown(event);
	             addEvent('keyup',function(event){Keyboard.SELF.onKeyup(event);});
	             Keyboard.SELF.dispathEvents();
         });
         
}(win));
