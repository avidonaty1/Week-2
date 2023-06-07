import { useState, useEffect } from 'react';
import { Button, Box, Grid } from '@mui/material';
import React from 'react';


function Quote() {

    const [ quotes, setQuotes ] = useState([]);
    const [randomIndex, setRandomIndex ] = useState();


    useEffect(() => {

        fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then((json) => setQuotes(json))

    }, [])


    function getRandomInt(min, max) {
        let xmin = Math.ceil(min);
        let xmax = Math.floor(max);
        return Math.floor(Math.random() * (xmax - xmin) + xmin); 
    }


    let theButton = <div>
        <Button
            variant='contained'
            sx={{
                backgroundColor: 'grey'
            }}
            
            onClick={() => {
                setRandomIndex(getRandomInt(0, quotes.length));
            }}
        >
            Randomize
        </Button>
    </div>



    let list = quotes.map((quote) => {

        let element = <div className='alignParagraph'>

            <p>{quote.text}</p>
            <p className='authors'>-{quote.author}</p>

        </div>

        return element;
    })


    let fullQuote = <Grid 
        container

        sx={{
            height: '100vh'
        }}

        direction="row"
        justifyContent="center"
        alignItems="center"
        > 

        <Grid item>
        <Box 
            sx={{
                width: 480,
                height: 250,
                backgroundColor: "orange",
                padding: 6
            }}
            >
            {theButton}
            {list[randomIndex]}

            </Box>
        </Grid>
    </Grid>





    return (
        fullQuote
    )
}


export default Quote;