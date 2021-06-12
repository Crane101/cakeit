import { Button, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import { ButtonWrapper, CommentBox, FieldsWrapper, YumFactorField, YumFactorHiddenInput, YumFactorInputWrapper } from './index.styles';
import { ChangeEvent, ChangeEventHandler, useEffect, useRef, useState } from 'react';

import CakesContext from '../../context/cakes-context';
import { FormEvent } from 'react';
import { INewCake } from '../../models/cake';
import { IconSize } from '../icons/IconSize';
import MonochromeLogoIcon from '../icons/logo-icon-unfilled-white';
import { NewCake } from '../../actions/cake';
import YumFactor from '../yum-factor';
import { useContextWithGuard } from '../../context/context-utils';
import { useRouter } from 'next/router';

const NewCakeForm = () => {
    const [cakeName, setCakeName] = useState('');
    const [yumFactor, setYumFactor] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [comment, setComment] = useState('');
    const [cakeNameTaken, setCakeNameTaken] = useState(false);

    const { cakeExists } = useContextWithGuard(CakesContext);
    const router = useRouter();

    const onSubmitNewCake = (ev: FormEvent) => {
        ev.preventDefault();

        const newCake: INewCake = {
            name: cakeName,
            comment,
            imageUrl,
            yumFactor,
        };

        NewCake(newCake)
            .then(() => router.push('/'))
            .catch(err => {
                alert(err);
            });
    };

    const cakeNameOnChangeHandler = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const updatedName = ev.target.value;
        setCakeNameTaken(updatedName !== '' && cakeExists(updatedName));
        setCakeName(updatedName);
    };

    const yumFactorOnInvalidHandler = (ev: FormEvent<HTMLInputElement>) => {
        ev.currentTarget.setCustomValidity(yumFactor === 0 ? 'Select a Yum Factor!' : '');
    };

    const cakeNameHelperText = cakeNameTaken ? 'This cake name already exists!' : 'Make sure this name hasn`t been used already';

    return (
        <form onSubmit={onSubmitNewCake}>
            <h2>Give Us Some Cake...</h2>

            <FieldsWrapper>
                <TextField
                    fullWidth
                    label="Cake Name"
                    helperText={cakeNameHelperText}
                    value={cakeName}
                    onChange={cakeNameOnChangeHandler}
                    required
                    InputLabelProps={{ required: false }}
                    error={cakeNameTaken}
                />

                <TextField
                    fullWidth
                    label="Image URL"
                    helperText="Paste in a link to a picture of your cake"
                    value={imageUrl}
                    onChange={ev => setImageUrl(ev.target.value)}
                    required
                    InputLabelProps={{ required: false }}
                    type="url"
                />

                <CommentBox
                    // variant="outlined"
                    fullWidth
                    label="Comment"
                    placeholder="Tell us why you love this cake!"
                    // multiline
                    // rows={4}
                    // rowsMax={4}
                    value={comment}
                    onChange={ev => setComment(ev.target.value)}
                    required
                    InputLabelProps={{ required: false }}
                    inputProps={{
                        maxLength: 200,
                        minLength: 5,
                    }}
                />

                <YumFactorField>
                    <label>Yum Factor</label>

                    <YumFactorInputWrapper>
                        <YumFactorHiddenInput type="number" value={yumFactor} min={1} max={5} onInvalid={yumFactorOnInvalidHandler} />
                        <YumFactor value={yumFactor} setValue={setYumFactor} />
                    </YumFactorInputWrapper>
                </YumFactorField>
            </FieldsWrapper>

            <ButtonWrapper>
                <Button type="submit" aria-label="Add a new Cake" startIcon={<MonochromeLogoIcon size={IconSize.small} />} disabled={cakeNameTaken}>
                    Cake It!
                </Button>
            </ButtonWrapper>
        </form>
    );
};

export default NewCakeForm;
