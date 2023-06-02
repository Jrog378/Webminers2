import Image from "next/image";
import {Card, Col, Container, Row} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import ReactMarkdown from "react-markdown";
import React from "react";
import Head from "next/head";
import Email from "@/components/email";
import Suggest from "@/components/suggest";
import Details from "@/components/details";
import Outline from "@/components/outline";
// import {GoogleAdSense} from "nextjs-google-adsense";
// import {AdRecover} from "@/components/ad-recover";
// import {DisplayAd} from "@/components/display-ad";
// import {ArticleAd} from "@/components/article-ad";

const ArticleFormat = ({Article, url}) => {
    const Detail = Details.find((article) => article.url === url)

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": Detail.title,
        "name": Detail.title,
        "author":
            {
                "@type": "Person",
                "name": "Justin Rogers"
            },
        "datePublished": Detail.pub,
        "dateModified": Detail.date,
        "description": Detail.text,
        "image": "https://webminers.dev/images/" + Detail.header,
        "url": "https://webminers.dev" + Detail.url
    }
    return (
        <>
            {/*<GoogleAdSense publisherId="pub-7878345029704986" data-nscript={false}/>*/}
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{Detail.title}</title>
                <meta property='og:type' content='article'/>
                <meta property='og:title' content={Detail.title}/>
                <meta property='og:image' content={'https://webminers.dev/images/' + Detail.header}/>
                <meta property='og:description' content={Detail.text}/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name='description' content={Detail.text}/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content={Detail.title}/>
                <meta name='twitter:image' content={'https://webminers.dev/images/' + Detail.header}/>
                <meta name='twitter:description' content={Detail.text}/>
                <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
            </Head>
            <article style={{backgroundColor: '#212529'}}>
                {/*<AdRecover/>*/}
                <Container>
                    <header>
                        <Card style={{borderStyle: 'none', background: 'none'}}>
                            <Card.Title style={{
                                color: 'rgb(200,200,200)',
                                textAlign: 'center',
                                padding: '20px 3% 0 3%'
                            }}>
                                <h1 style={{fontSize: 'xx-large'}}>{Detail.title}</h1>
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Last modified: {Detail.date}
                            </Card.Text>
                        </Card>
                    </header>
                </Container>
                <Card
                    style={{
                        display: 'flex',
                        borderRadius: '35px',
                        background: 'whitesmoke'
                    }}>
                    <Container>
                        <Row style={{padding: '0 25px 15px 25px'}}>
                            <Col lg={8} md={12} className={styles.pad}>
                                {Article.map(sections => (
                                        <Card key={sections.id}
                                              style={{borderStyle: 'none', background: 'none', padding: '0 8%'}}>
                                            <Image
                                                style={{margin: 'auto', width: '70%', height: 'auto', borderRadius: '15px'}}
                                                alt={sections.description}
                                                src={sections.img}
                                                id={sections.id}
                                                placeholder={'blur'}
                                                lazy
                                            />
                                            <Card.Body style={{paddingBottom: 0}}>
                                                <Container className={styles.webmark} style={{padding: '0px'}}>
                                                    <Card.Title style={{padding: '10px 0'}}><h2>{sections.title}</h2>
                                                    </Card.Title>
                                                    <ReactMarkdown>{sections.text}</ReactMarkdown>
                                                </Container>
                                            </Card.Body>
                                        </Card>
                                    )
                                )}
                                <Card style={{background: 'whitesmoke', color: 'rgb(75,75,75)'}}>
                                    <Card.Body>
                                        <Card.Title>Disclaimer</Card.Title>
                                        <Card.Text>
                                            The information provided in this article is not investment advice. We are
                                            not responsible for any losses incurred by readers who choose to invest in
                                            cryptocurrency. Readers should do their own research before investing in
                                            cryptocurrency. Cryptocurrency is a volatile asset and there is a high risk
                                            of loss. Readers should only invest money that they can afford to lose.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={12} className={styles.pad}>
                                <Row>
                                    <Col sm={12} md={6} lg={12}>
                                        <Row>
                                            <div className={styles.pad}>
                                                <Email/>
                                            </div>
                                        </Row>
                                        {/*<Row>*/}
                                        {/*    <div className={styles.pad}>*/}
                                        {/*        <DisplayAd slot={"4158745359"}/>*/}
                                        {/*    </div>*/}
                                        {/*</Row>*/}
                                    </Col>
                                    <Col sm={12} md={6} lg={12}>
                                        <div className={styles.pad}>
                                            <Suggest Detail={Detail.id}/>
                                        </div>
                                        {/*<div className={styles.pad}>*/}
                                        {/*    <DisplayAd slot={1008265344}/>*/}
                                        {/*</div>*/}
                                    </Col>
                                </Row>
                                <div style={{
                                    position: 'sticky',
                                    top: 50,
                                    padding: '10px'
                                }}>
                                    <Outline article={Article}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </article>
        </>
    )
}
export default ArticleFormat