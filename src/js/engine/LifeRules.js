class LifeRules {
   constructor(){
       this.minPop = 2;
       this.maxPop = 3;

       this.weights = [
           [1, 1, 1], [1, 0, 1], [1, 1, 1]
       ];
   }
}

export default LifeRules;