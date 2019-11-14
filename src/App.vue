<template>
  <div id="app">
    <header>
      <span class="title">Tic Tac Toe</span>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
html, body {
  height: 100%;
}
#app {
  width: 100%;
}
main {
  padding-top: 60px;
}
body.no-scroll {
  overflow: hidden;
  width: 100%;
  position: fixed;
}
header {
  padding: 0 16px;
  &.title {
    width: 52%;
  }
}

@media (min-width: 767px) {
  main {
      width: 483px;
      margin-left: auto;
      margin-right: auto;
  }
}
</style>
