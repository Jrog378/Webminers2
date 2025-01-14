import {Button, Card, Col, Container, Nav, Row, Tab} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import Image from "next/image";
import {getStorage, ref, getDownloadURL} from "firebase/storage"
import AssetBalancing from "@/images/plots/AssetBalancing.webp";
import AssetBalancingPlot from "@/images/plots/AssetBalancingPlot.webp";
import AssetBalancingExp from "@/images/plots/AssetBalancingExp.webp";
import Link from "next/link";

export default function Efficiency() {
    // let [plan, setPlan] = useState('')
    // const [user, loading] = useAuthState(auth)


    useEffect(() => {
        const fetchData = async () => {
            const storage = getStorage();

            getDownloadURL(ref(storage, 'EthEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('EthImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'BtcEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('BtcImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'SolEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('SolImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'LtcEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('LtcImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'MaticEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('MaticImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'VetEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('VetImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'AtomEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('AtomImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'DogeEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('DogeImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'TrxEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('TrxImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'LinkEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('LinkImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'AdaEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('AdaImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });

            // if (user) {
            //     const promise = await getDoc(doc(db, 'users', user.uid)).then(profile => profile.data())
            //     console.log(promise)
            //     setPlan(promise['plan'])
            // }

            return ''
        }
        fetchData().then(r => console.log(r))
    }, []);
    // [user, loading]

    const handleKeypress1 = e => {
        if (e.keyCode === 13) {
            calculate1();
        }
    };
    const handleKeypress2 = e => {
        if (e.keyCode === 13) {
            calculate2();
        }
    };
    const handleKeypress3 = e => {
        if (e.keyCode === 13) {
            calculate3();
        }
    };

    function calculate1() {
        const initialInvestment = document.getElementById("initial-investment").value;
        const monthlyReturn = document.getElementById("monthly-return").value;
        const months = document.getElementById("months").value;
        const totalProfit = initialInvestment * Math.pow(1 + monthlyReturn / 100, months) - initialInvestment;
        const result = document.getElementById("result");
        result.value = "$" + totalProfit.toFixed(2); // display result
    }

    function calculate2() {
        const startingAmount = document.getElementById("starting-amount").value;
        const endingAmount = document.getElementById("ending-amount").value;
        const diff = endingAmount - startingAmount
        const taxResult = document.getElementById("tax-result");
        const profitResult = document.getElementById("profit-result");
        if (diff < 0) {
            taxResult.value = 0
            profitResult.value = diff
        } else {
            taxResult.value = diff * 0.15
            profitResult.value = diff * 0.85
        }
    }

    const [timeUnit, setTimeUnit] = useState(0);
    const [totalProfit, setProfit] = useState(0)

    const times = ['Months', 'Years']

    function calculate3() {
        const endingInvestment = document.getElementById("ending-investment").value;
        const time = document.getElementById("time").value;
        if (times[timeUnit] === 'Months') {
            setProfit(endingInvestment / time)
        } else {
            setProfit((endingInvestment / time) / 12)
        }
    }

    function changeTime() {
        setTimeUnit(Math.abs(timeUnit - 1))
    }


    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://webminers.dev/efficiency/",
                    "url": "https://webminers.dev/efficiency/",
                    "image": "https://webminers.dev/images/Efficiency.webp",
                    "name": "Webminers Investing - Asset Efficiency",
                    "datePublished": "February 24th, 2023",
                    "dateModified": "June 1st, 2023",
                    "description": "Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection."
                }),
            }}
        />
    )

    return (
        <>
            <Head>
                <title>Webminers Investing - Crypto Efficiency</title>
                <meta name={'og:title'} content={'Webminers Investing - Crypto Efficiency'}/>
                <meta name="description"
                      content="Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/images/Efficiency.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Webminers Investing - Crypto Efficiency'/>
                <meta name='twitter:description'
                      content='Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection.'/>
                <meta name='twitter:image' content={'https://webminers.dev/images/Efficiency.webp'}/>
                <SchemaMarkup/>
            </Head>
            <div style={{backgroundColor: 'whitesmoke', borderRadius: '25px', width: '100%'}}>
                <Container>
                    <Row>
                        <h1 style={{textAlign: 'center', paddingTop: '10px'}}>Efficiency Analysis</h1>
                        <h2 style={{textAlign: 'center'}}><Link className={styles.weblink} href={'#Description'}>Description
                            Below</Link></h2>
                        <Col lg={6} md={12}>
                            <Container>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="Basic">
                                    <Col>
                                        <Row style={{maxWidth: '500px', margin: 'auto'}} className={styles.pad}>
                                            <h4 style={{textAlign: 'center'}}>Portfolios</h4>
                                            <Nav variant="pills" className="flex-column" style={{
                                                border: '1px solid black', padding: '10px',
                                                borderRadius: '10px'
                                            }}>
                                                <Col>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen} eventKey="Basic">
                                                            Basic Portfolio</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen} eventKey="Alt">
                                                            Premium Portfolio</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Exp">
                                                            High Equity Portfolio</Nav.Link>
                                                    </Row>
                                                </Col>
                                            </Nav>
                                        </Row>
                                        <Row style={{
                                            border: '1px solid black',
                                            padding: '10px',
                                            borderRadius: '10px',
                                            maxWidth: '500px',
                                            margin: 'auto'
                                        }}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey='Basic'>
                                                    <Image className={styles.effImg}
                                                           src={AssetBalancing}
                                                           alt={'AssetBalancing'}
                                                           placeholder={'blur'}
                                                    />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Alt'>
                                                    <Image className={styles.effImg}
                                                           src={AssetBalancingPlot}
                                                           alt={'Asset Balancing Plot'}
                                                           placeholder={'blur'}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Exp'>
                                                    <Image className={styles.effImg}
                                                           src={AssetBalancingExp}
                                                           alt={'Mini Asset Weighting Experienced'}
                                                           placeholder={'blur'}
                                                    />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Row>
                                    </Col>
                                </Tab.Container>
                            </Container>
                        </Col>
                        <Col lg={6} md={12}>
                            <Container>
                                <Tab.Container id="left-tabs-example"
                                               defaultActiveKey="Ethereum">
                                    <Col>
                                        <Row style={{maxWidth: '500px', margin: 'auto'}} className={styles.pad}>
                                            <h4 style={{textAlign: 'center'}}>Risk-to-Reward Ratios</h4>
                                            <Nav variant="pills" className="flex-column" style={{
                                                border: '1px solid black', padding: '10px',
                                                borderRadius: '10px', maxHeight: '205px', overflow: 'scroll'
                                            }}>
                                                <Col>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Ethereum">Ethereum</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Bitcoin">Bitcoin</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Solana">Solana</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Litecoin">Litecoin</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Matic">Matic</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Vet">VeChain</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Cosmos">Atom(Cosmos)</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Doge">Doge</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Tron">Tron</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Link">Link</Nav.Link>
                                                    </Row>
                                                    <Row style={{padding: '3px'}}>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Ada">Ada</Nav.Link>
                                                    </Row>
                                                </Col>
                                            </Nav>
                                        </Row>
                                        <Row style={{
                                            border: '1px solid black',
                                            padding: '10px',
                                            borderRadius: '10px',
                                            maxWidth: '500px',
                                            margin: 'auto'
                                        }}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="Ethereum">
                                                    <Image className={styles.effImg} id="EthImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Bitcoin">
                                                    <Image className={styles.effImg} id="BtcImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Solana">
                                                    <Image className={styles.effImg} id="SolImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Litecoin">
                                                    <Image className={styles.effImg} id="LtcImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Matic">
                                                    <Image className={styles.effImg} id="MaticImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Vet">
                                                    <Image className={styles.effImg} id="VetImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Cosmos">
                                                    <Image className={styles.effImg} id="AtomImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Doge">
                                                    <Image className={styles.effImg} id="DogeImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Tron">
                                                    <Image className={styles.effImg} id="TrxImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Link">
                                                    <Image className={styles.effImg} id="LinkImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Ada">
                                                    <Image className={styles.effImg} id="AdaImg"
                                                           alt={'Loading...'} src={''} unoptimized={true}/>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Row>
                                    </Col>
                                </Tab.Container>
                            </Container>
                        </Col>
                        <Col md={12}>
                            <Container className={styles.pad}>
                                <Card id={'Description'}
                                      style={{background: 'whitesmoke', maxWidth: '850px', margin: 'auto'}}>
                                    <Card.Body>
                                        <Card.Title>
                                            <h3 style={{textAlign: 'center'}}>
                                                Description
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <p style={{fontSize: 'larger'}}>
                                                Adam Smith, the father of modern economics, taught us that wealth is not
                                                money, and money is not wealth. We apply this topic to investing using
                                                the Modern Portfolio Theory. Rather than looking at the dollars made,
                                                the more critical numbers lay within the risk-to-reward ratios, limiting
                                                downside risk and maximizing potential profit. Building portfolios and
                                                evaluation assets this way is the path to consistency and success.
                                                Webminers efficiency is for research purposes only and is not financial
                                                advice.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <h3 style={{textAlign: 'center'}}>
                            Investing Calculators
                        </h3>
                        <Col md={4} sm={12} className={styles.pad}>
                            <div style={{maxWidth: '300px', margin: 'auto'}}>
                                <h4 style={{textAlign: 'center'}}>Investing Returns</h4>
                                <p>Profit based on monthly return.</p>
                                <Col>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="initial-investment">Starting Amount</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress1} type="number"
                                               id="initial-investment" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="monthly-return">Monthly Profit %</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress1} type="number"
                                               id="monthly-return" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="months">Month Count</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress1} type="number"
                                               id="months" min="0" required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} type="button"
                                                onClick={calculate1}>Calculate</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="result">Total Profit</label>
                                        <input className={styles.inputs} type="text" id="result" disabled/>
                                    </Row>
                                </Col>
                            </div>
                        </Col>
                        <Col md={4} sm={12} className={styles.pad}>
                            <div style={{maxWidth: '300px', margin: 'auto'}}>
                                <h4 style={{textAlign: 'center'}}>Capital Gains Tax</h4>
                                <p><strong>Not Tax Advice. </strong>Predicted tax using 15%.</p>
                                <Col>
                                    <Row style={{margin: '15px'}}>
                                        <label htmlFor="starting-amount">Starting Amount</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress2} type="number"
                                               id="starting-amount" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label htmlFor="ending-amount">Ending Amount</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress2} type="number"
                                               id="ending-amount" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} type="button"
                                                onClick={calculate2}>Calculate</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label htmlFor="tax-result">Predicted Tax</label>
                                        <input className={styles.inputs} type="text" id="tax-result" disabled/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label htmlFor="profit-result">Predicted Profit</label>
                                        <input className={styles.inputs} type="text" id="profit-result" disabled/>
                                    </Row>
                                </Col>
                            </div>
                        </Col>
                        <Col md={4} sm={12} className={styles.pad}>
                            <div style={{maxWidth: '300px', margin: 'auto'}}>
                                <h4 style={{textAlign: 'center'}}>Savings Goal</h4>
                                <p>Monthly savings until goal.</p>
                                <Col>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="ending-investment">Goal Amount</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress3} type="number"
                                               id="ending-investment" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="time">{times[timeUnit]} till Goal</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress3} type="number"
                                               id="time" min="0" required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} onClick={changeTime}>Change
                                            to {times[Math.abs(timeUnit - 1)]}</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} type="button"
                                                onClick={calculate3}>Calculate</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="result">$ Savings Per Month</label>
                                        <input className={styles.inputs} value={Math.round(totalProfit)}
                                               type="text"
                                               id="result" disabled/>
                                    </Row>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}


