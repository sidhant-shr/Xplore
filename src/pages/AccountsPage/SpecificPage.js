import { Button, Grid, TextField } from '@mui/material'
import React, { useState,useReducer } from 'react'
import useDebounce from '../../hooks/useDebounce';
import { alchemy } from '../../App';
import { Utils } from 'alchemy-sdk';


const FETCHING_BALANCE_TYPE = "FETCHING_BALANCE";
const COMPLETE_FETCHING_BALANCE_TYPE = "COMPLETE_FETCHING_BALANCE_TYPE";

const initialState = {
    loading: false,
    balance: 0
};

function reducer(state, action) {
    switch (action.type) {
        
        case FETCHING_BALANCE_TYPE:
            return {
                ...state,
                balance: 0,
                loading: true
            }
        case COMPLETE_FETCHING_BALANCE_TYPE:
            default:
            return {
                ...state,
                balance: action.payload,
                loading: false
            }
    }
}


const SpecificPage = () => {
    const [address, setAddress] = useState("");
    const addressDebounce = useDebounce();
    const [state, dispatch] = useReducer(reducer,initialState);
    const {loading, balance} = state ;

    const getBalanceHandler = async () => {
        dispatch({type: FETCHING_BALANCE_TYPE});
        const balance = await alchemy.core.getBalance(addressDebounce, "latest");

        dispatch({type: COMPLETE_FETCHING_BALANCE_TYPE, payload: balance})



    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} marginTop={5}>
                <TextField
                    label="Address"
                    placeholder='Enter eth address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ width: "500px" }}
                />
                <Button
                    onClick={getBalanceHandler}
                    variant='contained'
                    sx={{marginLeft: "10px", height: "100%"}}

                >
                    Get Balance

                </Button>

            </Grid>
            {!balance && loading && (
                <Grid item xs =  {12} marginTop={2}>
                    Balance: {Utils.formatEther(balance)} ETH

                </Grid>
            )}

        </Grid>
    )
}

export default SpecificPage;