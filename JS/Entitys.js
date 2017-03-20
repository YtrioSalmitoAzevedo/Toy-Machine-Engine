// Generalização de entidades
var Entitys = (function() {

	function Entitys() {};

	Entitys.INSTANCE_VEHICLE    = vehicle.instance;
	Entitys.INSTANCE_ARMY       = army.instance; 
	Entitys.INSTANCE_PROJECTILE = projectile.instance; 


	return Entitys;

}());
