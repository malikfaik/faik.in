import { DiNodejsSmall, DiPython, DiRedis } from 'react-icons/di'
import {
  SiAmazonaws,
  SiApachekafka,
  SiRabbitmq,
  SiDocker,
  SiJenkins,
  SiGraphql,
  SiGo,
  SiTypescript,
  SiGitlab,
  SiGrafana,
  SiElastic,
  SiDatadog,
  SiCircleci,
  SiHiveBlockchain,
  SiServerless,
  SiTerraform,
  SiDynatrace,
  SiPhp,
  SiKubernetes
} from 'react-icons/si'

export enum FileType {
  icon = 'icon',
  svg = 'svg'
}

type CommonTech = {
  id: string
  slug: string
  name: string
}

type IconTech = CommonTech & {
  icon: React.ElementType
  type: FileType.icon
}

type SvgTech = CommonTech & {
  iconPath: string
  alt: string
  type: FileType.svg
}

export type TechList = (IconTech | SvgTech)[]

export const techList: { [k: string]: IconTech | SvgTech } = {
  ts: {
    id: 'ts',
    slug: 'typescript',
    name: 'Typescript',
    icon: SiTypescript,
    type: FileType.icon
  },
  nodejs: {
    id: 'nodejs',
    slug: 'nodejs',
    name: 'NodeJS',
    icon: DiNodejsSmall,
    type: FileType.icon
  },
  aws: {
    id: 'aws',
    name: 'aws',
    slug: 'aws',
    icon: SiAmazonaws,
    type: FileType.icon
  },
  gitlab: {
    id: 'gitlab',
    name: 'GitlabCI',
    slug: 'gitlab-ci',
    icon: SiGitlab,
    type: FileType.icon
  },
  kube: {
    id: 'kube',
    name: 'Kubernetes',
    slug: 'kubernetes',
    icon: SiKubernetes,
    type: FileType.icon
  },
  redis: {
    id: 'redis',
    slug: 'redis',
    name: 'Redis',
    icon: DiRedis,
    type: FileType.icon
  },
  go: {
    id: 'go',
    slug: 'go',
    name: 'GoLang',
    icon: SiGo,
    type: FileType.icon
  },
  python: {
    id: 'python',
    slug: 'python',
    name: 'Python',
    icon: DiPython,
    type: FileType.icon
  },
  kafka: {
    id: 'kafka',
    slug: 'kafka',
    name: 'Kafka',
    icon: SiApachekafka,
    type: FileType.icon
  },
  bullmq: {
    id: 'bullmq',
    slug: 'bullmq',
    name: 'BullMQ',
    iconPath: '/logos/bullmq.svg',
    alt: 'cloudformation',
    type: FileType.svg
  },
  grafana: {
    id: 'grafana',
    slug: 'grafana',
    name: 'Grafana',
    icon: SiGrafana,
    type: FileType.icon
  },
  elk: {
    id: 'elk',
    slug: 'elk',
    name: 'ELK Stack',
    icon: SiElastic,
    type: FileType.icon
  },
  datadog: {
    id: 'datadog',
    slug: 'datadog',
    name: 'Datadog',
    icon: SiDatadog,
    type: FileType.icon
  },
  circle: {
    id: 'circle',
    slug: 'circle-ci',
    name: 'CircleCI',
    icon: SiCircleci,
    type: FileType.icon
  },
  blc: {
    id: 'blc',
    slug: 'blockchain',
    name: 'Blockchain',
    icon: SiHiveBlockchain,
    type: FileType.icon
  },
  srvjs: {
    id: 'srvjs',
    slug: 'serverless-js',
    name: 'Serverless JS',
    icon: SiServerless,
    type: FileType.icon
  },
  cf: {
    id: 'cf',
    slug: 'cloudformation',
    name: 'Cloudformation',
    iconPath: '/logos/cf.svg',
    alt: 'cloudformation',
    type: FileType.svg
  },
  tf: {
    id: 'tf',
    slug: 'terraform',
    name: 'Terraform',
    icon: SiTerraform,
    type: FileType.icon
  },
  cdk: {
    id: 'cdk',
    slug: 'aws-cdk',
    name: 'AWS CDK',
    iconPath: '/logos/cdk.svg',
    alt: 'cdk',
    type: FileType.svg
  },
  dynatrace: {
    id: 'dynatrace',
    slug: 'dynatrace',
    name: 'Dynatrace',
    icon: SiDynatrace,
    type: FileType.icon
  },
  jenkins: {
    id: 'jenkins',
    slug: 'jenkins',
    name: 'Jenkins',
    icon: SiJenkins,
    type: FileType.icon
  },
  instana: {
    id: 'instana',
    slug: 'instana',
    name: 'Dynatrace',
    iconPath: '/logos/instana.svg',
    alt: 'instana',
    type: FileType.svg
  },
  php: {
    id: 'php',
    slug: 'php',
    name: 'PHP',
    icon: SiPhp,
    type: FileType.icon
  },
  rabbitmq: {
    id: 'rabbitmq',
    slug: 'rabbitmq',
    name: 'RabbitMQ',
    icon: SiRabbitmq,
    type: FileType.icon
  },
  nats: {
    id: 'nats',
    slug: 'nats',
    name: 'NATS',
    iconPath: '/logos/nats.svg',
    alt: 'nats',
    type: FileType.svg
  },
  pulumi: {
    name: 'Pulumi',
    slug: 'pulumi',
    id: 'pulumi',
    iconPath: '/logos/pulumi.svg',
    alt: 'pulumi',
    type: FileType.svg
  },
  gql: {
    name: 'GraphQL',
    slug: 'gql',
    id: 'gql',
    icon: SiGraphql,
    type: FileType.icon
  },
  grpc: {
    name: 'gRPC',
    slug: 'grpc',
    id: 'grpc',
    iconPath: '/logos/grpc.svg',
    alt: 'grpc',
    type: FileType.svg
  },
  docker: {
    name: 'Docker',
    id: 'docker',
    slug: 'docker',
    icon: SiDocker,
    type: FileType.icon
  }
}
