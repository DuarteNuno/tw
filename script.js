var paginainicial = document.getElementById('login_page');
var cor;
var difcl;

function login() {

	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	document.getElementById('pag_inicial').style.display = 'none';  
	document.getElementById('after-login').style.display = 'block';
	document.getElementById('startgame').style.display = 'block';

	document.getElementById('regras').style.display = 'none';
	   /*
	  if(user === "" || pass === "")
	    window.alert("Preencha os campos");

	  if(user === "root" && pass === "root") {
	        document.getElementById('pag_inicial').style.display = "none";  
	        document.getElementById('after-login').style.display = 'block';
	    }*/
}

function home(){

	//document.getElementById('home').style.display = 'block';
	document.getElementById('regras').style.display = 'none';
	//document.getElementById('tabuleiro').style.display = 'block';

}

function regras(){

	//document.getElementById('home').style.display = 'none';
	document.getElementById('regras').style.display = 'block';
	document.getElementById('startgame').style.display = 'none';
	document.getElementById('cor_peca').style.display = 'none';
}

function classficacoes(){


}

function logout(){
	document.getElementById('pag_inicial').style.display = 'block';
	document.getElementById('after-login').style.display = 'none';
	document.getElementByIdº('regras').style.display = 'none';
	document.getElementById('startgame').style.display = 'none';
}

function startgame() {
  //document.getElementById('tabuleiro').style.display = 'block';
  document.getElementById('startgame').style.display = 'none';
  document.getElementById('cor_peca').style.display = 'block';


}
/*
function startvs() {
  //document.getElementById('tabuleiro').style.display = 'block';
  document.getElementById('regras').style.display = 'none';
  //document.getElementById('dificuldade').style.display = 'block';
  document.getElementById('startgame').style.display = 'block'; //pq ainda nao é para fazer 
}*/

function black(){
	var cor = 2;
	//document.getElementById('startgame').style.display = 'none';
	document.getElementById('dificuldade').style.display = 'block';
	document.getElementById('configurações').style.display = 'none';
	
}

function white(){
	var cor = 1;
	document.getElementById('configurações').style.display = 'none';
	document.getElementById('dificuldade').style.display = 'block';
}

function dif_easy(){
	var difcl = 1;
	document.getElementById('area_de_jogo').style.display = 'block';
	document.getElementById('startgame').style.display = 'none';
	document.getElementById('cor_peca').style.display = 'none';
	document.getElementById('dificuldade').style.display = 'none';
}

function dif_medium(){
	var difcl = 2;
	document.getElementById('area_de_jogo').style.display = 'block';
	document.getElementById('startgame').style.display = 'none';
	document.getElementById('cor_peca').style.display = 'none';
	document.getElementById('dificuldade').style.display = 'none';
}

function dif_hard(){
	var difcl = 3;
	document.getElementById('area_de_jogo').style.display = 'block';
	document.getElementById('startgame').style.display = 'none';
	document.getElementById('cor_peca').style.display = 'none';
	document.getElementById('dificuldade').style.display = 'none';
}