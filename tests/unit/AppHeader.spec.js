import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader";

describe('AppHeader', () => {

    test('Se o usuário não estiver logado, não aparece o botão de logout', () => {
        const wrapper = mount(AppHeader);
        expect(wrapper.find("button").isVisible()).toBe(false)
    })

    test('Se o usuário está logado, aparece o botão de logout', () => {
        const wrapper = mount(AppHeader);
        wrapper.setData({ loggedIn: true });
        expect(wrapper.find("button").isVisible()).toBe(true)
    })
})