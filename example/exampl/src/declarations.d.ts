import { ButtonProps } from "@ignite-analytics/ui-kit";

type CustomEvents<K extends string> = { [key in K] : (event: CustomEvent) => void };
type CustomElement<T, K extends string = ''> = Partial<T & { children: any } & CustomEvents<`on${K}`>>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-button': CustomElement<ButtonProps, 'closeChange'>;
    }
  }
}