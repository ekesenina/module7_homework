class Availability{
    constructor(name){
      this.name = name;
      this.indicator = 'on' || 'off';
    }
  }
    
    class wattsAmount extends Availability{
      constructor(name, watt){
        super(name);
        this.watt = watt;
      }  
      getInfo(){
      if(this.watt > 0){
        this.indicator = 'on'
      }else{
        this.indicator = 'off'
      }
    }
    }
    

    const computer = new wattsAmount('computer', 65)
    const lamp = new wattsAmount('lamp', 0)
    const hoover = new wattsAmount('hoover', 25)
    
    
    computer.getInfo()
    console.log(computer)
    lamp.getInfo()
    console.log(lamp)
    hoover.getInfo()
    console.log(hoover)