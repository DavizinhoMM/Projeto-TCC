<template>
    <v-layout justify-center align-center fill-height wrap>
        <v-flex xs12>
            <v-alert
                v-model="alert"
                dismissible
                :type="cor"
            >
                {{mensagem}}
            </v-alert>
        </v-flex>
        <v-flex xs12 sm4 md3 lg3>
            
            <v-card>
                <v-img
                    src="http://www.dwl.fi/wp-content/uploads/2015/05/cropped-dwl_logo.png"
                    aspect-ratio="2.75"
                >              
                </v-img>
                <v-card-title>
                    <v-text-field 
                        label="E-mail" 
                        type="email"
                        v-model="email"
                    ></v-text-field>
                    <v-text-field 
                        label="Senha"
                        type="password"
                        v-model="senha"
                    ></v-text-field>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat block color="blue" @click="realizarLogin">Logar</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
     import LoginService from'../service/LoginService.js'
    export default{
        data(){
            return{
                alert: false,
                cor: "",
                email: "",
                mensagem: "",
                senha: ""
            }
        },
        methods:{
            realizarLogin(){
               let retorno = LoginService.logar(this.email, this.senha)
                if(retorno == true){
                    this.cor    ="success"
                    this.mensagem = "Login altorizado!"
                    this.alert  = true
                }else{
                    this.cor = "error"
                    this.mensagem = "Não esta autorizado"
                    this.alert = true
                }
            }
        }
    }
</script>
<style>
    .layout{
        background-image: url('https://blog.meuqua');
        width: 100%;
        height: 100%;
        margin: 0;
        padding:0;
    }
</style>