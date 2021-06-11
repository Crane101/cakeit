import CakesList from '../components/cakes-list';
import { GetServerSideProps } from 'next';
import HomePageHeader from '../components/home-page-header';
import { ICake } from '../models/cake';
import { getCakes } from './api/cake';
interface ICakeItHomePageProps {
    cakes: ICake[];
}

const CakeItHomePage = ({ cakes }: ICakeItHomePageProps) => (
    <>
        <HomePageHeader />
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
