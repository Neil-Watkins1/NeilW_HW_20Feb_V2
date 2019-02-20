import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      startRate: null,
      endRate:null,
      amount:null,
      fromEuroAmount:null,
      toEuroAmount:null,
      rates: {},
      endAmount: null,
      fromEuroEndAmount: null,
      toEuroEndAmount: null
    },

    mounted(){
      this.getRates();
    },

    methods: {
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(rates => this.rates = rates)
      },

      rateSelect: function(){
        this.selectedRate = [this.selectedRate];
      },

      convertCurrency: function(){

        this.endAmount = (this.amount/this.rates.rates[this.startRate]*this.rates.rates[this.endRate]).toFixed(2);


      },

      convertFromEuro: function(){

        this.fromEuroEndAmount = (this.fromEuroAmount*this.rates.rates[this.endRate]).toFixed(2);


      },

      convertToEuro: function(){

        this.toEuroEndAmount = (this.toEuroAmount/this.rates.rates[this.startRate]).toFixed(2);

      }

    }

  });
})
