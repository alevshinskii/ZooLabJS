class ZooApp{
    #zoos=[]

    getZoos(){
        return this.#zoos
    }

    addZoo(zoo){
        this.#zoos.push(zoo)
    }
}