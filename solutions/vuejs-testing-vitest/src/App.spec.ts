import {describe, expect, it} from 'vitest';
import {shallowMount} from '@vue/test-utils';
import type {VueWrapper} from '@vue/test-utils';
import App from './App.vue';

let wrapper: VueWrapper;

describe('App.vue', async () => {
    it('Get a personalized advice', async () => {
        wrapper = shallowMount(App);

        const input = await wrapper.get('[data-test="input"]');
        input.setValue('Alice');

        await wrapper.get('[data-test="getAdvice"]').trigger('submit');

        let results = await wrapper.findAll('[data-test="results"] > li');
        expect(results.length).toBe(1);
        expect(results[0].text().includes('Alice')).toBeTruthy();
    });
});
