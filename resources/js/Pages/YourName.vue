<script setup>
import { Head } from '@inertiajs/vue3';

defineProps({
    name: {
        type: String
    }
})
</script>

<template>
    <Head>
        <title>Your Name {{ name }}</title>
        <meta head-key="description" name="description" :content="`ini adalah konten dari deskripsi ${name}`" />
    </Head>

    <h1 class="text-lg">
        Hai, {{ name }}
    </h1>
</template>
