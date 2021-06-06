import CakeListItem from './cakes-list-item';
import { ICake } from '../../models/cake';

interface ICakeListProps {
    cakes: ICake[];
}

const CakesList = ({ cakes }: ICakeListProps) => (
    <>
        {cakes.map(cake => (
            <CakeListItem key={cake.id} cake={cake} />
        ))}
    </>
);

export default CakesList;
