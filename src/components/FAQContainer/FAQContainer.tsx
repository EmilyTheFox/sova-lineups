import React from 'react';
import classes from './FAQContainer.module.css';
import FAQItem from '../FAQItem/FAQItem';
import faqs from '../../data/faq';

function FAQContainer() {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.header_left} />
                <div className={classes.header_middle}>
                    <div className={classes.header_title}>Frequently Asked Questions</div>
                </div>
                <div className={classes.header_right} />
            </div>
            <div className={classes.main}>
                <div className={classes.background_text}>FaQ</div>
                <div className={classes.left} />
                <div className={classes.middle}>
                    <div className={classes.whiteline} />
                    <div className={classes.faqList}>
                        {
                            faqs.map((faq, i) => (
                                <FAQItem question={faq.question} answer={faq.answer} key={i} />
                            ))
                        }
                    </div>
                </div>
                <div className={classes.right} />
            </div>
        </div>
    );
}

export default FAQContainer;