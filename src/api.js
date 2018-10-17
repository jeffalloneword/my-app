import {
  _getPuppies,
} from './puppies'

export function getInitialData() {
  return Promise.all([_getPuppies()]).then(
    ([puppies]) => ({
      puppies
    }),
  )
}
