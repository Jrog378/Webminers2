import ImproveMain from "../../images/articleimages/ImproveMain.webp";
import GoodWriterMain from "../../images/articleimages/GoodWriterMain.webp";
import TechieMain from "../../images/articleimages/TechieMain.webp";
import SatMain from "../../images/articleimages/SatMain.webp";
import PythonDataMain from "../../images/articleimages/PythonDataMain.webp";
import VisualMain from "../../images/articleimages/VisualMain.webp";
import lock from "../../images/articleimages/computer-security-lock-and-payment.webp";
import IntroMain from "../../images/articleimages/IntroMain.webp";
import SiteMain from "../../images/articleimages/SiteMain.webp";
import UniqueMain from "../../images/articleimages/UniqueMain.webp"
import NewServicesMain from '../../images/articleimages/NewServicesMain.webp'
import Image from 'next/image'
import WhiteLogo from '../../images/WebLogo.webp'
import styles from '@/styles/Home.module.css'
import {Button, Card, CardGroup, Col, Container, DropdownButton, Row} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import ReactMarkdown from "react-markdown";
import {useState} from "react";


export default function Toplogos() {
    const [fin, setFin] = useState(0);
    const [coding, setCoding] = useState(0);
    const [data, setData] = useState(0);
    const filters = ['', styles.notshowarticle]
    const [title, setTitle] = useState(0)

    const titles = ['All', 'Coding', 'Crypto & Finance', 'Data Science']

    const blogposts = [
        {
            id: 11,
            title: 'Leveling Up Webminers Services and Content With Financial Data',
            date: 'Feb 6th 2022',
            text: 'Many upgrades have occurred since you last saw a Webminers article. We are adding features like ' +
                'Seasons, Asset Balancing, and Optimization.',
            url: '/articles/newservices',
            img: NewServicesMain,
            tags: '',
            alt: 'Digital Portfolio Balance on a phone screen displayed using a green line and a black background' +
                'sitting on a wooden desk that has a plant on it.'
        },
        {
            id: 10,
            title: 'Avoid the copy and paste psyche & break applicant uniformity',
            date: 'Oct 26 2022',
            text: 'The world of developers and programmers is a plentiful place. However, you want to show how ' +
                'different you are and stand out with what you have.',
            url: '/articles/stand-out',
            img: UniqueMain,
            tags: [filters[fin]],
            alt: 'Calculator application overtop of a white screen with code in blue, purple and orange color ' +
                'typed on it on a mac laptop.'
        },
        {
            id: 9,
            title: 'First post on the redone Webminers blog site - Updates',
            date: 'Oct 15 2022',
            text: 'Introduction to the new blog site that has been fully redone along with summary of the new ' +
                'categories and plans to come for webminers.',
            url: '/articles/new-webminers',
            img: SiteMain,
            tags: '',
            alt: 'Four lit up lightbulbs all handing in a line from black wires with one swinging off to the side like a newton\'s cradle.'
        },
        {
            id: 8,
            title: 'Changes Coming to Webminers for an Improved Experience',
            date: 'Sep 28 2022',
            text: 'Improvements to Webminers are necessary and this is a brief overview of some of the things we have planned to come for readers.',
            url: '/articles/new-changes',
            img: ImproveMain,
            tags: '',
            alt: 'A black calculator, paperclip, and a pen on a piece of paper with a bar graph that has many thin black bars.'
        },
        {
            id: 7,
            title: 'What Truly Makes a Good Technical Copywriter Stand Out',
            date: 'Sep 19 2022',
            text: 'How to become a better technical copywriter and develop in-demand skills to make an impact and provide these services to businesses.',
            url: '/articles/good-tech-writer',
            img: GoodWriterMain,
            tags: [filters[coding], filters[fin], filters[data]],
            alt: 'Older dip pen resting on a black tabletop and a black background along with a black shadow covering over them.'
        },
        {
            id: 6,
            title: '6 Growing Jobs To Take Advantage of Our Technical Future',
            date: 'Sep 14 2022',
            text: 'As Jobs began to be automated and replaced by technology, here are the few that have a prosperous future for anyone to take advantage.',
            url: '/articles/tech-future',
            img: TechieMain,
            tags: '',
            alt: 'Black glasses sitting in front of 4 computer screens where only through the glasses the image is clear.'
        },
        {
            id: 5,
            title: 'Satellites - The Space Spies That Watch Over The World',
            date: 'Sep 11 2022',
            text: 'Explaining the good and bad of constant satellite recording with where we draw the line between spying on people and privacy.',
            url: '/articles/space-spies',
            img: SatMain,
            tags: filters[fin],
            alt: 'Satellite in space looking down onto earth where there are brown dry mountains next to a deep blue body of water.'
        },
        {
            id: 4,
            title: 'Python Has Been Taking Over The Data Science World',
            date: 'Sep 7 2022',
            text: 'Python has been hitting the world by storm, becoming the most popular programming language, especially in Data Science. Let\'s see why.',
            url: '/articles/python-data-science',
            img: PythonDataMain,
            tags: filters[fin],
            alt: 'Person in a black hoodie typing on a Mac Laptop with a black mouse next to it with green colored code filling the page.'
        },
        {
            id: 3,
            title: 'Data Visualization - A Profitable Data Science Subcategory',
            date: 'Sep 6 2022',
            text: 'Data Visualization is the art of displaying data in a way that anyone can read allowing for the value of true creativity to be shown.',
            url: '/articles/data-vis',
            img: VisualMain,
            tags: filters[fin],
            alt: 'Bar graph on a purple sheet of paper with an iPhone displaying the calculator app next to a set of pencils and a notebook.'
        },
        {
            id: 2,
            title: 'Ethical Hackers Are Needed More Than Ever In Our Future',
            date: 'Sep 5 2022',
            text: 'As hackers are getting better and better, what can truly be done to stop them to keep you and your family digitally safe.',
            url: '/articles/ethical-hacking',
            img: lock,
            tags: '',
            alt: 'MacBook Pro Laptop with two credit cards resting on the keyboard with a padlock on top of those.'
        },
        {
            id: 1,
            title: 'Introduction To Jus and the Formation of Webminers',
            date: 'Sep 4 2022',
            text: 'Starting from programming to engineering to programming. The full cycle of why Jus is where he is and why',
            url: '/articles/intro',
            img: IntroMain,
            tags: '',
            alt: 'Man in a black suit suit and a light grey shirt that is reaching out his hand for a greeting handshake.'
        }
    ]

    const Bloggers = blogposts.map(content =>
        <Container key={content.id} className={content.tags} style={{padding: '10px'}}>
            <Card style={{height: '100%', margin: '10px'}}>
                <Container className={'blog-row'}>
                    <Row>
                        <Card.Body style={{paddingBottom: 0}}>
                            <Card.Title>{content.title}</Card.Title>
                        </Card.Body>
                    </Row>
                    <Row>
                        <Card.Body style={{paddingTop: '8px'}}>
                            <Row>
                                <Card.Text>
                                    <ReactMarkdown>{content.text}</ReactMarkdown>
                                </Card.Text>
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
                                    <Button href={content.url} style={{float: 'right', marginBottom: '10px'}}
                                            variant="outline-success"
                                            size='sm'>Read More...</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Row>
                    <Row>
                        <Col style={{margin: 'auto'}}>
                            <Card.Link href={content.url}>
                                <Image src={content.img} alt={content.alt} className={styles.blogimgs}/>
                            </Card.Link>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Container>
    );

    function allarticles() {
        setCoding(0)
        setData(0)
        setFin(0)
        setTitle(0)
    }

    function codingarticles() {
        setCoding(0)
        setData(1)
        setFin(1)
        setTitle(1)
    }

    function finarticles() {
        setCoding(1)
        setData(1)
        setFin(0)
        setTitle(2)
    }

    function dataarticles() {
        setCoding(1)
        setData(0)
        setFin(1)
        setTitle(3)
    }

    return (
        <main style={{backgroundColor: '#212529'}}>
            <Container style={{
                margin: 'auto',
                padding: '2%',
                minHeight: '100%',
                backgroundColor: '#212529',
                color: 'whitesmoke'
            }}>
                <h1 className={styles.Apptext} style={{padding: '25px 10px', textAlign: 'center'}}>
                    Welcome to the <code>webmienrs.js</code> project
                </h1>
                <Row style={{width: '100%'}}>
                    <Col>
                        <DropdownButton menuVariant={'dark'} variant={'success'} id="dropdown-basic-button"
                                        title="Sort By">
                            <Dropdown.Item onClick={allarticles}>All Articles</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={finarticles}>Crypto & Finance</Dropdown.Item>
                            <Dropdown.Item onClick={dataarticles}>Data Science</Dropdown.Item>
                            <Dropdown.Item onClick={codingarticles}>Coding</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col>
                        <h1 style={{fontWeight: 'bolder', textAlign: 'center'}}>
                            {titles[title]} Articles
                        </h1>
                    </Col>
                    <Col className={styles.disappear}>
                    </Col>
                </Row>
            </Container>
            <Container style={{width: '100%'}}>
                <Container style={{borderRadius: '15px', backgroundColor: 'rgb(213, 233, 223)'}}>
                    <Row sm={1} md={2} style={{paddingBottom:'10px'}}>
                        {Bloggers}
                    </Row>
                </Container>

            </Container>
        </main>
    );
}