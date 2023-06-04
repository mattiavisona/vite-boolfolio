<script>

export default {
  name: 'AppAbout',
}

</script>

<template>
  <div>
    <h1>Chi sono?</h1>
    <div class="description">
      <p id="animation">mattia visonà</p> 
      <p id="animation">boolean</p> 
      <p id="animation">classe 88</p> 
    </div>
  </div>
</template>

<style>
  .description{
    display: flex;
    flex-direction: column;
    align-items: center;

    text-transform: uppercase;
    margin-top: 80px;
  }

  #animation:hover{
    font-size:80px;
    border: 5px solid rgb(72, 158, 32);
    border-radius: 15px;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;

    padding: 15px;
  }

  
</style>