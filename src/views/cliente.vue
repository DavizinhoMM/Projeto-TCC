<template>
    
    <v-container grid-list-xl>
      <v-layout
        wrap
        justify-space-between
      >
        <v-flex
          xs12
          md4
        >
          <v-form ref="form">
            <v-text-field
              v-model="model"
              :counter="max"
              :rules="rules"
              label="First name"
            ></v-text-field>
          </v-form>
        </v-flex>
  
        <v-flex
          xs12
          md6
        >
          <v-slider
            v-model="max"
            label="Max characters"
          >
          </v-slider>
  
          <v-checkbox
            v-model="allowSpaces"
            label="Allow spaces"
          ></v-checkbox>
  
          <v-text-field
            v-model="match"
            label="Value must match"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </template>