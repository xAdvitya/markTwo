const  readlineSync = require('readline-sync')

let score=0;
const questions =[
	{
		question:"what is Knaye's most streamed song",
		answer:"stronger",
		a:"stronger",
		b:"family business",
		c:"jesus walks",
		d:"good morning",
	},
	{
		question:"inspiration behind Travis scott's name",
		answer:"kid cudi",
		a:"kanye",
		b:"Jay-z",
		c:"kid cudi",
		d:"lil wayne",
	},
	{
		question:"which artist has vocals on earthquake track by tyler",
		answer:"carti",
		a:"lil uzi vert",
		b:"gunna",
		c:"carti",
		d:"thugger",
	},
	{
		question:"drake's biggeset music style inspiration",
		answer:"Kanye",
		a:"Kanye",
		b:"lil wayne",
		c:"Pusha T",
		d:"eminem",
	},
	{
		question:"Kanye's unreleased album",
		answer:"yandhi",
		a:"yandi",
		b:"college class",
		c:"store hunt",
		d:"living",
	}
]

var highScores=[
  {
    name:"Ankit",
    score:5
  },
  {
    name:"Anmol",
    score:4
  },
  {
    name:"Rahul",
    score:3
  }
];
console.log("welcome to Rap quiz\n")
const name =  readlineSync.question("whats's your name ")

const askQuestion = function(questions){
	
	for(i=0;i<=4;i++){
		console.log("\n_____________________________________\n")
		console.log(questions[i].question+":\n");
		console.log("a> "+questions[i].a);
		console.log("b> "+questions[i].b);
		console.log("c> "+questions[i].c);
		console.log("d> "+questions[i].d);

	const input =readlineSync.question("select your answer: \npress e to exit: ")

	if(input.toLowerCase() == 'e'){
		console.log("stopped")
		process.exit()
	}

	scoreCalc(questions[i][input.toLowerCase()],questions[i].answer)
	}
	
}

const scoreCalc = function(input,correct){
	
	if(input === correct){
		console.log("\ncorrect answer");
		score+=1;
	}
	else{
		console.log("\nincorrect answer")
	}
}

const highscoreCalc = function(highScores,score,name){
	console.log("\n============================\n")
	console.log(`name: ${name}`)
	console.log(`score: ${score}`)

	if(score === 5){
		console.log("\nyou have highest score\n")
	}
	else{
		for(i=0;i<highScores.length;i++){
			
			if(highScores[i].score<=score){
				console.log('\nyou are in top 3 highscorers \n')
				break;
			}
		}

	}
}
askQuestion(questions);
highscoreCalc(highScores,score,name);
