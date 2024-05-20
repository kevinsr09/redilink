import { InjectionMode, asClass, createContainer } from 'awilix'
import { PrismaLinkRepository } from '@redilink/core/dist/shared/infrastructure/persistence/pisma/PrismaLinkRepository'
import { PrismaAuthRespository } from '@redilink/core/dist/shared/infrastructure/persistence/pisma/PrismaAuthRepository'
import { InMemoryCommandBus } from '@redilink/core/dist/shared/infrastructure/CommandBus/InMemoryCommandBus'
import { CommandHandlers } from '@redilink/core/dist/shared/infrastructure/CommandBus/CommandHandlers'
import { InMemoryQueryBus } from '@redilink/core/dist/shared/infrastructure/QueryBus/InMemoryQueryBus'
import { QueryHandlers } from '@redilink/core/dist/shared/infrastructure/QueryBus/QueryHandlers'
import { LinkCreator } from '@redilink/core/dist/Link/application/create/LinkCreate'
import { LinkFinder } from '@redilink/core/dist/Link/application/find/LinkFinder'
import { UserRegistrar } from '@redilink/core/dist/Auth/application/register/UserRegistrar'
import { CreateLinkCommandHandler } from '@redilink/core/dist/Link/application/create/CreateLinkCommandHandler'
import { FindLinkQueryHandler } from '@redilink/core/dist/Link/application/find/FindLinkQueryHandler'
import { LinkGetController } from '../controllers/Link/LinkGetController'
import { IndexGetController } from '../controllers/Index/IndexGetController'
import { LinkPostController } from '../controllers/Link/LinkPostController'

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
  strict: true
})

container.register({
  // Reoisitories
  authRepository: asClass(PrismaAuthRespository).singleton(),
  linkRepository: asClass(PrismaLinkRepository).singleton(),

  // Usecases
  linkCreator: asClass(LinkCreator).singleton().inject(() => ({ repository: container.resolve('linkRepository') })),

  linkFinder: asClass(LinkFinder).singleton().inject(() => ({ repository: container.resolve('linkRepository') })),

  userRegistrar: asClass(UserRegistrar).singleton().inject(() => ({ repository: container.resolve('authRepository') })),

  // Command Handlers
  createLinkCommandHandler: asClass(CreateLinkCommandHandler).singleton().inject(() => ({ linkCreator: container.resolve('linkCreator') })),

  // CommandBus
  commandHandlers: asClass(CommandHandlers).singleton().inject(() => ({
    commandHandlers: [
      container.resolve('createLinkCommandHandler')
    ]
  })),
  commandBus: asClass(InMemoryCommandBus).singleton().inject(() => ({ commandHandlers: container.resolve('commandHandlers') })),

  // Query Handlers
  findLinkQueryHandler: asClass(FindLinkQueryHandler).singleton().inject(() => ({ linkFinder: container.resolve('linkFinder') })),

  // QueryBus

  queryHandlers: asClass(QueryHandlers).singleton().inject(() => ({
    queryHandlers: [
      container.resolve('findLinkQueryHandler')
    ]
  })),

  queryBus: asClass(InMemoryQueryBus).singleton().inject(() => ({ queryHandlersInformation: container.resolve('queryHandlers') })),

  // Controllers
  linkGetController: asClass(LinkGetController).singleton().inject(() => ({ queryBus: container.resolve('queryBus') })),

  linkPostController: asClass(LinkPostController).singleton().inject(() => ({ commandBus: container.resolve('commandBus') })),

  indexGetController: asClass(IndexGetController).singleton().inject(() => ({ queryBus: container.resolve('queryBus') }))

})
