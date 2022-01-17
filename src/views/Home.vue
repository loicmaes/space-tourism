<template>
  <div class="home">
    <div class="home__texts">
      <h5 class="home__texts__sub">SO, YOU WANT TO TRAVEL TO</h5>
      <h1 class="home__texts__headline">SPACE</h1>
      <p class="home__texts__description">Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out
        of this world experience!</p>
    </div>
    <h4 class="home__more" @click="$router.push('/destination/moon')">EXPLORE</h4>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin';

.home {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: flex-end;
  background-size: cover;
  padding: 0 0 8.125rem;
  align-content: flex-end;
  background-repeat: no-repeat;
  justify-content: space-around;
  background-position: center center;
  background-image: url('/assets/images/home-bg.jpg');

  &__texts {
    display: flex;
    grid-gap: 1.5rem;
    max-width: 30rem;
    flex-direction: column;

    &__description, &__sub { color: var(--higlight) }

    &__description {
      line-height: 2rem;
      font-size: 1.125rem;
      @include bp-down("medium") { text-align: center }
    }
  }

  &__more {
    z-index: 1;
    display: flex;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    width: 17.1875rem;
    height: 17.1875rem;
    border-radius: 50%;
    color: var(--main);
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--white);

    &::before {
      top: 0;
      left: 0;
      z-index: -1;
      content: '';
      width: 100%;
      height: 100%;
      opacity: .1036;
      position: absolute;
      border-radius: 50%;
      background-color: var(--white);
      transition: transform 250ms ease;
    }

    &:hover::before {
      transform: scale(1.64);
    }
  }
}
</style>
