import { type LinkFinder } from '@redilink/core/dist/Link/application/find/LinkFinder'
import { container } from './container'
import { type LinkCreator } from '@redilink/core/dist/Link/application/create/LinkCreate'
import { type UserRegistrar } from '@redilink/core/dist/Auth/application/register/UserRegistrar'
import { type CommandBus } from '@redilink/core/dist/shared/domain/Command/CommandBus'
import { type QueryBus } from '@redilink/core/dist/shared/domain/Query/QueryBus'
import { type LinkGetController } from '../controllers/Link/LinkGetController'
import { type IndexGetController } from '../controllers/Index/IndexGetController'
import { type LinkPostController } from '../controllers/Link/LinkPostController'

export const linkFinder = container.resolve('linkFinder') as LinkFinder
export const linkCreator = container.resolve('linkCreator') as LinkCreator
export const userRegistrar = container.resolve('userRegistrar') as UserRegistrar
export const commandBus = container.resolve('commandBus') as CommandBus
export const queryBus = container.resolve('queryBus') as QueryBus
export const linkGetController = container.resolve('linkGetController') as LinkGetController

export const linkPostController = container.resolve('linkPostController') as LinkPostController

export const indexGetController = container.resolve('indexGetController') as IndexGetController
