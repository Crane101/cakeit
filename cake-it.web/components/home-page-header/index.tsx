import { Button } from '@material-ui/core';
import { HeaderWrapper } from './index.styles';
import Link from 'next/link';

const HomePageHeader = () => (
    <HeaderWrapper>
        <h2>The Cakes...</h2>

        <Link href="/new-cake" passHref>
            <Button color="primary" variant="contained" aria-label="Add a new Cake">
                Submit a Cake
            </Button>
        </Link>
    </HeaderWrapper>
);

export default HomePageHeader;
