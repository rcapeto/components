export interface BannerProps {
    image: string;
    alt?: string;
    url?: string;
    title?: string;
}

export interface CountDownProps {
    countdownUse?: true | false;
    dataInit?: string;
    dataFinish?: string;
}