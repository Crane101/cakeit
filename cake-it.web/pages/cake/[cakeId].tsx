import CakeView from '../../components/cake-view';
import { GetCake } from '../api/cake/[cakeId]';
import { GetServerSideProps } from 'next';
import { ICake } from '../../models/cake';
import { firstOrOnly } from '../../utils';

interface ICakeViewPageProps {
    cake: ICake;
}

const CakeViewPage = ({ cake }: ICakeViewPageProps) => <CakeView cake={cake} />;

export const getServerSideProps: GetServerSideProps = async context => {
    const cake = await GetCake(firstOrOnly(context.query.cakeId) as string);

    return {
        props: {
            cake,
        },
    };
};

export default CakeViewPage;
