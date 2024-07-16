<script setup lang="ts">
import { ref } from 'vue';

const val = ref('');
const wordsOfAdvice = ref<string[]>([]);

const oracleMessage = (): string => {
    const index = Math.floor(Math.random() * 3);

    return ['Your commit messages will be full of joy today!', 'Beware of black cats!', '42 represents all meaning of life'][index];
};

const getAdvice = (): void => {
    wordsOfAdvice.value.push(
        `Hi ${val.value ? val.value : 'unknown'}! This is my advice for you: ${oracleMessage()}`
    );

    val.value = '';
};
</script>

<template>
    <main class="container mt-3">
        <article class="section">
            <div class="column is-offset-one-third is-one-third card">
                <h1 class="title is-size-1">JavaScript Oracle 🔮</h1>
                <form @submit.prevent="getAdvice" class="mb-5">
                    <label for="name">Who are you?</label>
                    <input class="input mb-3 mt-1" type="text" id="name" v-model="val" />
                    <button class="button is-info" id="submit">
                        Get Advice 🔮
                    </button>
                </form>
                <ul class="is-size-5">
                    <li v-for="advice in wordsOfAdvice">{{advice}}</li>
                </ul>
            </div>
        </article>
    </main>
</template>

<style scoped></style>
