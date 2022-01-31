<script>
import Item from "@/classes/Sword/Item";
import ItemAttributes from "@/components/ItemAttributes";
import ItemDefault from "@/components/Items/ItemDefault"
import {mapState} from "vuex";


export default {
  extends: {ItemDefault},
  components: {ItemAttributes},
  props: {
    item: {
      type: Item
    }
  },
  mounted() {
  },
  computed: mapState([
     'account'
  ]),
  name: "ItemDefault"
}
</script>

<style>
.sword-box {
  border: solid 1px rgb(102, 103, 171);
  padding: 10px;
  margin: 5px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  position: relative;
  background: white;
}
.eth-box__ico {
  width: 20px;
  height: 20px;
  padding-bottom: 5px;
  vertical-align: middle;
}
.accept-icon {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  height: 15px;
  width: 15px;
  background-color: chartreuse;
  position:absolute;
  top:5px;
  left:5px;
}
</style>