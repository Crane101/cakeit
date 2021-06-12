import CakeListItem from './cakes-list-item';
import CakesContext from '../../context/cakes-context';
import { ICake } from '../../models/cake';
import { ListWrapper } from './index.styles';
import { useContextWithGuard } from '../../context/context-utils';
import { useEffect } from 'react';

interface ICakeListProps {
    cakes: ICake[];
}

const CakesList = ({ cakes }: ICakeListProps) => {
    const { setCakes } = useContextWithGuard(CakesContext);

    useEffect(() => {
        setCakes(cakes);
    }, [cakes]);

    return (
        <ListWrapper>
            {cakes.map(cake => (
                <CakeListItem key={cake.id} cake={cake} />
            ))}
        </ListWrapper>
    );
};

export default CakesList;
