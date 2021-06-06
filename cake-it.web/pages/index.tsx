import CakesList from '../components/cakes-list';
import { GetServerSideProps } from 'next';
import { ICake } from '../models/cake';
import { getCakes } from './api/cake';

interface ICakeItHomePageProps {
    cakes: ICake[];
}

const CakeItHomePage = ({ cakes }: ICakeItHomePageProps) => (
    <>
        <h1>Cake It</h1>

        <CakesList cakes={cakes} />
    </>
);

export const getServerSideProps: GetServerSideProps = async context => {
    const cakes = await getCakes();

    return {
        props: {
            cakes,
        },
    };
};

export default CakeItHomePage;