//<Col xxl={4} lg={4} md={12} className={styles.pad}>
// <Container className={styles.pad}>
// <Card style={{backgroundColor: 'rgb(245,245,245)'}}>
// <Container>
// <Card.Body style={{margin: 'auto'}}>
// <Card.Title
//                         style={{fontSize: '30px', textAlign: 'center', paddingTop: '15px'}}>
//                         Asset Efficiency
//                     </Card.Title>
//                 </Card.Body>
//                 <Card.Body style={{margin: 'auto'}}>
//                     <Card.Text style={{fontSize: '20px'}}>
//                         <p>
//                             Our asset efficiency gauges tell us each asset&apos;s risk-to-return
//                             ratio from 1 to 100 in comparison to other cryptocurrencies. The
//                             main timeframes are around 30 to 120 days, however data from up to 4
//                             years is being used for historical accuracy.
//                         </p>
//                         <p>
//                             Research purposes only. We are not responsible for the taxes of the
//                             extra profit you may make from this efficiency data.
//                         </p>
//                     </Card.Text>
//                 </Card.Body>
//             </Container>
//         </Card>
{/*    </Container>*/
}
{/*</Col>*/
}

// <Col xxl={5} lg={6} md={12} className={styles.pad}>
//     <Container className={styles.pad}>
//         <Card style={{backgroundColor: 'rgb(245,245,245)'}}>
//             <Container>
//                 <Card.Title
//                     style={{fontSize: '30px', textAlign: 'center', paddingTop: '25px'}}>
//                     Cryptocurrency Balancing
//                 </Card.Title>
//                 <Card.Body style={{margin: 'auto'}}>
//                     <Card.Text style={{fontSize: '20px'}}>
//                         Asset balancing diversifies your portfolio and reduces risk. In
//                         efficient investing, we <strong>need</strong> at least a little bit of
//                         diversification. Rather than chucking a few assets into a hat and
//                         picking from it, we have measured the efficiencies of many options
//                         and selected the assets that stood out the most to us. This efficiency
//                         data comes from <Card.Link className={styles.weblink}
//                                                    href={'efficiency'}>
//                         Asset Efficiency</Card.Link> if you want to build your portfolio.
//                         There are three levels of Balancing, each with more assets for
//                         you to pick from.
//                         <br/>
//                         <br/>
//                         P.S. Now that we have answered &apos;What to invest in?&apos; visit
//                         <Card.Link className={styles.weblink} href={'insights'}> Market
//                             Insights
//                         </Card.Link> to answer &apos;When to invest?&apos;
//                     </Card.Text>
//                 </Card.Body>
//             </Container>
//         </Card>
{/*    </Container>*/
}
{/*</Col>*/
}