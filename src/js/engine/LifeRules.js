class LifeRules {
   constructor(){
       this.name = "Conway";
       this.survival = [2, 3];
       this.birth = [3];

       this.weights = [
           [1, 1, 1], [1, 0, 1], [1, 1, 1]
       ];
   }
}

export default LifeRules;