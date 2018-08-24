<template>
  <div>
    <PopupFeedback />
    <Header />
    <Banner
      image="/images/ofz/masthead.jpg"
      height="450"
      position="bottom left"
    />
    <Ofz />
    <Footer>
      <p>ООО «Компания БКС» лицензия №154-04434-100000 от&nbsp;10.01.2001 на&nbsp;осуществление брокерской деятельности. Выдана ФСФР. Без&nbsp;ограничения срока действия.</p>
      <p>1.&nbsp;Министерство финансов Российской Федерации, облигация федерального займа, номер государственной регистрации 29011RMFS от&nbsp;21.01.2015, дата погашения&nbsp;– 29.01.2020. Периодичность выплат&nbsp;– 2 раза в год. Размер купона&nbsp;– 10,43% годовых в&nbsp;рублях.</p>
      <p>2.&nbsp;Налоговый вычет по&nbsp;налогу на&nbsp;доход физических лиц (НДФЛ) на&nbsp;внесенные денежные средства на&nbsp;индивидуальный инвестиционный счет. Налоговый вычет предоставляется Федеральной налоговой службой России по&nbsp;окончании налогового периода, только физическим лицам налоговым резидентам РФ, получающим доход, облагаемый НДФЛ (ст.219.1 Налогового кодекса РФ), минимальный срок инвестирования&nbsp;- 3 года.</p>
    </Footer>
  </div>
</template>

<script>
  import importDir from '@/assets/js/utils/import-dir';

  export default {
    components: {
      ...importDir('ofz', ['Header', 'Ofz']),
      ...importDir('base', ['Banner', 'PopupFeedback', 'Footer'])
    }
  }
</script>

<style lang="stylus">
  .layout__container
    max-width 1250px
</style>
