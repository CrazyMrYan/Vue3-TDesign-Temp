<template>
  <div class="dashboard">
    <Sidebar />
    <div class="main-container">
      <Header />
      <!-- <StorageInfo />
      <DataCards />
      <Contacts />
      <InviteMember /> -->
      <div class="router-view--container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'LayoutComponent'
})
import Sidebar from './components/layout-sidebar.vue'
import Header from './components/layout-header.vue'
// import StorageInfo from './components/layout-storage-info.vue'
// import DataCards from './components/layout-data-cards.vue'
// import Contacts from './components/layout-contacts.vue'
// import InviteMember from './components/layout-Invite-member.vue'
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100%;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
}
.router-view--container {
  padding: 20px;
  background-color: #f7f7f7;
  width: 100%;
  height: 100%;
}
</style>
