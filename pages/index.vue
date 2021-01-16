<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <p class="title">
            TestList
          </p>
          <button class="cart">
            <IconCart />
          </button>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <div class="top">
          <h1 class="title">
            Каталог
          </h1>
          <section class="sort">
            <p>Сортировать по:</p>
          </section>
        </div>
        <nav>
          <p>Рюкзаки</p>
          <p>Футболки</p>
          <p>Рубашки</p>
        </nav>
        <CatalogueList count="20" />
      </div>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  width: 100%;
  padding-left: 88px;
  padding-right: 88px;
}

.header {
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0 0 8px 8px;
}

.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top {
  display: flex;
  align-items: baseline;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 22px;
  color: #35495e;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
