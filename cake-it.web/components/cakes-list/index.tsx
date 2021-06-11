import CakeListItem from './cakes-list-item';
import { ICake } from '../../models/cake';
import { ListWrapper } from './index.styles';

interface ICakeListProps {
    cakes: ICake[];
}

const CakesList = ({ cakes }: ICakeListProps) => (
    <ListWrapper>
        {cakes.map(cake => (
            <CakeListItem key={cake.id} cake={cake} />
        ))}
    </ListWrapper>
);

export default CakesList;
