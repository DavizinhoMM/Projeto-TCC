export default class LoginService{
    static Logar(email, senha){
        if(email == "terenciani@outlook.com" && senha=='123'){
            return true
        }else{
            return false
        }
    }
    static recuperarSenha(email){

    }
}