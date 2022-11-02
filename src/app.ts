class MyMap {
    private static instance: MyMap;
    map: Map<number, string> = new Map();

    private constructor(){ }

    clean() {
        this.map.clear()
    }

    public static get(): MyMap {
        if(!MyMap.instance){
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}

class Service1 {
    addMap(key: number, value: string): void {
        const myMap = MyMap.get();
        myMap.map.set(key, value);
    }
}
class Service2 {
    getKeys(key: number): void {
        const myMap = MyMap.get();
        console.log(myMap.map.get(key));
        myMap.clean();
        console.log(myMap.map.get(key));
    }
}

new Service1().addMap(2, 'string');

new Service2().getKeys(2);