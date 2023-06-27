export const useToggle = () => {
  const toggle1 = ref(true);
  const sidebar = ref(true);;
  const modalToggle = () => {
    toggle1.value = !toggle.value
  }
  const toggle = computed(() => toggle1)
  return { toggle, modalToggle, sidebar };
};