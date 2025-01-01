import { ReactNode } from "react";

export type ImageT = {
    src: string;
    alt: string;
};

export type TitleDescriptionT = {
    title: string | ReactNode;
    description: string | ReactNode;
};
