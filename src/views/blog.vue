<style lang="scss">
    @import 'src/assets/styles.scss';
    @include body-styles();
</style>

<template>
    <div class="blog">
        <h1>
            {{title}}
        </h1>
    </div>
</template>
<script>
export default {
    name: 'blog',
    data () {
        return{
            title: 'blog'
        }
    }
}
</script>
