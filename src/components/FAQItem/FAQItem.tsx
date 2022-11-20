import React from 'react';
import classes from './FAQItem.module.css';

function FAQItem(props: { question: string, answer: string }) {

    const styled = styleAnswer(props.answer);

    function styleAnswer(answer: string): string {
        return answer.replace(/\*\*(.+?)\*\*/gm, `<span class=${classes.highlight}>$1</span>`);
    }

    return (
        <div className={classes.container}>
            <div className={classes.question}><span style={{ color: "rgb(246,68,82)" }}>./</span> {props.question}</div>
            <div className={classes.answer} dangerouslySetInnerHTML={{ __html: styled }}></div>
        </div>
    );
}

export default FAQItem;