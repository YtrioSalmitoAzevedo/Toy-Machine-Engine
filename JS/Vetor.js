var Vetor = (function(m) {
		
		function Vetor(x, y) {
			this.x = x || 0;
			this.y = y || 0;
		}

		Vetor.prototype = {
			 
			 /**
			  *
			  * Rotaciona um vetor em relação a origem (0,0) 
			  * @param  {Number} coordenada x
			  * @param  {Number} coordenada y
			  * @param  {Number} ângulo 
			  * @return {Vetor}  vetor rotacionado em O
			  */
			 
			 rotate : function(v, a) {

			 	var r = a*m.PI/180,
			 		s = m.sin(r), 	
			 		c = m.cos(r),
			 		x = v.x,y = v.y; 

			 	this.x = x*c - y*s;
			 	this.y = x*s + y*c;

			 },

			 /**
			  * 
			  * Rotação em relação a um eixo fixo qualquer
			  * @param  {[type]} k -> x e y do centro do eixo de rotação
			  * @param  {[type]} v -> x e y do vetor pretendido
			  * @param  {[type]} a -> ângulo
			  * @return {[type]} rotaciona um vetor em relação a um eixo arbitrário
			  */
			 
			  rot2dAbout : function(e, v, g) {
			 		
			 		var r = g*m.PI/180,
				 		s = m.sin(r),c = m.cos(r),
				 		x = v.x,y = v.y,
				 		o = m.abs(e.y-v.y),
				 		k = m.abs(v.y-o),
				 		l = new Vetor(e.x,o),
				 		f = new Vetor(e.x,k);	
			 		
			 		return {
			 			u : new Vetor(f.x*c - f.y*s , f.x*s + f.y*c),
			 			v : new Vetor(l.x*c + l.y*s , l.x*s - l.y*c)
			 		};	
	
	 		  },

			 /**
			  * 
			  * Distância A:(x, y) a B:(x, y)
			  * @param  {vetor}  a -> vetor
			  * @param  {vetor}  b -> vetor
			  * @return {Number} Distância entre A e B
			  */
			 
			 distanceBetween : function(a, b) {
			 	 
			 	 var p  = m.pow,
			 	 	 i  = m.abs,
			 	 	 dx = p(i(b.x - a.x),2),
			 	 	 dy = p(i(b.y - a.y),2);

			 	 return m.sqrt(dx+dy);

			 },

			 /**
			  * 
			  * Forneçe a norma de um vetor
			  * @param  {Vetor} objeto vetor 
			  * @return {Number} comprimento do vetor  
			  */
			 
			 size : function(v) {
			 	
			 	var c1=m.pow(v.x,2),
			 		c2=m.pow(v.y,2),
			 	   sum=m.sqrt(c1+c2); 
			 	 return sum;

			 },

			 /**
			  *  
			  * Direção de um vetor dado seu ângulo
			  * @param  {Vetor}  v -> vetor posição
			  * @param  {Number} a -> ângulo de direção
			  * @return {Vetor}  mudança de direção
			  */
			 
			 direcion: function(v, a) {

			 	 var r = a * m.PI/180,
			 	 	 s = this.size(v),
			 	 	 x = s*m.cos(r),
			 	 	 y = s*m.sin(r);
			 
			 	this.x = x; 	 
			 	this.y = y;

			 },

			/**
			 * 
			 * Soma vetorial
			 * @param  {vetor}  a -> vetor
			 * @param  {vetor}  b -> vetor
			 * @return {vetor}  resultante da soma vetorial
			 */
			
			sum : function(a, b) {
				
				var sx = a.x + b.x,
					sy = a.y + b.y;

				return new Vetor(sx, sy);

			},

			/**
			 * 
			 * Multiplica um vetor por um escalar
			 * @param  {vetor}  v -> vetor 
			 * @param  {vetor}  s -> escalar
			 * @return {vetor}  novo vetor escalado   
			 */
			
			scaleVetor : function(v, s) {

				var s1 = v.x*s,
					s2 = v.y*s;

				this.x = s1;	
				this.y = s2;

			},


			/**
			 * 
			 * Produto escalar em 2D
			 * @param  {vetor} a : {x, y}
			 * @param  {vetor} b : {x, y}
			 * @return {Number} somatorio das componentes de dois vetores  
			 */
			
			dotProduct : function(a, b) {

				var s1 = a.x*b.x,
					s2 = a.y*b.y;

				return s1 + s2;	

			},

			/**
			 * 
			 * Clone unitário 
			 * @param  {vetor}  v -> vetor  
			 * @return {vetor}  retorna um clone unitário do vetor dado 
			 */
			
			cloneUnit : function(v) {
				
				var x = v.x,
					y = v.y,
					r = this.size(v);

				return new Vetor(x/r, y/r);

			},

			/**
			 * 
			 * Subtração entre vetores
			 * @param  {vetor} a -> vetor
			 * @param  {vetor} b -> vetor
			 * @return {vetor} novo vetor 
			 */
			
			sub : function(a, b) {

				var subX = a.x - b.x,
					subY = a.y - b.y;

				return new Vetor(subX, subY);
				

			},

			/**
			 * 
			 * Ângulo entre 2 vetores
			 * @param  {vetor}  v -> vetor
			 * @param  {vetor}  u -> vetor
			 * @return {Number} ângulo entre v e u  
			 */
			
			angleBetween : function(v, u) {
				
				var d = this.dotProduct,
					s = this.size,
					r = ((d(v, u))/(s(v) * s(u))),
					t = r;

				return m.round(m.acos(t) * 180 / m.PI);

			},

			/**
			 * 
			 * Alcance no movimento oblíquo
			 * @param  {Number}  v -> velocidade inicial
			 * @param  {Number}  t -> ângulo
			 * @return {Number}  alcance entre o ponto inicial e final da trajetória  
			 */

			range : function(v,t) {
					
			var r=t*m.PI/180,
				k=m.pow(v,2),
				h=m.sin(2*r)
				
				return ((k*h)/g);

			},


			/**
			 * 
			 * Altura máxima antes da queda
			 * @param  {Number}  v -> velocidade inicial
			 * @param  {Number}  t -> ângulo
			 * @return {Number}  altura máxima   
			 */
			
			maxH : function(v,t) {
				
				var r = t*m.PI/180,
					k = m.pow(v,2),
					h = m.pow(m.sin(r),2);

				return ((k*h)/(2*g));

			},

			/**
			 * 
			 * Tempo de subida até a altura máxima
			 * @param  {Number}  v -> velocidade inicial
			 * @param  {Number}  t -> ângulo
			 * @return {Number}  tempo de subida   
			 */
			
			riseTime : function(v,t) {
				
				var r = t*m.PI/180,
					k = v,
					h = m.sin(r);

				return ((k*h)/g);
						
			},

			
			/**
			 * [vO description]
			 * @param  {[type]} y  [description]
			 * @param  {[type]} so [description]
			 * @param  {[type]} a  [description]
			 * @param  {[type]} g  [description]
			 * @return {[type]}    [description]
			 */
			
			vO : function(g,yo,so,a) {
				 
				 var r = a*m.PI/180,
				 	 k = ((-1)*((2*g) * (yo-so))),
				 	 u = m.pow(m.sin(r),2),
				 	 z = m.sqrt(k/u);
				 return z;  	 
			
			}
			
		};

	return Vetor;	

}(Math));