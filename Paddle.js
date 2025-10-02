// const SPEED =0.02

// export default class Paddle{
//     constructor(paddleElem){
//         this.paddleElem=paddleElem;
//         this.reset();

//     }
//     get position(){
//         //with getcomputedstyle get id paddle style and with getpropertyvalue we get value of --position
//         return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue('--position'))
//     }

//     set position(value){
//         //change value of --position to value, here --position is 50 after that we can change it to daynamic value
//         this.paddleElem.style.setProperty('--position' , value)
//     }

//     rect(){
//         return this.paddleElem.getBoundingClientRect();
//     }
//     reset(){
//         this.position=50;
//     }
//     //we update the computer paddle according ball height when move the ball computer paddle move auto 
//     update(delta , ballHeight){
//         this.position += SPEED * delta * (ballHeight - this.position)

//     }

// }

const SPEED = 0.02

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem
    this.reset()
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    )
  }

  set position(value) {
    this.paddleElem.style.setProperty("--position", value)
  }

  rect() {
    return this.paddleElem.getBoundingClientRect()
  }

  reset() {
    this.position = 50
  }

  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
  }
}
