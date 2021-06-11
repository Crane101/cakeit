import { CakeImage, CakeName, ListItemWrapper } from './index.styles';

import { ICake } from '../../../models/cake';
import Link from 'next/link';

interface ICakeListItemProps {
    cake: ICake;
}

const CakeListItem = ({ cake }: ICakeListItemProps) => (
    <Link href={`/cake/${cake.id}`}>
        <ListItemWrapper>
            <CakeImage imageUrl={cake.imageUrl} />

            <CakeName>{cake.name}</CakeName>
        </ListItemWrapper>
    </Link>
);

export default CakeListItem;
