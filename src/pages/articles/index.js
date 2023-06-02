import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {Button, Card, Col, Container, OffcanvasTitle, Row} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import React from "react";
import Head from "next/head";
import Details from "@/components/details";

export default function Articles() {
    const Cards = () => {
        return (
            <Container style={{width: '100%'}}>
                <Container style={{borderRadius: '15px'}}>
                    <Row style={{paddingBottom: '10px'}}>
                        {Details.map(content =>
                            <Col xl={4} md={6} sm={12} key={content.id} style={{padding: '10px'}}>
                                <Card className={styles.arthover}>
                                    <Container>
                                        <Row>
                                            <Card.Body>
                                                <Card.Link href={content.url}>
                                                    <Image
                                                        src={require(`../../images/articleimages/${content.img}`)}
                                                        alt={content.alt}
                                                        className={styles.blogimgs}
                                                        placeholder={'blur'}
                                                    />
                                                </Card.Link>
                                            </Card.Body>
                                        </Row>
                                        <Row>
                                            <Card.Body style={{paddingTop: 0, paddingBottom: 0}}>
                                                <Card.Link
                                                    style={{fontSize: 'x-large'}}
                                                    className={styles.weblink}
                                                    href={content.url}>{content.title}</Card.Link>
                                            </Card.Body>
                                        </Row>
                                        <Row>
                                            <Card.Body style={{paddingTop: '8px'}}>
                                                <Row>
                                                    <ReactMarkdown>{content.text}</ReactMarkdown>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text
                                                            style={{
                                                                fontStyle: 'italic',
                                                                display: 'inline-block'
                                                            }}>{content.date}</Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Button href={content.url}
                                                                className={styles.buttons}
                                                                variant="outline-success"
                                                                size='md'>Read More...</Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Row>
                                    </Container>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            </Container>
        )
    }

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": ["WebPage", "CollectionPage"],
        "@id": "https://webminers.dev/articles/",
        "url": "https://webminers.dev/articles/",
        "image": "https://webminers.dev/webminers-logo.webp",
        "name": "Webminers Educational and Research-Based Crypto Articles",
        "datePublished": "August 7th, 2022",
        "dateModified": "June 2nd, 2023",
        "description": "Crypto investing, blockchain technology, and AI should be topics that are not difficult to get into or understand. Webminers articles strive to reach that goal."
    }

    return (
        <>
            <div style={{backgroundColor: 'whitesmoke', width: '100%', borderRadius: '25px'}}>
                <Head>
                    <title>Webminers Educational and Research-Based Crypto Articles</title>
                    <meta name={'og:title'}
                          content={'Webminers Educational and Research-Based Crypto Articles'}/>
                    <meta name="description"
                          content="Crypto investing, blockchain technology, and AI should be topics that are not difficult to get into or understand. Webminers articles strive to reach that goal."/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                    <meta property='og:type' content='website'/>
                    <meta property='og:description' content='Crypto investing, blockchain technology, and AI should be topics that are not difficult to get into or understand. Webminers articles strive to reach that goal.'/>
                    <meta property='og:sitename' content='Webminers'/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name='twitter:title' content='Webminers Educational and Research-Based Crypto Articles'/>
                    <meta name='twitter:description' content='Crypto investing, blockchain technology, and AI should be topics that are not difficult to get into or understand. Webminers articles strive to reach that goal.'/>
                    <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                    <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
                </Head>
                <Cards/>
            </div>
        </>
    )
        ;
}