import { shallowMount } from "@vue/test-utils";
import AddProject from "../../src/views/AddProject.vue";

describe("MyComponent", () => {
  test("checkbox toggles isChecked data property", async () => {
    const wrapper = shallowMount(AddProject, {
      data() {
        return {
          isChecked: false,
        };
      },
    });
    // Check initial value of isChecked
    expect(wrapper.vm.isChecked).toBe(false);

    // Click checkbox
    wrapper.find('input[type="checkbox"]').setChecked();

    // Check that isChecked has been toggled
    expect(wrapper.vm.isChecked).toBe(true);
  });

  test("checkbox toggles isChecked data property is set to false", async () => {
    const wrapper = shallowMount(AddProject, {
      data() {
        return {
          isChecked: false,
        };
      },
    });
    // Check that isChecked has been toggled
    expect(wrapper.vm.isChecked).toBe(false);
  });
});
