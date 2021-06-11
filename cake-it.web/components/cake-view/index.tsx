import { BackButton, CakeComment, CakeImage, CakeViewHeader } from './index.styles';

import { Button } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { ICake } from '../../models/cake';
import Link from 'next/link';
import YumFactor from '../yum-factor';

interface ICakeViewProps {
    cake: ICake;
}

const CakeView = ({ cake }: ICakeViewProps) => (
    <>

        <CakeViewHeader>
            <h2>{cake.name}</h2>
            <YumFactor value={cake.yumFactor} />
        </CakeViewHeader>

        <CakeImage src={cake.imageUrl} />

        <CakeComment>{cake.comment}</CakeComment>

        <Link href="/" passHref>
            <BackButton variant="outlined" aria-label="Back to cakes list" startIcon={<ChevronLeft />}>
                Back to The Cakes
            </BackButton>
        </Link>
    </>
);

export default CakeView;
