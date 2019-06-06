<template>
<v-container id="fundo" fluid fill-height>
  <v-layout justify-center wrap >
    <v-flex xs12>
      <v-layout justify-center>
        <v-img max-width="200px" :src="require('@/assets/DWL.png')" alt="" />
      </v-layout>
    </v-flex>
    <v-flex xs6 width="500px" class="elevation-0" id="fundo2">
      <h1 class="text-xs-center font-weight-black font-italic" width="100%">Cadastrar-se</h1>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md12>
              <v-text-field class="font-weight-black font-italic" label="Nome de usuario*" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md12>

            </v-flex>
            <v-flex xs12>
              <v-text-field class="font-weight-black font-italic" label="E-mail*" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field class="font-weight-black font-italic" label="Senha*" type="Senha" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field class="font-weight-black font-italic" label="Confirme sua senha*" type="Senha" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>

            </v-flex>
            <v-flex xs12 sm6>
          
            </v-flex>
          </v-layout>
        </v-container>
        
        <small class="font-weight-black font-italic">*campo Obrigatório</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="blue darken-1" flat @click="dialog = false">continuar</v-btn>
      </v-card-actions>
    </v-flex>

  </v-layout>
</v-container>
</template>
<style>
  #fundo{
    background-image: url('~@/assets/skate.jpg');
    background-size:cover;
    opacity: 0,1;
}
#fundo2{
background-color:#aba89970;

}

</style>
