"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const awilix_1 = require("awilix");
const PrismaLinkRepository_1 = require("../../../../../Context/redilink/shared/infrastructure/persistence/pisma/PrismaLinkRepository");
const PrismaAuthRepository_1 = require("../../../../../Context/redilink/shared/infrastructure/persistence/pisma/PrismaAuthRepository");
const InMemoryCommandBus_1 = require("../../../../../Context/redilink/shared/infrastructure/CommandBus/InMemoryCommandBus");
const CommandHandlers_1 = require("../../../../../Context/redilink/shared/infrastructure/CommandBus/CommandHandlers");
const InMemoryQueryBus_1 = require("../../../../../Context/redilink/shared/infrastructure/QueryBus/InMemoryQueryBus");
const QueryHandlers_1 = require("../../../../../Context/redilink/shared/infrastructure/QueryBus/QueryHandlers");
const LinkCreate_1 = require("../../../../../Context/redilink/Link/application/create/LinkCreate");
const LinkFinder_1 = require("../../../../../Context/redilink/Link/application/find/LinkFinder");
const UserRegistrar_1 = require("../../../../../Context/redilink/Auth/application/register/UserRegistrar");
const CreateLinkCommandHandler_1 = require("../../../../../Context/redilink/Link/application/create/CreateLinkCommandHandler");
const FindLinkQueryHandler_1 = require("../../../../../Context/redilink/Link/application/find/FindLinkQueryHandler");
const LinkGetController_1 = require("../controllers/Link/LinkGetController");
const IndexGetController_1 = require("../controllers/Index/IndexGetController");
const LinkPostController_1 = require("../controllers/Link/LinkPostController");
exports.container = (0, awilix_1.createContainer)({
    injectionMode: awilix_1.InjectionMode.CLASSIC,
    strict: true
});
exports.container.register({
    // Reoisitories
    authRepository: (0, awilix_1.asClass)(PrismaAuthRepository_1.PrismaAuthRespository).singleton(),
    linkRepository: (0, awilix_1.asClass)(PrismaLinkRepository_1.PrismaLinkRepository).singleton(),
    // Usecases
    linkCreator: (0, awilix_1.asClass)(LinkCreate_1.LinkCreator).singleton().inject(() => ({ repository: exports.container.resolve('linkRepository') })),
    linkFinder: (0, awilix_1.asClass)(LinkFinder_1.LinkFinder).singleton().inject(() => ({ repository: exports.container.resolve('linkRepository') })),
    userRegistrar: (0, awilix_1.asClass)(UserRegistrar_1.UserRegistrar).singleton().inject(() => ({ repository: exports.container.resolve('authRepository') })),
    // Command Handlers
    createLinkCommandHandler: (0, awilix_1.asClass)(CreateLinkCommandHandler_1.CreateLinkCommandHandler).singleton().inject(() => ({ linkCreator: exports.container.resolve('linkCreator') })),
    // CommandBus
    commandHandlers: (0, awilix_1.asClass)(CommandHandlers_1.CommandHandlers).singleton().inject(() => ({
        commandHandlers: [
            exports.container.resolve('createLinkCommandHandler')
        ]
    })),
    commandBus: (0, awilix_1.asClass)(InMemoryCommandBus_1.InMemoryCommandBus).singleton().inject(() => ({ commandHandlers: exports.container.resolve('commandHandlers') })),
    // Query Handlers
    findLinkQueryHandler: (0, awilix_1.asClass)(FindLinkQueryHandler_1.FindLinkQueryHandler).singleton().inject(() => ({ linkFinder: exports.container.resolve('linkFinder') })),
    // QueryBus
    queryHandlers: (0, awilix_1.asClass)(QueryHandlers_1.QueryHandlers).singleton().inject(() => ({
        queryHandlers: [
            exports.container.resolve('findLinkQueryHandler')
        ]
    })),
    queryBus: (0, awilix_1.asClass)(InMemoryQueryBus_1.InMemoryQueryBus).singleton().inject(() => ({ queryHandlersInformation: exports.container.resolve('queryHandlers') })),
    // Controllers
    linkGetController: (0, awilix_1.asClass)(LinkGetController_1.LinkGetController).singleton().inject(() => ({ queryBus: exports.container.resolve('queryBus') })),
    linkPostController: (0, awilix_1.asClass)(LinkPostController_1.LinkPostController).singleton().inject(() => ({ commandBus: exports.container.resolve('commandBus') })),
    indexGetController: (0, awilix_1.asClass)(IndexGetController_1.IndexGetController).singleton().inject(() => ({ queryBus: exports.container.resolve('queryBus') }))
});
