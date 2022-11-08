
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxImg, box, boxC
var backgroundImg
var helicopterImg, helicopter
var person1, person2, person3, person4, person5, person6, person7, person8
var person1Img, person2Img, person3Img, person4Img, person5Img, person6Img, person7Img, person8Img
var received_sound
var peopleGroup
var dropButtonImg, dropButton
var rope

function preload(){
  backgroundImg= loadImage('background.jpg')
  boxImg= loadImage('box.png')
  helicopterImg= loadImage('helicopter.gif')
  person1Img= loadImage('person1.png')
  person2Img= loadImage('person2.png')
  person3Img= loadImage('person3.png')
  person4Img= loadImage('person4.png')
  person5Img= loadImage('person5.png')
  person6Img= loadImage('person6.png')
  person7Img= loadImage('person7.png')
  person8Img= loadImage('person8.png')
  received_sound= loadSound('received.mp3')
  
  
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  helicopter= createSprite(100,200,50,50)
  helicopter.addImage(helicopterImg)
  helicoptor.setCollider("circle",0,0,20,20)

  box= createSprite(10,10,10,10)
  box.addImage(boxImg)
  box.setCollider(circl)

  dropButton= createImg('dropButton.png')
  dropButton.position(100,100)
  dropButton.size(50,50)
  dropButton.mouseClicked(drop)

  rope= new Rope(10,{x:100,y:200});
  boxC= new Link(rope,box)
  peopleGroup= new Group()
}


function draw() 
{
  background(51);
  image (backgroundImg,0,0,width,height)
  Engine.update(engine);

  if(keyDown("RIGHT_ARROW")){
    helicopter.x=helicopter.x+20
  }
  if(keyDown("LEFT_ARROW")){
    helicopter.x=helicopter.x-20
  }
  if(keyDown("UP_ARROW")){
    helicopter.y=helicopter.y+20
  }
  if(keyDown("DOWN_ARROW")){
    helicopter.y=helicopter.y-20
  }
 
  drop()

  if(box.isTouching(peopleGroup)){
    //create a new rope
    //old box and person will not be visible
  }
  else{
    text = ('GAME OVER!', 100, 100, 10, 10)
  }

  //code to attach the rope to the helicopter and the box
  

  p1()
  p2()
  p3()
  p4()
  p5()
  p6()
  p7()
  p8()

  drawSprites();
}

function p1(){
  if(frameCount%100){
    person1=createSprite(random(130,202),random(132,222),10,10)
    person1.addImage(person1Img)
    person1.setCollider("circle",0,0,20,20)
    peopleGroup.add(person1)
  }
}

function p2(){
  if(frameCount%150){
    person2=createSprite(random(100,290),random(240,220),10,10)
    person2.addImage(person2Img)
    person2.setCollider("circle",0,0,20,20)
    peopleGroup.add(person2)
  }
}

function p3(){
  if(frameCount%200){
    person3=createSprite(random(200,200),random(200,230),10,10)
    person3.addImage(person3Img)
    person3.setCollider("circle",0,0,20,20)
    peopleGroup.add(person3)
  }
}

function p4(){
  if(frameCount%250){
    person4=createSprite(random(230,200),random(120,210),10,10)
    person4.addImage(person4Img)
    person4.setCollider("circle",0,0,20,20)
    peopleGroup.add(person4)
  }
}

function p5(){
  if(frameCount%300){
    person5=createSprite(random(320,210),random(130,170),10,10)
    person5.addImage(person5Img)
    person5.setCollider("circle",0,0,20,20)
    peopleGroup.add(person5)
  }
}

function p6(){
  if(frameCount%50){
    person6=createSprite(random(210,200),random(130,150),10,10)
    person6.addImage(person6Img)
    person6.setCollider("circle",0,0,20,20)
    peopleGroup.add(person6)
  }
}

function p7(){
  if(frameCount%350){
    person7=createSprite(random(140,150),random(134,120),10,10)
    person7.addImage(person7Img)
    person7.setCollider("circle",0,0,20,20)
    peopleGroup.add(person7)
  }
}

function p8(){
  if(frameCount%120){
    person8=createSprite(random(239,100),random(220,240),10,10)
    person8.addImage(person8Img)
    person8.setCollider("circle",0,0,20,20)
    peopleGroup.add(person8)
  }
}

function drop(){
  rope.break()
}