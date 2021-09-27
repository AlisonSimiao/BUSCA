var itens 	= ["PAPEL", "FOLHA", "LAPIS", "CANETA", "PAO", "BAURU","sagaz","negro","âmago","mexer","êxito","termo","senso","algoz","nobre","plena","afeto","ética","mútua","sutil","tênue","vigor","audaz","aquém","inato","porém","sanar","seção","fazer","desde","cerne","ideia","assim","moral","poder","fosse","torpe","honra","anexo","muito","justo","fútil","razão","ícone","gozar","quiçá","etnia","mútuo","égide","lapso","tange","sobre","expor","hábil","haver","sonho","casal","posse","pesar","corja","ávido","ardil","amigo","coser","detém","boçal","tempo","genro","prole","então","digno","seara","causa","dengo","dizer","tenaz","gleba","brado","ânsia","dever","crivo","óbice","ceder","saber","ápice","ânimo","atroz","assaz","pária","comum","culto","denso","temor","censo","cozer","sendo","mundo","fugaz","valha","graça","pauta","neném","orgia","vício","revés","ainda"];
var span;
var auxItens;

function busca(){
	span 			= $("#resultado")[0];
	texto 			= $("#search_t")[0];
	span.innerHTML	= "";
	txt 			= texto.value;

	auxItens = [];
	for (i in itens)
		if ( itens[i].toUpperCase().indexOf(texto.value.toUpperCase()) > -1)
			auxItens.push(itens[i]);	
	
	for (i in auxItens)
		span.innerHTML += "<span class='item' id='"+ i +"'>"  + auxItens[i] + "</span><br>"; 
}