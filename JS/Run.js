/*
*  Run.js: Inicia a execução do jogo...
*            	
*/
var run = (function( /* Referência objeto global: window */ w ) {
	
	'use strict'

	 var refRun = null , runProto = null;

	function Run(){};

	refRun = new Run(),runProto = Run.prototype;

	runProto.startGamee = ( function e () {
		  game.start.updDrawAnimation();
		  game.start.sleep(e);
	}());


}( /* Objeto global: window */ window ));