<template>
    <label class="container-checkbox">One
        <input type="radio" name="radio">
        <span class="checkmark"></span>
    </label>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .container-checkbox {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .container-checkbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
      border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */
    .container-checkbox:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .container-checkbox input:checked ~ .checkmark {
      background-color: #2196F3;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .container-checkbox input:checked ~ .checkmark:after {
      display: block;
    }

    .container-checkbox .checkmark:after {
      top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
</style>