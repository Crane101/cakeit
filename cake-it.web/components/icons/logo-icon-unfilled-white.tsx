import { IconSize } from './IconSize';

const LogoIconUnfilledWhite = ({ size = IconSize.normal }: { size?: IconSize }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={`${size}rem`}
        height={`${size}rem`}
        stroke="#fff"
        strokeWidth="20px"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
    >
        <title>{'cupcake'}</title>
        <path d="M422.84 205.8c-.12-1.22-.09-2.29-.26-3.56C407.15 86.73 328.23 103.78 274.6 85s-14.41-70.63-14.41-70.63C167.89-9.3 96.91 102 96.91 102s72.37 58.45 197.63 80.72c61.4 10.95 104.02 12.53 128.3 23.08z" />
        <path d="M391.38 488.94H108.62a39.35 39.35 0 01-38.31-30.37L27.32 275h445.36l-43 183.58a39.35 39.35 0 01-38.3 30.36z" />
        <path d="M172.9 275c-64.44-32.45-98.26-72.75-98.26-72.75C45.7 225.39 40.86 251.9 45.05 275z" />
        <path d="M173 275h269.71c19.63-85.07-28.92-71-148.17-92.23C169.28 160.49 96.91 102 96.91 102c-64 27.83-22.27 100.2-22.27 100.2S108.49 242.55 173 275z" />
        <path d="M111.01 276.01l25.56 212.93M202.87 276.01l8.86 212.93" />
        <path d="M388.99 276.01l-25.56 212.93M288.27 488.94l8.86-212.93" />
    </svg>
);

export default LogoIconUnfilledWhite;
