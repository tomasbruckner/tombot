export interface Menu {
  dish: Dish;
}

export interface Message {
  channel: string;
}

export interface Dish {
  name: string;
  price: string;
}

export interface SlackMenu {
  color: string;
  fallback: string;
  footer: string;
  text: string;
}

export interface SlackAttachment {
  color: string;
  title: string;
  title_link: string;
}
