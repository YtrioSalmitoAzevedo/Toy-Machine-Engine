/*
*  Game.js: Classe geral para o 
*  controle do fluxo da aplicação 	
*
*/

var game = (function( g, w ) {

	'use strict'

	 var reqId   = null,gameProto = null,
	 	 refGame = null,classe    = null;

	function Game() {
		this.list=[map.instance,vehicle.instance,
		projectile.instance,army.instance,score.instance];
	};

	refGame = new Game(),gameProto = Game.prototype;

	gameProto.getRequestAnimationFrame = (function() {	
			return w.requestAnimationFrame       ||
				   w.mozRequestAnimationFrame    ||
				   w.webkitRequestAnimationFrame ||
				   w.oRequestAnimationFrame 	 ||
				   function(cb) { return w.setTimeout(cb,1000/60); };
	}());
	/* Obtem um Cancelador de game loop */
	gameProto.getCancelAnimationFrame = (function() {
			return w.cancelAnimationFrame       ||
				   w.mozCancelAnimationFrame    ||
				   w.webkitCancelAnimationFrame ||
				   w.oCancelAnimationFrame      ||
				   function(id) { return w.clearTimeout(id); };
	}());

	gameProto.sleep = (function(cb) {
	     reqId = window.requestAnimationFrame(cb);
	});

	gameProto.cancelAnimation = (function() {
		 if (reqId)
		 	 refGame.getCancelAnimationFrame(reqId);
	});

	gameProto.updDrawAnimation = (function() {	
		  
		  g.clear(0,0,g.width(),g.height());		
		  for ( var prop in refGame.list ) {
		  		classe=refGame.list[prop];
		  		classe.update();
			    classe.draw();
		  };

	});

	return {
		start : refGame
	}

}(g , window));



