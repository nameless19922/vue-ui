import { hasOwn } from '@/common/utils';

export function dynamicMessage(component, opts) {
  this.$modal.show(
    component,
    opts, {
      adaptive: true,
      scrollable: true,
      classes: 'popup-message',
      maxWidth: 1024,
      width: '90%',
      height: 'auto'
  });
}