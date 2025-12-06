import { ReactNode } from "react";

export interface TutorialCardType {
    step: number;
    title: string;
    children: ReactNode;
}