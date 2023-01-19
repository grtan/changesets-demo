import { print as aPrint } from '@changesets-demo/a'
import { print as bPrint } from '@changesets-demo/b'

export function print() {
  aPrint()
  bPrint()
  console.log('module c')
}
