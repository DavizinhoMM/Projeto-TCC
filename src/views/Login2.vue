<template>
  
    <div>
       Dwl
    </div>
</template>
<script>
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
                
                if(this.email == "terenciani@outlook.com" && this.senha=='123'){
                    this.mensagem = "Login autorizado"
                    this.cor = "success"
                    this.alert = true
                }else{
                    this.mensagem = "Não esta autorizado"
                    this.cor = "error"
                    this.alert = true
                }
            }
        }
    }
</script>
<style scoped>
    .layout{
        background-image: url('https://s.profissionaisti.com.br/wp-content/uploads/2018/11/seguranca-dados-dois-fatores-2FA-autenticacao.jpg');
        
    }
</style>
