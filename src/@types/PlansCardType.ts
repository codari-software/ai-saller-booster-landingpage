export interface PlansCardType {
    title: string;
    price: number;
    features: string[];
    button: string;
    type: "normal" | "highlighted";
    children: React.ReactNode;
    textColor?: string;
    buttonType?: "normal" | "background";
}