import {  Prisma, type PrismaClient } from '@prisma/client'
import { prisma } from '.'
import { type AggregateRoot } from '@/domain/shared/AggregateRoot'
import { type DefaultArgs } from '@prisma/client/runtime/library'







export type prismaEntitys = Lowercase<keyof typeof Prisma.ModelName>
export type prismaEntitysCapitalized = keyof typeof Prisma.ModelName




// export interface Delegate<T extends prismaEntitysCapitalized,ExtArgs extends DefaultArgs = DefaultArgs> {
//   [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model'][T], meta: { name: T } }
// }
/*
Delegate<T, DefaultArgs>
*/
function getDelegate<T extends prismaEntitysCapitalized>(entity: Lowercase<T>):  Prisma.LinkDelegate {

  const A = prisma[entity]
  return A
} 


export interface Delegate<T extends prismaEntitysCapitalized,ExtArgs extends DefaultArgs = DefaultArgs> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model'][T], meta: { name: T } }

  findUnique<T extends Prisma.LinkFindUniqueArgs<ExtArgs>>(
    args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>
  ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

  /**
   * Find one Link that matches the filter or throw an error  with `error.code='P2025'` 
   *     if no matches were found.
   * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
   * @example
   * // Get one Link
   * const link = await prisma.link.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs<ExtArgs>>(
    args?: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>
  ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

  /**
   * Find the first Link that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {LinkFindFirstArgs} args - Arguments to find a Link
   * @example
   * // Get one Link
   * const link = await prisma.link.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends LinkFindFirstArgs<ExtArgs>>(
    args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>
  ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

  /**
   * Find the first Link that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
   * @example
   * // Get one Link
   * const link = await prisma.link.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirstOrThrow<T extends LinkFindFirstOrThrowArgs<ExtArgs>>(
    args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>
  ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

  /**
   * Find zero or more Links that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {LinkFindManyArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Links
   * const links = await prisma.link.findMany()
   * 
   * // Get first 10 Links
   * const links = await prisma.link.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends LinkFindManyArgs<ExtArgs>>(
    args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findMany'>>

  /**
   * Create a Link.
   * @param {LinkCreateArgs} args - Arguments to create a Link.
   * @example
   * // Create one Link
   * const Link = await prisma.link.create({
   *   data: {
   *     // ... data to create a Link
   *   }
   * })
   * 
  **/
  create<T extends LinkCreateArgs<ExtArgs>>(
    args: SelectSubset<T, LinkCreateArgs<ExtArgs>>
  ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

  /**
   * Create many Links.
   *     @param {LinkCreateManyArgs} args - Arguments to create many Links.
   *     @example
   *     // Create many Links
   *     const link = await prisma.link.createMany({
   *       data: {
   *         // ... provide data here
   *       }
   *     })
   *     
  **/
  createMany<T extends LinkCreateManyArgs<ExtArgs>>(
    args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<BatchPayload>

  /**
   * Delete a Link.
   * @param {LinkDeleteArgs} args - Arguments to delete one Link.
   * @example
   * // Delete one Link
   * const Link = await prisma.link.delete({
   *   where: {
   *     // ... filter to delete one Link
   *   }
   * })
   * 
  **/
  delete<T extends LinkDeleteArgs<ExtArgs>>(
    args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>
  ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

  /**
   * Update one Link.
   * @param {LinkUpdateArgs} args - Arguments to update one Link.
   * @example
   * // Update one Link
   * const link = await prisma.link.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends LinkUpdateArgs<ExtArgs>>(
    args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>
  ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

  /**
   * Delete zero or more Links.
   * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
   * @example
   * // Delete a few Links
   * const { count } = await prisma.link.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends LinkDeleteManyArgs<ExtArgs>>(
    args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<BatchPayload>

  /**
   * Update zero or more Links.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Links
   * const link = await prisma.link.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends LinkUpdateManyArgs<ExtArgs>>(
    args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<BatchPayload>

  /**
   * Create or update one Link.
   * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
   * @example
   * // Update or create a Link
   * const link = await prisma.link.upsert({
   *   create: {
   *     // ... data to create a Link
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Link we want to update
   *   }
   * })
  **/
  upsert<T extends LinkUpsertArgs<ExtArgs>>(
    args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>
  ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

  /**
   * Count the number of Links.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {LinkCountArgs} args - Arguments to filter Links to count.
   * @example
   * // Count the number of Links
   * const count = await prisma.link.count({
   *   where: {
   *     // ... the filter for the Links we want to count
   *   }
   * })
  **/
  count<T extends LinkCountArgs>(
    args?: Subset<T, LinkCountArgs>,
  ): Prisma.PrismaPromise<
    T extends $Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : GetScalarType<T['select'], LinkCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a Link.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
   * @example
   * // Ordered by age ascending
   * // Where email contains prisma.io
   * // Limited to the 10 users
   * const aggregations = await prisma.user.aggregate({
   *   _avg: {
   *     age: true,
   *   },
   *   where: {
   *     email: {
   *       contains: "prisma.io",
   *     },
   *   },
   *   orderBy: {
   *     age: "asc",
   *   },
   *   take: 10,
   * })
  **/
  aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

  /**
   * Group by Link.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {LinkGroupByArgs} args - Group by arguments.
   * @example
   * // Group by city, order by createdAt, get count
   * const result = await prisma.user.groupBy({
   *   by: ['city', 'createdAt'],
   *   orderBy: {
   *     createdAt: true
   *   },
   *   _count: {
   *     _all: true
   *   },
   * })
   * 
  **/
  groupBy<
    T extends LinkGroupByArgs,
    HasSelectOrTake extends Or<
      Extends<'skip', Keys<T>>,
      Extends<'take', Keys<T>>
    >,
    OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: LinkGroupByArgs['orderBy'] }
      : { orderBy?: LinkGroupByArgs['orderBy'] },
    OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends MaybeTupleToUnion<T['by']>,
    ByValid extends Has<ByFields, OrderFields>,
    HavingFields extends GetHavingFields<T['having']>,
    HavingValid extends Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? True : False,
    InputErrors extends ByEmpty extends True
    ? `Error: "by" must not be empty.`
    : HavingValid extends False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Keys<T>
    ? 'orderBy' extends Keys<T>
      ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Keys<T>
    ? 'orderBy' extends Keys<T>
      ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the Link model
 */
readonly fields: LinkFieldRefs;
}




export abstract class PrismaRepository<T extends AggregateRoot> {
  private readonly prisma: PrismaClient
  constructor () {
    this.prisma = prisma
  }

  abstract entity (): prismaEntitys

  private getRepository<T extends prismaEntitysCapitalized >(entity: prismaEntitys): Prisma.LinkDelegate<DefaultArgs> {
    return this.prisma[entity]
  }

  private async persist (): Promise<Prisma.> {
    const linkRepository = this.prisma.link
    return linkRepository
  }

  async save (): Promise<void> {
    // TODO
  }

  async find (): Promise<T[]> {
    // TODO
    return []
  }

  async delete (): Promise<void> {
    // TODO
  }
}

const link = new PrismaRepository(prisma)
