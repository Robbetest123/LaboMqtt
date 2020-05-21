const { Gpio } = require('onoff')
const shell = require('shelljs')

class GPIO {
    constructor() {
        //console.log('GPIO helper created!')
        this.relais = new Gpio(23, 'out')
        this.mypin = new Gpio(17, 'in','both')
        /** 3 inputs */
        this.inputs = []
        //this.inputs.push(new Gpio(17, 'in'))
        this.inputs.push(new Gpio(27, 'in'))
        this.inputs.push(new Gpio(22, 'in'))
    }
    
    relaisOn() {
        this.relais.writeSync(0)
    }

    relaisOff() {
        this.relais.writeSync(1)
    }
   

    readInputs() {
         const result = []
        this.inputs.forEach((el, index) => {
            result.push({ index, value: el.readSync() })
        })
        
        return result
    }

}

exports.default = new GPIO()