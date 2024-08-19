import { techList } from '../../../config/tech-data'

export default [
  {
    name: 'Peter Park',
    alt: 'peter-park',
    id: '1',
    img: '/logos/pp.svg',
    className: 'bullet',
    tech: [techList.ts, techList.aws, techList.bullmq, techList.gitlab, techList.kube, techList.redis, techList.datadog, techList.tf],
    description: `I am working at Peter-Park as a Lead Software Engineer, focussed on a wide array of areas, notably revenue, devops, core-apis etc, apart from that my day to day includes mentoring engineers, improving the architecture of the platform, given that the product is going through this scale-up phase, I am responsible to make sure we are able to handle the scale both from a technical and a human standpoint`,
    from: new Date('04/01/2024'),
    to: null
  },
  {
    name: 'Joyn',
    alt: 'joyn',
    id: '2',
    img: '/logos/joyn.svg',
    className: 'bullet',
    tech: [techList.ts, techList.python, techList.aws, techList.kafka, techList.gitlab, techList.elk, techList.dynatrace, techList.grafana, techList.cf, techList.srvjs],
    description:
      'I was working at Joyn as a Lead Software Engineer within the Content Domain, I played a pivotal role at Joyn, fostering a test-driven culture, evolving the architecture of the content pipeline, to make it more robust and performant. I was also heavily involved in mentoring engineers, and improving cross-team service management. My highlight at Joyn was our launch in Austria, where I was responsible for the content pipeline, which was a huge success, opening up our platform to 1M+ new users.',
    from: new Date('02/01/2021'),
    to: new Date('04/01/2024')
  },
  {
    name: 'Reneverse',
    alt: 'reneverse',
    id: '3',
    img: '/logos/reneverse.svg',
    className: 'bullet',
    tech: [techList.ts, techList.aws, techList.circle, techList.grafana, techList.blc, techList.cdk],
    description:
      'I am working at Reneverse as a freelance Cross Functional Engineer, with mostly focused on platform.\nIn my role, I have spearheaded the development of a serverless micro-services backend capable of handling 1B+ request every month at an average latency of 80ms with 99.99% availability, apart from that I have architected mechanisms for provising and handling secure custodial wallets for blockchain use-cases.',
    from: new Date('02/01/2022'),
    to: null
  },
  {
    name: 'Trivago',
    alt: 'trivago',
    id: '4',
    img: '/logos/trivago.svg',
    className: 'bullet',
    tech: [techList.ts, techList.go, techList.python, techList.php, techList.aws, techList.kafka, techList.nats, techList.jenkins, techList.srvjs, techList.cf, techList.instana],
    description:
      'I was working at Trivago as a cross-functional engineer, primarily handling Backend and DevOps topics.\nIn my role, I built tooling to enforce SOX compliance protocols for engineering across the B2B domain, architected services to support a subscription based payment model, improved service performance, and mentored engineers, alongside other responsibilities.',
    from: new Date('01/15/2020'),
    to: new Date('02/01/2021')
  },
  {
    name: 'Infino',
    alt: 'infino',
    id: '5',
    img: '/logos/infino.svg',
    className: 'bullet',
    tech: [techList.ts, techList.go, techList.python, techList.aws, techList.jenkins, techList.dynatrace, techList.rabbitmq],
    description:
      'I worked at Infino as a Head of Engineering, my work involved architecting the back-end from scratch, which included building a PCI-compliant card vault, developing a VISA networking layer for payments, mentoring the team and expanding it to 10+ engineers and working with external partners to secure partnerships with major Indian banks for payment settlement.',
    from: new Date('01/01/2019'),
    to: new Date('12/01/2019')
  },
  {
    name: 'Freelance',
    alt: 'freelance',
    id: '6',
    img: '/logos/personal.svg',
    className: 'bullet',
    description:
      'In my ten years of freelancing, I have worked with a plethora of clients, e.g. I collaborated with Accenture to modernize and scale data pipelines for AI models for there clients. I also worked with a variety of social organizations and enterprises, assisting in setting up donation tech pipelines and digitizing tools for social workers, including a microloan management solution.',
    from: new Date('01/01/2013'),
    to: null
  }
]
