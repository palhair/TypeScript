class UserService {
    //static name: string = 'sdfs'; статик нейм зарезервирован
    private static db: any;

    static  getUser(id: number){
        return UserService.db.findById(id);
    }

    create() {
        //...
        UserService.db
    }
    static {
        UserService.db = 'sfcf'
    }
}

UserService.getUser(1);
const inst = new UserService(1);
inst.create();