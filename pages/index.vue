<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Free" icon="github-circle">
        Open source on
        <a href="https://github.com/buefy/buefy">GitHub</a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey">Every</b>
        component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with
        <a href="https://vuejs.org/">Vue.js</a>
        and
        <a href="http://bulma.io/">Bulma</a>
      </card>

      <div class="text-primary">반갑습니다</div>
      <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div class="ml-6 pt-1">
          <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
          <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
        </div>
      </div>

      <card title="Lightweight" icon="arrange-bring-to-front">No other internal dependency</card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
