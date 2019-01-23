<style lang="scss">
    @import 'src/assets/styles.scss';
    @include body-styles();
</style>

<template>
    <div class="projects">
        <h1>
            {{title}}
        </h1>
    </div>
</template>
<script>
export default {
    name: 'projects',
    data () {
        return{
            title: 'projects'
        }
    }
}
</script>