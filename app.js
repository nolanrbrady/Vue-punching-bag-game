new Vue({
  el: '#vue-app',
  data:{
    title: 'Punching Bag Game',
    hits: 0,
    health: 100,
    ended: false,
  },
  methods:{
    hit: function(){
      this.hits++;
      this.health -= 10;
      if (this.health <= 0){
        this.ended = true;
      }
    },
    refresh: function(){
      this.hits = 0;
      this.health = 100;
      this.ended = false;
    }
  }
});
