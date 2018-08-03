<template>
  <div>
    <PopupMessage />
    <PopupFeedback />
    <Header />
    <Banner />
  </div>
</template>

<script>
  import Banner from '@/components/base/Banner';
  import Header from '@/components/ofz/Header';
  import PopupFeedback from '@/components/base/PopupFeedback';
  import PopupMessage from '@/components/base/PopupMessage';

  export default {
    components: { Header,  Banner, PopupFeedback, PopupMessage }
  }
</script>
