import { Button } from '@material-ui/core';
import CakesList from '../components/cakes-list';
import { GetServerSideProps } from 'next';
import { ICake } from '../models/cake';
import WhiteIcon from '../components/icons/logo-icon-unfilled-white';
import { getCakes } from './api/cake';
interface ICakeItHomePageProps {
    cakes: ICake[];
}

const CakeItHomePage = ({ cakes }: ICakeItHomePageProps) => (
    <>
	
        <Button color="primary" variant="contained" aria-label="Add a new Cake" >
            Submit a Cake
        </Button>

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
