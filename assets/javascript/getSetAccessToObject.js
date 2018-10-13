function makeClass() {
    class Thermostat {
      constructor(fTemp) {
        this.temp = fTemp
			}  
			
			get cTemp() {
				let C = 5/9 * (F - 32)
				return C
			}
    }

    return Thermostat
  }

  const Thermostat = makeClass()
  const thermos = new Thermostat(76) // setting in Fahrenheit scale
  let temp = thermos.temperature // 24.44 in C
  thermos.temperature = 26
  temp = thermos.temperature // 26 in C

	console.log(temp)