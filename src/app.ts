class User {
    githubToken: string;
    jwtToken: string;
}

interface IAuthStrategy {
    auth(user: User): boolean;
}

class Auth {
    constructor(private strategy: IAuthStrategy) { }

    setStrategy(strategy: IAuthStrategy){
        this.strategy = strategy;
    }

    public authUser(user: User): boolean {
        return this.strategy.auth(user);
    }
}

class JWTStrategy implements IAuthStrategy {
    auth(user: User): boolean {
        if(user.jwtToken){
            return true;
        }
        return false;
    }

}
class GithubStrategy implements IAuthStrategy {
    auth(user: User): boolean {
        if(user.githubToken){
            return true;
        }
        return false;
    }

}

const user = new User();
user.jwtToken = 'token';

const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));
auth.setStrategy(new GithubStrategy());
console.log(auth.authUser(user));
