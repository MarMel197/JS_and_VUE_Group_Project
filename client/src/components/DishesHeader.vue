<template>
  <h2>{{title}}</h2>

</template>

<script>
export default {
  name: "dishes-header",
  props: ["title"]
};
</script>

<style scoped>

h2 {
    width: 100%;
    font-family: 'Schoolbell', cursive;
    padding: 70px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 60px;
    background-color: rgb(78, 112, 184);
    margin: 0px;
}
</style>