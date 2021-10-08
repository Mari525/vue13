<template>
	<v-container fluid>
      <v-app-bar
      color="deep-purple"
      class="d-flex"
      dark
      >
        <v-img
          src="../assets/logo.svg"
          height="40"
          width="40"
        >
        </v-img>

        <v-btn class="ml-9" outlined>
          <router-link to="/" class="router-link">Главная</router-link>
        </v-btn>
        <v-btn class="ml-9" outlined>
          <router-link to="/news" class="router-link">Новости</router-link>
        </v-btn>
        <v-btn class="ml-9 mr-16" outlined>
          <router-link to="/gallery" class="router-link">Галерея</router-link>
        </v-btn>

        <v-text-field
          label="Поиск"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-icon>mdi-search-web</v-icon>
      </v-app-bar>
    </v-container>
</template>

<style scoped>
  .router-link {
    text-decoration: none;
    color: white;
  }
</style>
