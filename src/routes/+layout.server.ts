import type { LayoutServerLoad } from "./$types.js"

export const load: LayoutServerLoad = async (event) => {
  console.log(event)
  const session = await event.locals.auth()
  console.log(session)
  // return { session }
}

