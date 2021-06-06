import { ICake } from '../../../models/cake';

interface ICakeListItemProps {
    cake: ICake;
}

const CakeListItem = ({ cake }: ICakeListItemProps) => (
    <div>
        <p>{cake.name}</p>
    </div>
);

export default CakeListItem;
