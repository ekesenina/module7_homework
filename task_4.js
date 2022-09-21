function Availability(name){
    this.indicator = 'off',
    this.name = name
  }
  
    
  function wattsAmount(name, watt){
    this.name = name,
    this.watt = watt
  }
  
  
  
  wattsAmount.prototype.indicator = function(watt){
    this.watt = watt
    if(watt > 0){
      this.indicator = 'on'
    }else{
      this.indicator = 'off'
    }
  }
  
  const computer = new wattsAmount('computer')
  const lamp = new wattsAmount('lamp')
  const hoover = new wattsAmount('hoover')
  
  computer.indicator(65)
  console.log(computer)
  lamp.indicator(0)
  console.log(lamp)
  hoover.indicator(25)
  console.log(hoover)

