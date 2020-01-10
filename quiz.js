

const questions = [
    {
        index:0,
        question:"What is Aragorns sword called in Return of The King?",
        A:"Anduril",
        B:"The sword",
        C:"The doombringer",
        D:"John witchhunter",
        correct:"1",

    },

    {
        index:1,
        question:"What is Frodo's Uncles name?",
        A:"Dildo Teabag",
        B:"Samwise Gamge",
        C:"Bilbo Baggins",
        D:"Legolas",
        correct:"3",

    },


    {
        index:2,
        question:"What is Gandalfs first collor?",
        A:"White",
        B:"Gray",
        C:"Black",
        D:"Cyan",
        correct:"2",

    },

    {
        index:3,
        question:"How many rings did Sauron the deciver make for the elves?",
        A:1,
        B:5,
        C:"7 cores 14 threads",
        D:3,
        correct:"4",

    },




];

let correct="";





function newQuestion() {



    let template= document.getElementById("template");
    template.innerHTML="";


   let index = Math.floor(Math.random() * questions.length);

   for (let i = 0; i < questions.length; i++) {

if (index === questions[i].index) {

    let question= questions[i].question;
    let altA = questions[i].A;
    let altB = questions[i].B;
    let altC = questions[i].C;
    let altD = questions[i].D;
   correct = questions[i].correct;



    let questiontemplate = document.createElement('div');
    questiontemplate.innerHTML =
        ' <h4 id="Questiondyn">'+question+'</h4>\n' +
        '    <div class="selections" id="sel1" value="1">A: '+altA+'</div><br>\n' +
        '    <div class="selections" id="sel2" value="2">B: '+altB+'</div><br>\n' +
        '    <div class="selections" id="sel3" value="3">C: '+altC+'</div><br>\n' +
        '    <div class="selections" id="sel4" value="4">D: '+altD+'</div><br>\n';


    template.appendChild(questiontemplate);

    }
   }
}

function checkanswer(e) {
    e=e || window.event;
    e=e.target || e.srcElement;
    var element=document.getElementById(e.id);

    let answerid = e.id;
    let answervalue = element.getAttribute("value");


    if(answervalue === correct){
        alert("Right you are!!");

        newQuestion();
    }else {alert("wrong try again")}




}



