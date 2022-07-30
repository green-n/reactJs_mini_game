

export default  class character{
    constructor(){
        this.age = 14;
        this.luck = 5
        this.sternth = 1
        this.acuracy = 1
        this.farm_skills = 1
        this.inteligance = 1
        this.health = 100
        this.name = "john doe"

    }

    // constructor(name, age, luck, sternth, acuracy, farm_skills, integence, haelth ){
    //     this.age = age;
    //     this.luck = luck
    //     this.sternth = sternth
    //     this.acuracy = acuracy
    //     this.farm_skills = farm_skills
    //     this.integence = integence
    //     this.haelth = haelth
    //     this.name = name
    // }

     data(){
        return {
            age: this.age,
            luck: this.luck,
            sternth: this.sternth,
            acuracy: this.acuracy,
            farm_skills: this.farm_skills,
            inteligance: this.inteligance,
            health: this.health,
            name: this.name
        }
    }

    setName(val){
        this.name = val;
    }
}

