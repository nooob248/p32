var score=0;
var stand;
function setup(){
    var canvas=createCanvas(1200,400);
    background("black");
    text("Score: "+score,width-750,40);
    stand=new Ground(600,200);

    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(420,235,30,40);
    block12=new Block(450,235,30,40);
    //
    block13=new Block(360,235,30,40);
    block14=new Block(390,235,30,40);
    block15=new Block(420,235,30,40);
    //
    block16=new Block(390,235,30,40);
}

function draw(){
    stand.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
}

