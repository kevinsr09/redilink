import { InjectionMode, asClass, createContainer } from 'awilix'
import { PrismaLinkRepository } from '../persistence/pisma/PrismaLinkRepository'
import { LinkCreator } from '@/application/Link/create/LinkCreate'
import { LinkFinder } from '@/application/Link/find/LinkFinder'
import { PrismaAuthRespository } from '../persistence/pisma/PrismaAuthRepository'
import { UserRegistrar } from '@/application/Auth/register/UserRegistrar'
import { CreateLinkCommandHandler } from '@/application/Link/create/CreateLinkCommandHandler'
import { InMemoryCommandBus } from '../CommandBus/InMemoryCommandBus'
import { CommandHandlers } from '../CommandBus/CommandHandlers'
import { InMemoryQueryBus } from '../QueryBus/InMemoryQueryBus'
import { FindLinkQueryHandler } from '@/application/Link/find/FindLinkQueryHandler'
import { QueryHandlers } from '../QueryBus/QueryHandlers'

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

  queryBus: asClass(InMemoryQueryBus).singleton().inject(() => ({ queryHandlersInformation: container.resolve('queryHandlers') }))
})
