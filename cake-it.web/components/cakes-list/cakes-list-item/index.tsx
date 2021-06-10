import { CakeImage, CakeName, ListItemWrapper } from './index.styles';

import { ICake } from '../../../models/cake';

interface ICakeListItemProps {
    cake: ICake;
}

const CakeListItem = ({ cake }: ICakeListItemProps) => (
    <ListItemWrapper>
        <CakeImage src={cake.imageUrl} />
        <CakeName>{cake.name}</CakeName>
    </ListItemWrapper>
);

export default CakeListItem;
