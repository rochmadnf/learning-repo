<template>
    <div class="mx-auto mt-5">
        <h1 class="text-2xl font-bold">
            Home
        </h1>

        <nav class="ml-8">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
                <li>
                    <Link href="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';

export default {
    components: { Link }
}
</script>
