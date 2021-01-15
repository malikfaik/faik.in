import { DiNodejsSmall, DiPython, DiRedis } from 'react-icons/di'
import { SiAmazonaws, SiApachekafka, SiRabbitmq, SiDocker, SiJenkins, SiGraphql, SiGo, SiTypescript } from 'react-icons/si'

export default [
  {
    name: 'NodeJs',
    id: 1,
    icon: DiNodejsSmall,
    iconAvailable: true
  },
  {
    name: 'Python',
    id: 2,
    icon: DiPython,
    iconAvailable: true
  },
  {
    name: 'GoLang',
    id: 3,
    icon: SiGo,
    iconAvailable: true
  },
  {
    name: 'Typescript',
    id: 4,
    icon: SiTypescript,
    iconAvailable: true
  },
  {
    name: 'Cloudformation',
    id: 5,
    iconPath: '/logos/cf.svg',
    alt: 'cloudformation',
    iconAvailable: false
  },
  {
    name: 'Pulumi',
    id: 6,
    iconPath: '/logos/pulumi.svg',
    alt: 'pulumi',
    iconAvailable: false
  },
  {
    name: 'GraphQL',
    id: 7,
    icon: SiGraphql,
    iconAvailable: true
  },
  {
    name: 'gRPC',
    id: 8,
    iconPath: '/logos/grpc.svg',
    alt: 'pulumi',
    iconAvailable: false
  },
  {
    name: 'Kafka',
    id: 9,
    icon: SiApachekafka,
    iconAvailable: true
  },
  {
    name: 'NATS',
    id: 10,
    iconPath: '/logos/nats.svg',
    alt: 'nats',
    iconAvailable: false
  },
  {
    name: 'RabbitMQ',
    id: 11,
    icon: SiRabbitmq,
    iconAvailable: true
  },
  {
    name: 'Redis',
    id: 12,
    icon: DiRedis,
    iconAvailable: true
  },
  {
    name: 'Docker',
    id: 13,
    icon: SiDocker,
    iconAvailable: true
  },
  {
    name: 'Jenkins',
    id: 14,
    icon: SiJenkins,
    iconAvailable: true
  },
  {
    name: 'AWS',
    id: 15,
    icon: SiAmazonaws,
    iconAvailable: true
  }
]
