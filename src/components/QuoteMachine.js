import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";


const QuoteMachine = (props) => {
    return (
        <Card>
            <CardContent>
                {
                    props.selectedQuote ?

                        <Typography>
                            {props.selectedQuote.quote} - {props.selectedQuote.author}
                        </Typography>

                        : ''
                }

            </CardContent>
            <CardActions>
                <Button  size="small" onClick={props.assignQuoteIndex} >
                Next Quote
                </Button>
            </CardActions>
        </Card>
    );
}

export default QuoteMachine;