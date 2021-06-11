import { HeaderBar } from './index.styles';
import { IconSize } from '../icons/IconSize';
import Link from 'next/link';
import LogoIconColour from '../icons/logo-icon-colour';

const CakeItHeader = () => (
    <HeaderBar>
        <Link href="/">
            <a>
                <LogoIconColour size={IconSize.large} />
                <h1>Cake It!</h1>
            </a>
        </Link>
    </HeaderBar>
);

export default CakeItHeader;
