import { CakeComment, CakeImage, CakeViewHeader } from './index.styles';

import { ICake } from '../../models/cake';
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
    </>
);

export default CakeView;
