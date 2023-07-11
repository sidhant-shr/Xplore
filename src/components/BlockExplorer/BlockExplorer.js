import { Grid, TextField } from "@mui/material";
import React, { Fragment, useEffect, useState, } from "react";
import './BlockExplorer.css'

import useDebounce from "../../hooks/useDebounce";
import { alchemy } from "../../App";
import Loading from "../Loading/Loading";
import TransactionGrid from "../TransactionGrid/TransactionGrid";

const BlockExplorer = () => {
    const [blockNum, setBlockNum] = useState(1);
    const blockNumDebounce = useDebounce(blockNum);
    const [blockData, setBlockData] = useState();

    useEffect(() => {
        async function getBlockNum() {
            setBlockNum(await alchemy.core.getBlockNumber())

        }
        getBlockNum();
    }, []);

    useEffect(() => {
        async function getBlockData() {
            setBlockData(
                await alchemy.core.getAssetTransfers({
                    fromBlock: blockNumDebounce,
                    toBlock: blockNumDebounce,
                    category: ["external"],
                })
            )
        }
        if (blockNumDebounce && blockNumDebounce !== 1) {
            getBlockData();
        }
    }, [blockNumDebounce]);
    return (
        <Fragment>
            <div className="heading"> Xplore - Eth block explorer </div>
            <Grid container spacing={2}>
                <Grid item xs={12} marginTop={4}>
                    <TextField
                        label="Block number"
                        type="number"
                        value={blockNum}
                        onChange={(e) => setBlockNum(+e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ width: "650px" }}

                    />

                </Grid>
                {!blockData && (
                    <Loading />
                )}
                {blockData && (
                    <Grid item xs={12}>
                        <TransactionGrid
                            rows={blockData.transfers.map(({ hash, value, asset }) => ({
                                id: hash,
                                value,
                                asset,
                            }))}
                        />
                    </Grid>

                )}
            </Grid>

        </Fragment>
    )
}

export default BlockExplorer;