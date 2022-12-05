<template>
  <div class="d-flex justify-content-center align-items-center h-100 my-4 py-4">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: #ff3d00 transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>