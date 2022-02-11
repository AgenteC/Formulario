class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
  question.hide()
    //escribe aquí el código para cambiar el color de fondo 
    background("yellow")
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    text("Desafio 1",30,30)
    //llama aquí a getContestantInfo()
    Contestant.getPlayerInfo()


    //escribe la condición para comprobar si contestantInfor no está indefinido 
     if(allContestants !== undefined){

      fill("blue")
      textSize(20)
      text("Nota:El concursante que responda correctamente sera señalado con verde!",130,230);

     }

   

    //escribe aquí el código para agregar una nota
    for(var plr in allContestants){
       var correctAns = "2";
       if(correctAns === allContestants[plr].answer){
        console.log(allContestants);
         textSize(15); 
         fill("green"); 
         text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,280) 
       }else{ 
         fill("red");
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,300) 
         }
      }; 
    
    
       }
     }
    //escribe el código para resaltar al concursante que respondió correctamente
    
  


