new Vue({
    el: "#app",

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false,
        turns: [




        ]
    },
    methods: {
        attackPlayer(event) {
            var playerDamage = Math.max(Math.floor(Math.random() * 12) + 1, 3);
            this.monsterHealth = this.monsterHealth - playerDamage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player does monster ' + playerDamage + " damage "

            });

            this.monsterAttack();

        },
        specialAttack(event) {
            var playerDamage = Math.max(Math.floor(Math.random() * 20) + 1, 10);
            this.monsterHealth = this.monsterHealth - playerDamage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player does monster ' + playerDamage + " damage "

            });

            this.monsterAttack();
        },
        monsterAttack() {
            var monsterDamage = Math.max(Math.floor(Math.random() * 15) + 1, 3);
            this.playerHealth = this.playerHealth - monsterDamage;

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster does Player ' + monsterDamage + " damage "

            });

            this.checkWin();

        },
        startGame() {
            this.gameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns.length = 0;
        },
        heal() {


            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + 10 + " HP "

            });

            this.monsterAttack();


        },
        giveUp() {

            this.gameRunning = false;
        },

        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm("You won! New Game?")) {
                    this.startGame();
                } else {
                    this.gameRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! New Game?")) {
                    this.startGame();
                } else {
                    this.gameRunning = false;
                }
                return true;
            }
            return false;
        },


    }
});
