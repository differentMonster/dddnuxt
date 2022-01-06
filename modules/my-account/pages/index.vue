<template>
    <div>
        <h1>Modules My Account</h1>
        <Login />
        <br />
        <Register />
        <div v-for="user in users" :key="user.id">
            {{ user }}
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    export default {
        name: 'my-account',
        computed: {
            ...mapState('my-account', ['users'])
        },
        mounted() {
            console.warn("user store access")
        }
    }
</script>

<style>

</style>