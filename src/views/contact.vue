<style lang="scss">
    @import 'src/assets/styles.scss';
    @include body-styles();
</style>

<template>
    <div class="contact">
        <h1>
            {{title}}
        </h1>
    </div>
</template>
<script>
export default {
    name: 'contact',
    data () {
        return{
            title: 'contact'
        }
    }
}
</script>