<template>
  <header class="header">
    <img src="/assets/icons/star.svg" alt="Icon" class="header__icon" />
    <nav class="header__menu">
      <router-link to="/" class="header__menu__link nav-txt" exact-active-class="active"><span>00</span> HOME</router-link>
      <router-link to="/destination" class="header__menu__link nav-txt" active-class="active"><span>01</span> DESTINATION</router-link>
      <router-link to="/crew" class="header__menu__link nav-txt" active-class="active"><span>02</span> CREW</router-link>
      <router-link to="/technology" class="header__menu__link nav-txt" active-class="active"><span>03</span> TECHNOLOGY</router-link>
    </nav>
  </header>

  <router-view />
</template>

<style lang="scss">
@import './assets/styles/mixin';
@import './assets/styles/fonts';
@import './assets/styles/reset';
@import './assets/styles/globals';
@import './assets/styles/variables';

body {
  background-color: var(--main);
}

#app {
  width: 100%;
  min-height: 100vh;
  color: var(--white);
  @include bp-down("large") { display: none }
}


.header {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  position: fixed;
  align-items: center;
  padding: 2.5rem 0 0 3.4375rem;
  justify-content: space-between;

  &::before {
    z-index: 3;
    content: '';
    height: 1px;
    opacity: .25;
    flex: 1 1 auto;
    position: relative;
    transform: translateX(2rem);
    background-color: var(--white);
  }

  &__icon {
    order: -1;
    margin-right: 2rem;
  }

  &__menu {
    z-index: 2;
    height: 6rem;
    display: flex;
    grid-gap: 3rem;
    overflow: hidden;
    position: relative;
    align-items: center;
    padding: 0 10.625rem 0 7.75rem;

    @include bp-down("medium") {
      padding: 0 3rem;
    }

    &::before {
      top: 0;
      left: 0;
      content: '';
      z-index: -1;
      width: 100%;
      height: 100%;
      position: absolute;
      backdrop-filter: blur(81.5485px); // TODO: Fix the background blur!
      background: rgba(255, 255, 255, 0.04);
      //background: rgba(255, 255, 255, 0.5);
    }

    &__link {
      > span {
        font-weight: 700;
        @include bp-down("medium") {
          display: none;
        }
      }
      height: 100%;
      display: flex;
      grid-gap: 1ch;
      position: relative;
      color: var(--white);
      align-items: center;

      &::before {
        left: 0;
        bottom: 0;
        opacity: 0;
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        background-color: var(--white);
        transition: opacity 150ms ease, transform 250ms ease;
      }

      &:hover {
        &::before {
          opacity: .6;
          transform: none;
        }
      }

      &.active {
        &::before {
          opacity: 1;
          transform: none;
        }
      }
    }
  }
}
</style>
