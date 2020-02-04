
let imgsrc;
let correct="";
let points=0;
let prevQuestion="";

let chosenquizcat = [];



function chosecat() {


    const quizcat = [1,2,3]


    let indexcat = Math.floor(Math.random() * quizcat.length+1);

    console.log(indexcat);

    for (let i = 0; i < quizcat.length ; i++) {
        if (indexcat === quizcat[i]){
            let cat = quizcat[i];
            if(cat === 1){chosenquizcat = lotr.slice()}
            if(cat === 2){chosenquizcat = superman.slice() }
            if(cat === 3){chosenquizcat = got.slice()}

        }
    }

}


function newQuestion() {


    let template= document.getElementById("template");
    template.innerHTML="";

    chosecat();

    console.log(chosenquizcat);

    let index = Math.floor(Math.random() * chosenquizcat.length);

    console.log(index);


    for (let i = 0; i < chosenquizcat.length; i++) {



        if (index === chosenquizcat[i].index) {

            if(chosenquizcat[i].question === prevQuestion ){

                newQuestion();

            }

            else {

            let question= chosenquizcat[i].question;
            let altA = chosenquizcat[i].A;
            let altB = chosenquizcat[i].B;
            let altC = chosenquizcat[i].C;
            let altD = chosenquizcat[i].D;
            correct = chosenquizcat[i].correct;
            imgsrc = chosenquizcat[i].img;
            prevQuestion=chosenquizcat[i].question;





            let questiontemplate = document.createElement('div');
            questiontemplate.innerHTML =
                ' <h4 id="Questiondyn">'+question+'</h4>\n' +
                '    <div class="selections" id="sel1" value="1">A: '+altA+'</div><br>\n' +
                '    <div class="selections" id="sel2" value="2">B: '+altB+'</div><br>\n' +
                '    <div class="selections" id="sel3" value="3">C: '+altC+'</div><br>\n' +
                '    <div class="selections" id="sel4" value="4">D: '+altD+'</div><br>\n'+
                '<img class="imageclass" src='+imgsrc+'>';


            template.appendChild(questiontemplate);

            }
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
        let pointsdom = document.getElementById("points");
        alert("Right you are!!");
        pointsdom.innerHTML="";
        points += 1;
        pointsdom.innerHTML=points;
        newQuestion();
    }else {
        let pointsdom = document.getElementById("points");
        alert("wrong try again");
        pointsdom.innerHTML="";
        points -= 1;
        pointsdom.innerHTML=points;
    }




}

function start() {
    let startbtn = document.getElementById("start");
    console.log("im working");

    startbtn.style.display ="none";
    newQuestion();
}

