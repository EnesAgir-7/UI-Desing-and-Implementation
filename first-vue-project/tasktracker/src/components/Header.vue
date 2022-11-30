<template>
    <header>
        <div class="header">
            <h1>{{title}}</h1>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: String,
        },
    };
</script>

<style scope>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        flex-direction: column;
    }

    .header {
        display: flex;
        align-items: center;
    }
</style>