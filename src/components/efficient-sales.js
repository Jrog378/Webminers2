import {Button, Card, Col, Container, Row} from "react-bootstrap";
import React from "react";
import Image from "next/image";
import EfficiencyChart from '../images/plots/EfficiencyChart.webp'
import styles from "@/styles/Home.module.css";

export default function EfficientSales() {
    return (
        <Card.Link href={'/efficiency'} style={{textDecoration:'none'}}>
            <Card style={{background: 'whitesmoke'}}>
                <Image
                    src={EfficiencyChart}
                    className={styles.saleimg}
                    alt={'Efficiency Table'}
                    placeholder={'blur'}
                />
                <Row>
                    <Card.Body>
                        <Card.Link href={'/efficiency'} className={styles.weblink}>
                            <Card.Title style={{textAlign: "center"}}>
                                <h4>Looking for Efficient Profit?</h4>
                                <h4>Visit Our FREE Asset Research</h4>
                            </Card.Title>
                        </Card.Link>
                        <p style={{textAlign: "center", color:'black'}} className={styles.pad}>
                            Find your efficient returns with the right data on the right assets
                        </p>
                    </Card.Body>
                </Row>
            </Card>
        </Card.Link>
    )
}