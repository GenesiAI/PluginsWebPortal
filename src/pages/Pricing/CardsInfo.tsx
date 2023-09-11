export type CardType = {
  isAdvised: boolean;
  title: string;
  description: string;
  cost: string;
  buttonText: string;
  feats: string[];
  action: "LOGIN" | "BUY" | "CONTACT";
};

export const CardsInfo: CardType[] = [
  {
    isAdvised: false,
    title: "FREE",
    description: "Experience the power of AI with your first plugin",
    cost: "0",
    feats: [
      "Create 1 custom ChatGPT Plugin",
      "Access to basic functionalities",
      ""
    ],
    buttonText: "Join NOW",
    action: "LOGIN"
  },
  {
    isAdvised: true,
    title: "PREMIUM",
    description: "Unleash the potential of AI and step into the future",
    cost: "19.90",
    feats: [
      "Enjoy faster response times",
      "Develop up to 3 custom ChatGPT Plugins",
      ""
    ],
    buttonText: "Buy NOW",
    action: "BUY"
  },
  {
    isAdvised: false,
    title: "BUSINESS",
    description: "Customize your AI experience to suit your business needs",
    cost: "CUSTOM PRICE",
    feats: [
      "Unlimited custom ChatGPT Plugins",
      "Customizable features to suit your business",
      "Dedicated customer support"
    ],
    buttonText: "Contact Us",
    action: "CONTACT"
  }
];
