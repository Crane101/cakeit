import LogoIconColour from '../icons/logo-icon-colour';
import LogoIconUnfilled from '../icons/logo-icon-unfilled';

interface IYumFactorProps {
    value: number;
    maxValue?: Number;
    readonly?: Boolean;
    setValue?: ((newValue: number) => void);
}

const YumFactor = ({ value, setValue, readonly, maxValue = 5 }: IYumFactorProps) => {
    const IconOnClickHandler = (yumFactor: number) => {
        if (!readonly && setValue) {
            setValue(yumFactor);
        }
    };

    const yumFactorIcons = new Array(maxValue).fill(0).map((_, index: number) => (
        <span key={index} onClick={() => IconOnClickHandler(index + 1)}>
            {index + 1 <= value ? <LogoIconColour /> : <LogoIconUnfilled />}
        </span>
    ));

    return <div>{yumFactorIcons}</div>;
};

export default YumFactor;
