import { HeaderBar } from './index.styles';
import { IconSize } from '../icons/IconSize';
import LogoIconColour from '../icons/logo-icon-colour';

const CakeItHeader = () => (
    <HeaderBar>
        <LogoIconColour size={IconSize.large} />
        <h1>Cake It!</h1>
    </HeaderBar>
);

export default CakeItHeader;
