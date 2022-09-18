<template> 
    <q-layout view="hHh lpR lFr">
  
      <q-header class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Title
          </q-toolbar-title>
        </q-toolbar>
  
        <q-tabs align="left">
          <q-route-tab :to="{name: 'home'}" label="Contador Pinia" />
          <q-route-tab :to="{name: 'table'}" label="Datatable" /> 
        </q-tabs>
      </q-header>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
    </q-layout> 
    
  </template>