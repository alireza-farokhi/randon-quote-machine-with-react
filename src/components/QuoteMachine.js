import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardActions, CardContent, IconButton, Typography } from "@material-ui/core";
import React from "react";



const QuoteMachine = ({ selectedQuote, assignQuoteIndex }) => {
    return (
        <Card>
            <CardContent>
                {
                    selectedQuote ?

                        <Typography id="text">
                            {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
                        </Typography>

                        : ''
                }

            </CardContent>
            <CardActions>
                <Button size="small" onClick={assignQuoteIndex} id="new-quote">
                    Next Quote
                </Button>
                <IconButton id="new-quote"
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?text=${selectedQuote ? selectedQuote.quote : ''}`}
                    id="tweet-quote"
                >
                    <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default QuoteMachine;