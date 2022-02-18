import { Settings } from 'react-slick';

export interface ContentBannerProps {
    image: string;
    alt?: string;
    title?: string;
    countdown:CountDownProps
}

export interface CountDownProps {
    countdownUse: boolean;
    text?:string,
    dataInit?: string;
    dataFinish?: string;
}

export interface TimerProps {
    hours: number,
    minutes: number,
    seconds: number,
    days: number,
 }

export interface IBannerProps {
    sliderSettings?: Settings;
    contents: ContentBannerProps[];
};