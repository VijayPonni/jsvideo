function makeclass(){
    class thermostate{
        constructor(temp){
            this._temp = 5/9 * (temp-32);

        
         }   
         get temperature(){
            return this._temp;

        }

        set temperature(updatedTemp){
            return this._temp = updatedTemp;

        }
    }



    return thermostate;
}

const thermostate = makeclass();

const thermos = new thermostate(76);

let temp = thermos.temperature;

thermos.temperature=26;

temp = thermos.temperature;
console.log(temp);