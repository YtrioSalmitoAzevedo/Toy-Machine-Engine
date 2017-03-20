var score = (function() {

	 var rScore, pScore;
	 	 function Score(s) {
	 	 	 this.n = s.n;
	 	 	 this.f = s.f;
	 	 	 this.p = s.p;
	 	 	 this.x = s.x;
	 	 	 this.y = s.y;
	 	 	 this.c = s.c;
	 	 	 this.t = (s.t + s.p);
	 	 };

	 	 rScore        = new Score({}); 	
	 	 rScore.rSc1   = new Score({n : 14, f : "Arial", t : "Score: ", p : 0, x : 77,   y : 688, c: "#000" });
	 	 rScore.rSc2   = new Score({n : 14, f : "Arial", t : "Level: ", p : 1, x : 1151, y : 688, c: "#000" });
	 	 pScore        = Score.prototype;

	 	 pScore.draw=(function() {
	 	 		g.text(this.rSc1.n, this.rSc1.f, this.rSc1.t, this.rSc1.x, this.rSc1.y, this.rSc1.c);
	 	 		g.text(this.rSc2.n, this.rSc2.f, this.rSc2.t, this.rSc2.x, this.rSc2.y, this.rSc2.c);
	 	 });

	 	 pScore.update=(function(){});

	 	 return {
	 	 	instance : rScore
	 	 };

}());