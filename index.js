 new Vue({
    el:'#app',

    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false

    },
    methods: {    

        attackPlayer(event){
            this.playerHealth = this.playerHealth - Math.floor(Math.random() * 12) + 1;
            this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 12) + 1;
        }
    }
    
   });