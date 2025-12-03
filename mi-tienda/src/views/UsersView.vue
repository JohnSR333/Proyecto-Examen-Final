<template>
  <div class="d-flex">
    <SidebarComponent />
    <div class="flex-grow-1">
      <NavbarComponent />
      <div class="p-4" style="background-color: #f8f9fa; min-height: 90vh;">
        <router-view></router-view>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import SidebarComponent from '../components/UserModal.vue'
import NavbarComponent from '../components/Navbar.vue'
import FooterComponent from '../components/DeleteModal.vue'

export default {
  components: { SidebarComponent, NavbarComponent, FooterComponent }
}
</script>