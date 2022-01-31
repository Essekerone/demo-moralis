import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import StatsPanel from "@/components/StatsPanel.vue";
import Popper from 'vue3-popper';
import VIntersection from "@/directives/VIntersection";

const app = createApp(App);
app.use(store).use(router).mount('#app');

app.component("StatsPanel", StatsPanel);
app.component("InventoryService");
app.component("Popper", Popper);

app.directive('intersection', VIntersection);