var sucesso="<img src='images/sucesso.png' class='symbols' />";
var triunfo="<img src='images/triunfo.png' class='symbols' />";
var vantagem="<img src='images/vantagem.png' class='symbols' />";
var fracasso="<img src='images/fracasso.png' class='symbols' />";
var desespero="<img src='images/desespero.png' class='symbols' />";
var ameaca="<img src='images/ameaca.png' class='symbols' />";
var vazio="";
var doublevantagem="<img src='images/vantagem.png' class='symbols' /><img src='images/vantagem.png' class='symbols' />";
var force="<img src='images/ls.png' class='symbols' />";
var darkside="<img src='images/ds.png' class='symbols' />";
var doubleforce="<img src='images/ls.png' class='symbols' /><img src='images/ls.png' class='symbols' />";
var doubledarkside="<img src='images/ds.png' class='symbols' /><img src='images/ds.png' class='symbols' />";
var vantagemsucesso="<img src='images/vantagem.png' class='symbols' /><img src='images/sucesso.png' class='symbols' />";
var doublesucesso="<img src='images/sucesso.png' class='symbols' /><img src='images/sucesso.png' class='symbols' />";
var ameacafracasso="<img src='images/ameaca.png' class='symbols' /><img src='images/fracasso.png' class='symbols' />";
var doublefracasso="<img src='images/fracasso.png' class='symbols' /><img src='images/fracasso.png' class='symbols' />";
var doubleameaca="<img src='images/ameaca.png' class='symbols' /><img src='images/ameaca.png' class='symbols' />";

var dado_forca = [12, force, darkside, doubleforce, darkside, doubleforce, darkside, force, darkside, doubledarkside, darkside, doubleforce, darkside, "<img src='images/WhiteDice.png' class='dices' />"];
var dado_habilidade = [8, vazio, vantagem, doublesucesso, sucesso, vantagemsucesso, vantagem, doublevantagem, sucesso, "<img src='images/GreenDice.png' class='dices' />"];
var dado_proficiencia = [12, vazio, doublesucesso, sucesso, doublevantagem, vantagemsucesso, vantagemsucesso, triunfo, doublesucesso, sucesso, doublevantagem, vantagemsucesso, vantagem, "<img src='images/YellowDice.png' class='dices' />"];
var dado_dificuldade = [8, vazio, doublefracasso, ameaca, ameacafracasso, fracasso, ameaca,  doubleameaca, ameaca, "<img src='images/PurpleDice.png' class='dices' />"];
var dado_desafio = [12, vazio, fracasso, doubleameaca, ameacafracasso, doublefracasso, ameaca, desespero, fracasso, doubleameaca, ameacafracasso, doublefracasso,ameaca, "<img src='images/RedDice.png' class='dices' />"];
var dado_ampliacao = [6, doublevantagem, sucesso, vazio,vantagemsucesso, vantagem, vazio, "<img src='images/BlueDice.png' class='dices' />"];
var dado_contratempo =[6, vazio, fracasso, ameaca, vazio, fracasso, ameaca, "<img src='images/BlackDice.png' class='dices' />"];



// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(max) {
  Math.round()
  return Math.floor(Math.random() * max) + 1;
}

function Pool()
{
	this.pool = [];

	this.roll = function()
	{
		var log = "";
		var array_resultado = [];
		for(var i in this.pool)
		{
			//console.log(this.pool[i][this.pool[i][0]+1]);
			var aux = this.pool[i][getRandomInt(this.pool[i][0])];
		    log += ""+this.pool[i][this.pool[i][0]+1]+" = "+aux+"<br />";
		    //console.log(aux);
		    array_resultado.push(aux);
		}
		//console.log(array_resultado);
		//calcula_resultado(array_resultado);
		//console.log(log);
		return log;
	}

	this.add = function(dice)
	{
		console.log("add "+dice);
		this.pool.push(dice);
	}

	this.remove = function(dice)
	{
		console.log("remove "+dice);
		var id = this.pool.indexOf(dice);
		if(id != -1)
		{
			this.pool.splice(id,1);
		}
	}

	this.kill_pool = function()
	{
		console.log("kill pool")
		this.pool = [];
	}

	// this.calcula_resultado = function(array_resultado)
	// {
	// 	var triunfo = 0;
	// 	var sucesso = 0;
	// 	var vantagem = 0;
	// 	var ameaca = 0;
	// 	var forca = 0;
	// 	var array_result = [];

	// 	for(var i in array_resultado)
	// 	{
	// 		console.log(array_resultado[i]);
	// 		if(i == sucesso)
	// 		{
	// 			sucesso++
	// 		}
	// 		else
	// 		{
	// 			if( == triunfo)
	// 				triunfo ++;
	// 			else
	// 			{
	// 				if(i == vantagem)
	// 					vantagem++;
	// 			}

	// 		}
	// 	}
	// }
}
