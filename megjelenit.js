var index = 0;

var kep1 = {
    eleresiut:"kepek/1.jpg",
    cim:"1. képcím",
    leiras:"1. leírás"
};/*objektum, leírja egyetlen kép tulajdonságait*/

var kep2 = {
    eleresiut:"kepek/2.jpg",
    cim:"2. képcím",
    leiras:"2. leírás"
};

var kep3 = {
    eleresiut:"kepek/3.jpg",
    cim:"3. képcím",
    leiras:"3. leírás"
};

var kepTomb=[kep1, kep2, kep3];

$(function(){
    for (var i = 0; i < kepTomb.length; i++) {
        var elem='<div><h3></h3><img id="'+i+'" src="" alt=""/><p></p></div>';
        $("article").eq(0).append(elem);
    }
    
    var kepElemTomb=$("article div img");
    var cimElemTomb=$("article div h3");
    var leirasElemTomb=$("article div p");
    console.log(kepTomb);
    
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb.eq(i).attr("src",kepTomb[i].eleresiut);
        cimElemTomb.eq(i).html(kepTomb[i].cim);
        leirasElemTomb.eq(i).html(kepTomb[i].leiras);
    }   
    
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb.eq(i).click(kepCsere);
    }
    
    $("#bal").eq(0).click(kepValtasBalra);
    $("#jobb").eq(0).click(kepValtasJobbra);
});

function kepCsere(){
    //itt cserélek képet
    var i = this.id;
    megjelenes(i);
}

function kepValtasBalra(){

    megjelenes(index);
    index--;
    if(index<0){
        index=kepTomb.length-1;
    }
}
function kepValtasJobbra(){

    megjelenes(index);
    index++;
    if(index>kepTomb.length-1){
        index=0;
    }
}

function megjelenes(x) {
    $("#nagykepTarolo img").fadeOut(3000);
    $("#nagykepTarolo img").attr("src",kepTomb[x].eleresiut);
    $("#nagykepTarolo img").fadeIn(3000);
    $("#nagykepTarolo h3").eq(0).html(kepTomb[x].cim);
    $("#nagykepTarolo p").eq(0).html(kepTomb[x].leiras);
}