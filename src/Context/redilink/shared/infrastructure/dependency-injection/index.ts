import { type LinkFinder } from '@/application/Link/find/LinkFinder'
import { container } from './container'
import { type LinkCreator } from '@/application/Link/create/LinkCreate'
import { type UserRegistrar } from '@/application/Auth/register/UserRegistrar'
import { type CommandBus } from '@/domain/shared/Command/CommandBus'
import { type QueryBus } from '@/domain/shared/Query/QueryBus'

export const linkFinder = container.resolve('linkFinder') as LinkFinder
export const linkCreator = container.resolve('linkCreator') as LinkCreator
export const userRegistrar = container.resolve('userRegistrar') as UserRegistrar
export const commandBus = container.resolve('commandBus') as CommandBus
export const queryBus = container.resolve('queryBus') as QueryBus
