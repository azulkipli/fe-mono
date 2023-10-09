<template>
    <button>
        <slot></slot>
    </button>
</template>

<style  scoped>
button { 
    border: none;
    padding: 10px 20px;
    background: rgb(35, 35, 105);
    color: white;
    border-radius: 5px;
    /* some other stuff */
}
</style>