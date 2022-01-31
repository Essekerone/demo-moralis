<template>
  <img class="logo" src="../assets/logo.png">
  <div v-if="ethAddress && !loseStatus">
    <div class="battle-ground">
      <div>
      <h1>{{ this.ethAddress }}</h1>
        <p>Your record: {{ playerRecord }} </p>
        <p>Your points: {{ this.player.points }}</p>
        <button :disabled="player.block === 3 || (player.attack === 3 && !player.activeSpell)" class="ready-button" v-on:click="round()">Play</button>
        <div class="battle-box">
          <PlayerBox :player="player"/>
          <fight-logs :messages="messages"/>
          <EnemyBox :bot="bot"/>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="ethAddress && loseStatus">
    <h1>You lose</h1>
    <div v-if="player.points > playerRecord">
      <p>Do you wanna write your record to blockchain history?</p>

      <button class="ready-button" v-on:click="saveRecord()">SAVE</button>
    </div>
    <div v-else>
      <button class="ready-button" v-on:click="reRender()">PLAY</button>
    </div>
  </div>
  <div v-else>
    <LoginButton/>
    <img class="" src="../assets/background.jpg">
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DefaultPerson from "@/classes/DefaultPerson";
import {mapState} from 'vuex';
import PlayerBox from "@/components/PlayerBox.vue";
import FightLogs from "@/components/FightLogs.vue";
import EnemyBox from "@/components/EnemyBox.vue";
import DefaultBot from "@/classes/bots/DefaultBot";
import LoginButton from "@/components/LoginButton.vue";
import Moralis from "@/initMoralis";
import RecordListABI from "@/contractsABI/RecordListABI";

export default defineComponent({
  name: "BattleGround",
  components: {LoginButton, EnemyBox, FightLogs, PlayerBox},
  props: {},
  data() {
    return {
      player: new DefaultPerson(1, this.$store.state.ethAddress, null),
      bot: new DefaultBot(1, "Bot", null),
      messages: [],
      loseStatus: false,
      finishedFights: 0,
      renderComponent: true,
    }
  },
  methods: {
    round(): void {
      let resultPlayer;
      let resultEnemy;

      this.player.name = this.account.get('name');

      this.bot.setRandomActions();
      if(this.player.activeSpell) {
        resultPlayer = this.player.useSpell(this.bot, false);
      } else {
        resultPlayer = this.player.makeHit(this.bot, false);
      }
      if(this.bot.activeSpell) {
        resultEnemy = this.bot.useSpell(this.player, true);
      } else {
        resultEnemy = this.bot.makeHit(this.player, true);
      }
      this.player.updateStatus();
      this.bot.updateStatus();

      if (this.player.isDead) {
        this.loseStatus = true;
      } else {
        if(this.bot.isDead) {
          this.player.getExperienceFromEnemy(this.bot);
          this.player.heal(50);
          ++this.finishedFights;
          this.bot = new DefaultBot(this.finishedFights + 1,`Bot${this.finishedFights + 1}`, null);
          if(this.player.experience >= this.player.maxExperience){
            this.player.levelUp();
          }
        }
      }

      let radios = document.getElementsByClassName('action-radio');
      for(let i=0; i<radios.length; i++ ) {
        //@ts-ignore
        radios[i].checked = false;
      }

      this.player.roundCooldownSpells();
      this.bot.roundCooldownSpells();
      this.messages.unshift({resultEnemy, resultPlayer});
    },
    setUserName(name: string): void {
      this.player.name = name;
    },
    reRender(): void {
      location.reload();
    },
    saveRecord(): void {
      const options = {
        contractAddress: "0x6aeaC2C3A99b93de6357620a0c1fE15cbDC7Ef26",
        functionName: "addRecord",
        abi: RecordListABI,
        params: {
          points: this.player.points,
        }
      };

      Moralis.Web3.enableWeb3().then(() => {
        Moralis.Web3.executeFunction(options).then((res) => {
          console.log(res.status);
          if (res.status === true) {
            this.reRender();

          }
        });
      })
    }
  },
  created: function () {
    this.bot.name = "Bot";

  },
  computed: mapState([
    'ethAddress',
    'account',
      'playerRecord'
  ])
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.battle-ground {
  background: white;
  border: 7px solid;
  border-image-source: linear-gradient(to left, #743ad5, #2f292f);
  border-image-slice: 1;
  padding: 0 50px 100px;
  margin: 0 100px;
}
a {
  color: #42b983;
}
.battle-box {
  display: flex;
  justify-content: space-around;
}

.ready-button {
  background-image: linear-gradient(-180deg, #37AEE2 0%, #1ec846 100%);
  border-radius: 6px;
  width: 100px;
  margin-top: 10px;
  height: 50px;
  box-sizing: border-box;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.ready-button:hover {
  background-image: linear-gradient(-180deg, #1dc9a1 0%, #17759C 100%);
}

.ready-button:disabled {
  color: gray;
  background-image: linear-gradient(-180deg, #1dc9a1 0%, #17759C 50%);
}

.logo {
  width: 100px;
  height: 100px;
}

</style>
