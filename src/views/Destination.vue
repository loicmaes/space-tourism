<template>
  <div class="dest">
    <h5 class="dest__title"><span>01</span> PICK YOUR DESTINATION</h5>

    <div class="dest__content">
      <div class="dest__content__planet">
        <img :src="'/assets/images/' + $route.params.dest + '.png'" alt="Moon" class="dest__content__planet__image" />
      </div>
      <div class="dest__content__details">
        <nav class="dest__content__details__nav">
          <router-link to="/destination/moon" class="dest__content__details__nav__link" active-class="selected">MOON</router-link>
          <router-link to="/destination/mars" class="dest__content__details__nav__link" active-class="selected">MARS</router-link>
          <router-link to="/destination/europa" class="dest__content__details__nav__link" active-class="selected">EUROPA</router-link>
          <router-link to="/destination/titan" class="dest__content__details__nav__link" active-class="selected">TITAN</router-link>
        </nav>

        <h2 class="dest__content__details__title">{{ $route.params.dest.toUpperCase() }}</h2>
        <p class="dest__content__details__description">{{ planets[$route.params.dest].description }}</p>
        <article class="dest__content__details__numbers">
          <div class="dest__content__details__numbers__box">
            <p class="dest__content__details__numbers__box__topic sub2">AVG. DISTANCE</p>
            <p class="dest__content__details__numbers__box__value sub1">{{ planets[$route.params.dest].distance }}</p>
          </div>
          <div class="dest__content__details__numbers__box">
            <p class="dest__content__details__numbers__box__topic sub2">EST. TRAVEL TIME</p>
            <p class="dest__content__details__numbers__box__value sub1">{{ planets[$route.params.dest].time }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Destination',
  data: () => ({
    planets: {
      moon: {
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 KM',
        time: '3 DAYS'
      },
      mars: {
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL. KM',
        time: '9 MONTHS'
      },
      europa: {
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 MIL. KM',
        time: '3 YEARS'
      },
      titan: {
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1,6 BIL. KM',
        time: '7 YEARS'
      }
    }
  })
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin';

.dest {
  width: 100%;
  height: 100vh;
  display: flex;
  grid-gap: 4rem;
  background-size: cover;
  flex-direction: column;
  padding: 0 17.5rem 7.5rem;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('/assets/images/destination-bg.jpg');

  &__title {
    display: flex;
    grid-gap: 1.75rem;
    align-items: center;

    > span {
      opacity: .25;
      font-weight: 700;
    }
  }

  &__content {
    display: flex;
    align-items: flex-end;

    &__planet {
      flex: 1 1 55%;
      display: flex;
      user-select: none;
      align-items: center;
      pointer-events: none;
      justify-content: center;
    }

    &__details {
      flex: 1 1 45%;
      padding: 1rem;

      &__nav {
        display: flex;
        grid-gap: 2.25rem;
        align-items: center;

        &__link {
          font-weight: 400;
          position: relative;
          padding-bottom: 1rem;
          letter-spacing: 2.7px;
          color: var(--higlight);
          font-family: 'Barlow Condensed', sans-serif;

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
              opacity: .5;
              transform: none;
            }
          }

          &.selected {
            color: var(--white);

            &::before {
              opacity: 1;
              transform: none;
            }
          }
        }
      }

      &__title {
        margin-top: 2.5rem;
      }

      &__description {
        line-height: 2em;
        margin-top: 1rem;
      }

      &__numbers {
        width: 100%;
        display: flex;
        grid-gap: 4rem;
        padding: 2rem 0 0;
        align-items: center;
        margin-top: 3.375rem;
        border-top: 1px solid #383B4B;

        &__box {
          display: flex;
          grid-gap: .75rem;
          flex-direction: column;

          &__topic {
            color: var(--higlight);
          }
        }
      }
    }
  }
}
</style>
