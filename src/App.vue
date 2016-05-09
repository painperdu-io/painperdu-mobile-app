<template>
  <header-bar></header-bar>
  <div class="wrap">
    <router-view></router-view>
  </div>
  <footer-bar></footer-bar>
</template>

<script>
import HeaderBar from './components/commons/HeaderBar'
import FooterBar from './components/commons/FooterBar'
import NavigationBar from './components/commons/NavigationBar'

export default {
  components: {
    HeaderBar,
    FooterBar,
    NavigationBar,
  }
}
</script>

<style>
body {
  margin: 0;
  background: #ff4743;
  font-size: 10px;
}

.wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #ffffff;
  overflow: hidden;
}

@font-face {
  font-family: 'Avenir-Book';
  src: url('/static/fonts/Avenir-Book.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Avenir-Book.woff') format('woff'),
    url('/static/fonts/Avenir-Book.ttf')  format('truetype'),
    url('/static/fonts/Avenir-Book.svg#Avenir-Book') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Baskerville-Bold';
  src: url('/static/fonts/Baskerville-Bold.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Baskerville-Bold.woff') format('woff'),
    url('/static/fonts/Baskerville-Bold.ttf')  format('truetype'),
    url('/static/fonts/Baskerville-Bold.svg#Baskerville-Bold') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Karla-Bold';
  src: url('/static/fonts/Karla-Bold.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Karla-Bold.woff') format('woff'),
    url('/static/fonts/Karla-Bold.ttf')  format('truetype'),
    url('/static/fonts/Karla-Bold.svg#Karla-Bold') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Karla-BoldItalic';
  src: url('/static/fonts/Karla-BoldItalic.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Karla-BoldItalic.woff') format('woff'),
    url('/static/fonts/Karla-BoldItalic.ttf')  format('truetype'),
    url('/static/fonts/Karla-BoldItalic.svg#Karla-BoldItalic') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Karla-Italic';
  src: url('/static/fonts/Karla-Italic.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Karla-Italic.woff') format('woff'),
    url('/static/fonts/Karla-Italic.ttf')  format('truetype'),
    url('/static/fonts/Karla-Italic.svg#Karla-Italic') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Karla-Regular';
  src: url('/static/fonts/Karla-Regular.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Karla-Regular.woff') format('woff'),
    url('/static/fonts/Karla-Regular.ttf')  format('truetype'),
    url('/static/fonts/Karla-Regular.svg#Karla-Regular') format('svg');
  font-weight: normal;
  font-style: normal;
}
</style>
